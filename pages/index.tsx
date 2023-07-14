import ProfileName from '@/components/ProfileName';
import Head from 'next/head'
import Skill from '@/components/Skill';
import Link from 'next/link';
import Projects from '@/components/Projects';
import { use, useEffect, useState } from 'react';
import DynamicIsland from '@/components/DynamicIsland';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faClock, faExclamation } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';
import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import NavbarMenu from '@/components/NavbarMenu';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { truncateText } from '@/lib/truncate';
import { generateAccessToken, getDataPlaylistTracks, getPlaylists } from '@/lib/spotify';

export default function Home() {
  const [isDynamicIslandShow, setIsDynamicIslandShow] = useState<boolean>(false);
  const [notifyElement, setNotifyElement] = useState<JSX.Element>(
    <div className='flex justify-center items-center h-full w-full'>Tidak ada notifikasi.</div>
  );
  const [notifyIcon, setNotifyIcon] = useState(faClock);
  const [notifyIconColor, setNotifyIconColor] = useState<string>("");
  const [notifyHref, setNotifyHref] = useState<string>("");
  const [navbarIsActive, setNavbarIsActive] = useState<boolean>(false);

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      })
    })

    document.querySelectorAll("#chkvis").forEach((element: any) => {
      observer.observe(element)
    });

    setTimeout(() => notify(faExclamation, "text-orange-400", "",
      <div className="flex flex-col justify-center items-center h-full w-full text-lg" >
        <div className="flex gap-7 items-center justify-center">
          <FontAwesomeIcon icon={faExclamation} className="text-5xl text-orange-400"></FontAwesomeIcon>
          <div className="flex flex-col">
            <h1 className='text-center'>Halo, Saya Ryve!</h1>
            <h1 className='text-center text-sm'>Biasa dikenal Arif.</h1>
          </div>
        </div>
      </div >
    ), 2000);

    setTimeout(() => notify(faInstagram, "text-fuchsia-600", "https://instagram.com/ryve.tsx",
      <div className="flex flex-col justify-center items-center h-full w-full text-lg" >
        <div className="flex gap-7 items-center justify-center">
          <FontAwesomeIcon icon={faInstagram} className="text-5xl text-fuchsia-600"></FontAwesomeIcon>
          <div className="flex flex-col">
            <h1 className=''>@ryve.tsx</h1>
            <h1 className='text-center text-sm'>Follow saya di instagram.</h1>
          </div>
        </div>
      </div >
    ), 6000);

    const myPlaylists = getDataPlaylistTracks(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!, process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!);

    const notifySpotify = () => {
      const selectedTrack = myPlaylists[Math.floor(Math.random() * myPlaylists.length)];

      console.log(selectedTrack);

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
    }

    setTimeout(notifySpotify, 10000);
    setInterval(notifySpotify, 4 * 60 * 60 * 1000);
  }, []);

  return (<>
    <Head>
      <title>Ryve | Arif Kurniawan</title>
    </Head>

    <NavbarMenu isActiveState={navbarIsActive} setIsActiveState={setNavbarIsActive}></NavbarMenu>

    <main className="overflow-x-hidden">
      <div className="fixed top-0 w-full z-50">
        <Navbar setNavbarMenuActive={setNavbarIsActive} navbarMenuActive={navbarIsActive}>
          <DynamicIsland iconColor={notifyIconColor} href={notifyHref} notifyIcon={notifyIcon} title="Halo" defaultShow={isDynamicIslandShow} setDefaultShow={setIsDynamicIslandShow}>
            {notifyElement}
          </DynamicIsland>
        </Navbar>
      </div>

      <div id='home' className="bg-[#090c16] min-h-screen w-full items-center justify-center flex flex-col px-[10%]">
        <img src={'/img/me.jpg'} alt={''} className='w-56 h-56 rounded-full duration-500 hover:w-72 hover:h-72' />
        <ProfileName />
        <p className='text-slate-400 text-center lg:text-base text-sm'>Saya adalah seorang pelajar kelas XI di SMK PGRI 3<br />Saya juga mempelajari bahasa pemrograman untuk mengisi waktu luang.</p>
      </div>

      <div className="bg-[#06080f] w-full p-32 px-[10%] flex flex-col gap-16">
        <div className="flex items-center justify-center gap-16 flex-wrap">
          <div>
            <h1 className="font-sans text-white font-extrabold lg:text-4xl text-center sm:text-left tracking-tight text-3xl">Bahasa Pemrograman<br />utama Saya.</h1>
            <p className='text-slate-400 max-w-xl mt-7 leading-relaxed lg:text-base text-sm text-center sm:text-left'>
              Mengapa Saya menggunakan kedua bahasa tersebut?
              Karena Saya memilih profesi sebagai Web Developer
              Sehingga bahasa yang Saya gunakan adalah Javascript dan Typescript.
            </p>
          </div>
          <div className='flex flex-wrap gap-24 px-[1%] justify-center'>
            <div id="chkvis">
              <img src="/img/javascript.png" alt="" className='lg:w-40 lg:h-40 min-h-[8rem] min-w-[8rem] w-32 h-32' />
              <p className='text-slate-200 text-center mt-2 text-base'>Javascript</p>
            </div>
            <div id="chkvis" className="delay-400">
              <img src="/img/typescript.png" alt="" className='lg:w-40 lg:h-40 min-h-[8rem] min-w-[8rem] w-32 h-32' />
              <p className='text-slate-200 text-center mt-2 text-base'>Typescript</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#090c16] w-full py-20 px-[10%] flex flex-col gap-16">
        <div>
          <h1 className="font-sans text-white font-extrabold text-3xl lg:text-4xl tracking-tight text-center">Framework dan Database <br />yang Saya gunakan.</h1>
          <p className='text-slate-400 mt-3 mb-16 leading-relaxed text-center text-sm lg:text-base'>
            Saya menggunakan beberapa framework dibawah untuk tujuan produktifitas atau proyek2 kecil
          </p>
          <div className='flex gap-7 flex-wrap items-center justify-center'>
            <Link id="chkvis" href="https://react.dev" className="hover:shadow-glow  duration-500 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/react.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>React</h1>
            </Link>
            <Link id="chkvis" href="https://mongodb.com" className="hover:shadow-glow  duration-500 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/mongo.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>MongoDB</h1>
            </Link>
            <Link id="chkvis" href="https://nextjs.org" className="hover:shadow-glow  duration-500 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/next.svg" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>Next.js</h1>
            </Link>
            <Link id="chkvis" href="mysql.com" className="hover:shadow-glow  duration-500 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/mysql.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>Mysql</h1>
            </Link>
            <Link id="chkvis" href="https://tailwindcss.com" className="hover:shadow-glow  duration-500 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/tailwind.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>Tailwind CSS</h1>
            </Link>
          </div>
        </div>
      </div>

      <Skill id="skill" />

      <div id="school" className="bg-[#090c16] w-full py-20 px-[10%] flex flex-col gap-16 items-center">
        <div>
          <h1 className="font-sans text-white font-extrabold text-3xl lg:text-4xl tracking-tight text-center">Sekolah dan Pendidikan <br />yang Saya tempuh.</h1>
          <p className='text-slate-400 mt-3 mb-3 leading-relaxed text-center text-sm lg:text-base'>
            Berikut adalah sekolah dan pendidikan yang saya tempuh selama hidup saya
          </p>
        </div>
        <div className='flex gap-12 max-w-7xl flex-wrap justify-center'>
          <div id="chkvis" className=' w-full min-w-[389px] max-w-[389px] hover:scale-105 duration-500'>
            <img src="/img/sd.jpg" className="aspect-w-16 aspect-h-9 object-cover object-center rounded-lg" alt='' />
            <h1 className="text-center mt-6 text-slate-200 text-lg">SDN Lowokwaru 3 Malang</h1>
          </div>
          <div id="chkvis" className=' w-full min-w-[389px] max-w-[389px] hover:scale-105 duration-500'>
            <img src="/img/smp.png" className="aspect-w-16 aspect-h-9 object-cover object-center rounded-lg" alt='' />
            <h1 className="text-center mt-6 text-slate-200 text-lg">SMP Kartika IV-8 Malang</h1>
          </div>
          <div id="chkvis" className=' w-full min-w-[389px] max-w-[389px] hover:scale-105 duration-500'>
            <img src="/img/smk.jpg" className="aspect-w-16 aspect-h-9 object-cover object-center rounded-lg" alt='' />
            <h1 className="text-center mt-6 text-slate-200 text-lg">SMK PGRI 3 Malang</h1>
          </div>
        </div>
      </div>

      <div id="projects" className="bg-[#06080f] w-full p-24 px-[10%] flex flex-col gap-16">
        <div className="flex items-center justify-center gap-16 flex-col">
          <div>
            <h1 className="font-sans text-white font-extrabold text-3xl lg:text-4xl tracking-tight text-center">Beberapa Projects<br />yang pernah Saya buat.</h1>
            <p className='text-slate-400 mt-3 mb-3 leading-relaxed text-center text-sm lg:text-base'>
              Berikut adalah beberapa projects yang pernah saya lakukan<br />untuk melatih Skill dan mengisi waktu produktifitas
            </p>
          </div>
          <Projects />
        </div>
      </div>
    </main>

    <Footer />
  </>)
}
