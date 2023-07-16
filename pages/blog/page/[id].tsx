import Head from "next/head"
import Tag from "@/components/Tag"
import Navbar from "@/components/Navbar"
import NavbarMenu from "@/components/NavbarMenu"
import DynamicIsland from "@/components/DynamicIsland"
import { useState, useEffect } from "react"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import Paragraph from "@/components/blog/ui/Paragraph"
import ReactJSONCompiler, { ReactJSONComponent } from "@/components/blog/Core"

export async function getServerSideProps({ query }: any) {
  return {
    props: {
      id: query.id
    }
  }
}

export default function Index({ id }: any): JSX.Element {
  const [isDynamicIslandShow, setIsDynamicIslandShow] = useState<boolean>(false);
  const [notifyElement, setNotifyElement] = useState<JSX.Element>(
    <div className='flex justify-center items-center h-full w-full'>Tidak ada notifikasi.</div>
  );
  const [notifyIcon, setNotifyIcon] = useState(faClock);
  const [notifyIconColor, setNotifyIconColor] = useState<string>("");
  const [notifyHref, setNotifyHref] = useState<string>("");
  const [navbarIsActive, setNavbarIsActive] = useState<boolean>(false);

  const [blogData, setBlogData] = useState<Array<any>>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/blog").then(response => {
      if (response.ok) return response.json();
      else {
        setIsError(true);
        setIsLoading(false);
      }
    }).then(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]._id == id) {
          setBlogData([...blogData, data[i]])
          setIsLoading(false);
          break;
        } else {
          setBlogData([])
          setIsLoading(false);
        }
      }
    });
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

      <div className="p-16 flex justify-center">
        <div className="p-5 flex flex-col justify-center items-center">
          {isLoading && !blogData[0] && <p>Loading...</p>}
          {(isError && !isLoading) && <p>Error</p>}
          {/* blog entry */}
          {(!isLoading && !isError && blogData[0]) &&
            <div key={blogData[0]._id} className="flex gap-x-10 py-5 max-w-5xl">
              <div className="flex flex-col gap-y-5 w-full">
                <div>
                  <h1 className="font-sans text-white font-extrabold lg:text-4xl text-left tracking-tight text-3xl">{blogData[0].title}</h1>
                  <p className="text-sm font-light mt-2">Diposting oleh <b>{blogData[0].author}</b> pada ..:..</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {blogData[0].tags.length > 0 ?
                    blogData[0].tags.map((tag: any, index: number) => {
                      return <Tag onClick={(e: any) => { }} key={index} title={tag.name} type={tag.type}></Tag>
                    })
                    :
                    <Paragraph content="Tambahkan Tags..." />
                  }
                </div>
                <div className="h-px bg-slate-700 mt-2" />
                <div className={`flex flex-col ${blogData[0].lineSpacing}`}>
                  {blogData[0].content.map((comps: ReactJSONComponent, index: number) => {
                    return <ReactJSONCompiler id={"component-" + index} jsonComponent={comps} />
                  })}
                </div>
              </div>
            </div>
          }
          {(!isLoading && !isError && !blogData[0]) && <p> Halaman tidak ditemukan.</p>}
        </div>
      </div>
    </main >
  </>
}