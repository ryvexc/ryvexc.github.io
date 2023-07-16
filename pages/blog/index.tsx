import Head from "next/head";
import Link from "next/link";
import Tag from "@/components/Tag";
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import DynamicIsland from "@/components/DynamicIsland";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { truncateText } from "@/lib/truncate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getDataPlaylistTracks } from "@/lib/spotify";
import JSXParserComponent, { ReactJSONComponent } from "@/components/blog/Core";
import ReactJSONCompiler from "@/components/blog/Core";

export default function Index(): JSX.Element {
  const [isDynamicIslandShow, setIsDynamicIslandShow] = useState<boolean>(false);
  const [notifyElement, setNotifyElement] = useState<JSX.Element>(
    <div className='flex justify-center items-center h-full w-full'>Tidak ada notifikasi.</div>
  );
  const [notifyIcon, setNotifyIcon] = useState(faClock);
  const [notifyIconColor, setNotifyIconColor] = useState<string>("");
  const [notifyHref, setNotifyHref] = useState<string>("");
  const [navbarIsActive, setNavbarIsActive] = useState<boolean>(false);

  const [blogData, setBlogData] = useState<any>({});
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const notify = async (statusIcon: any, iconColor: string, href: string, element: JSX.Element) => {
    setNotifyIconColor(iconColor);
    setNotifyHref(href);
    setNotifyIcon(statusIcon);
    setNotifyElement(element);
    setIsDynamicIslandShow(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsDynamicIslandShow(false);
  }

  useEffect(() => {
    fetch("/api/blog").then(response => {
      if (response.ok) return response.json();
      else {
        setIsError(true);
        setIsLoading(false);
      }
    }).then(data => {
      setBlogData(data)
      setIsLoading(false);
    });

    const myPlaylists = getDataPlaylistTracks(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!, process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!);

    const selectedTrack = myPlaylists[Math.floor(Math.random() * myPlaylists.length)];

    notify(faSpotify, "text-green-500", selectedTrack.href,
      <div className="flex flex-col justify-center items-center h-full w-full text-lg">
        <div className="flex gap-7 items-center justify-center">
          <FontAwesomeIcon icon={faSpotify} className="text-5xl text-green-500"></FontAwesomeIcon>
          <div className="flex flex-col">
            <h1 className='text-md font-semibold'>{truncateText(selectedTrack.title, 20)}</h1>
            <h1 className='text-xs'>{selectedTrack.artist}</h1>
            <h1 className='text-sm'>Ryve is Listening to.</h1>
          </div>
        </div>
      </div>
    )
  }, []);


  return <>
    <Head>
      <title>Ryve | Blog</title>
    </Head>

    <NavbarMenu isActiveState={navbarIsActive} setIsActiveState={setNavbarIsActive}></NavbarMenu>

    <main className="bg-[#090c16] w-full min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <Navbar setNavbarMenuActive={setNavbarIsActive} navbarMenuActive={navbarIsActive}>
          <DynamicIsland iconColor={notifyIconColor} href={notifyHref} notifyIcon={notifyIcon} title="Halo" defaultShow={isDynamicIslandShow} setDefaultShow={setIsDynamicIslandShow}>
            {notifyElement}
          </DynamicIsland>
        </Navbar>
      </div>

      {/* new blog */}
      <div className="p-8 py-16 md:p-16 flex justify-center">
        <div className="p-1 md:p-7 flex flex-col">
          {isLoading && <p>Loading...</p>}
          {(isError && !isLoading) && <p>Error</p>}
          {/* blog entry */}
          {(!isLoading && !isError && blogData) &&
            blogData.map((blog: any) => {
              return <div key={blog._id} className="flex gap-x-10 py-5">
                {/* <img src={blog.thumbnail} alt="" className="w-96 rounded-xl" /> */}
                <div className="flex flex-col gap-y-5 w-full max-w-6xl">
                  <div>
                    <Link href={{
                      pathname: '/blog/page/[id]',
                      query: { id: blog._id }
                    }} className="font-sans text-white font-extrabold lg:text-3xl text-center sm:text-left tracking-tight text-2xl hover:text-teal-500 duration-75">{blog.title}</Link>
                    <p className="text-sm font-light mt-2">Diposting oleh <b>{blog.author}</b></p>
                  </div>
                  <div className="flex gap-x-3">
                    {blog.tags.map((tag: any) => {
                      return <Tag onClick={(e: any) => { }} key={tag._id} title={tag.name} type={tag.type}></Tag>
                    })}
                  </div>
                  <hr />
                  <p className="text-slate-400 w-full line-clamp-3 leading-relaxed lg:text-base text-sm text-center sm:text-left">
                    {blog.content.map((content: ReactJSONComponent) => {
                      console.log(content);
                      return content.content
                    }).join(", ")}
                  </p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </main>
  </>
}