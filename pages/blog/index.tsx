import Head from "next/head"
import Navbar from "@/components/Navbar";
import NavbarMenu from "@/components/NavbarMenu";
import DynamicIsland from "@/components/DynamicIsland";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { truncateText } from "@/lib/truncate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getDataPlaylistTracks } from "@/lib/spotify";

export default function Index(): JSX.Element {
  const [isDynamicIslandShow, setIsDynamicIslandShow] = useState<boolean>(false);
  const [notifyElement, setNotifyElement] = useState<JSX.Element>(
    <div className='flex justify-center items-center h-full w-full'>Tidak ada notifikasi.</div>
  );
  const [notifyIcon, setNotifyIcon] = useState(faClock);
  const [notifyIconColor, setNotifyIconColor] = useState<string>("");
  const [notifyHref, setNotifyHref] = useState<string>("");
  const [navbarIsActive, setNavbarIsActive] = useState<boolean>(false);

  const [blogData, setBlogData] = useState();

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

    <main className="bg-[#090c16] h-screen w-full">
      <div className="fixed top-0 w-full z-50">
        <Navbar setNavbarMenuActive={setNavbarIsActive} navbarMenuActive={navbarIsActive}>
          <DynamicIsland iconColor={notifyIconColor} href={notifyHref} notifyIcon={notifyIcon} title="Halo" defaultShow={isDynamicIslandShow} setDefaultShow={setIsDynamicIslandShow}>
            {notifyElement}
          </DynamicIsland>
        </Navbar>
      </div>
    </main>
  </>
}