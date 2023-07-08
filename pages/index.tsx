import ProfileName from '@/components/ProfileName';
import Head from 'next/head'
import Skill from '@/components/Skill';
import Link from 'next/link';
import Projects from '@/components/Projects';

export default function Home() {
  return (<>
    <Head>
      <title>Ryve | Arif Kurniawan</title>
    </Head>

    <main>
      <div className="bg-[#090c16] min-h-screen w-full items-center justify-center flex flex-col">
        <img src={'/img/me.jpg'} alt={''} className='w-56 h-56 rounded-full duration-500 hover:w-72 hover:h-72'></img>
        <ProfileName />
        <p className='text-slate-400 text-center'>Saya adalah seorang pelajar kelas XI di SMK PGRI 3<br />Saya juga mempelajari bahasa pemrograman untuk mengisi waktu luang.</p>
      </div>

      <div className="bg-[#06080f] w-full p-32 px-40 flex flex-col gap-16">
        <div className="flex items-center justify-center gap-16 flex-wrap">
          <div>
            <h1 className="font-sans text-white font-extrabold text-4xl tracking-tight">Bahasa Pemrograman<br />utama Saya.</h1>
            <p className='text-slate-400 mt-7 leading-relaxed'>
              Mengapa Saya menggunakan kedua bahasa tersebut?<br />
              Karena Saya memilih profesi sebagai Web Developer<br />
              Sehingga bahasa yang Saya gunakan adalah Javascript dan Typescript.
            </p>
          </div>
          <div className='flex flex-wrap gap-24 px-[1%]'>
            <div className="">
              <img src="/img/javascript.png" alt="" className='w-40 h-40 min-h-[10rem] min-w-[10rem]' />
              <p className='text-slate-200 text-center mt-2 text-base'>Javascript</p>
            </div>
            <div className="">
              <img src="/img/typescript.png" alt="" className='w-40 h-40 min-h-[10rem] min-w-[10rem]' />
              <p className='text-slate-200 text-center mt-2 text-base'>Typescript</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#090c16] w-full py-20 px-32 flex flex-col gap-16">
        <div>
          <h1 className="font-sans text-white font-extrabold text-4xl tracking-tight text-center">Framework dan Database <br />yang Saya gunakan.</h1>
          <p className='text-slate-400 mt-3 mb-16 leading-relaxed text-center'>
            Saya menggunakan beberapa framework dibawah untuk tujuan produktifitas atau proyek2 kecil
          </p>
          <div className='flex gap-7 flex-wrap items-center justify-center'>
            <Link href="https://react.dev" className="hover:shadow-glow duration-200 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/react.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>React</h1>
            </Link>
            <Link href="https://mongodb.com" className="hover:shadow-glow duration-200 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/mongo.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>MongoDB</h1>
            </Link>
            <Link href="https://nextjs.org" className="hover:shadow-glow duration-200 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/next.svg" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>Next.js</h1>
            </Link>
            <Link href="mysql.com" className="hover:shadow-glow duration-200 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/mysql.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>Mysql</h1>
            </Link>
            <Link href="https://tailwindcss.com" className="hover:shadow-glow duration-200 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
              <img src="/img/tailwind.png" alt="" className='w-28 h-28' />
              <h1 className='mt-3 text-slate-300'>Tailwind CSS</h1>
            </Link>
          </div>
        </div>
      </div>

      <Skill />

      <div className="bg-[#090c16] w-full py-20 px-40 flex flex-col gap-16 items-center">
        <div>
          <h1 className="font-sans text-white font-extrabold text-4xl tracking-tight text-center">Sekolah dan Pendidikan <br />yang Saya tempuh.</h1>
          <p className='text-slate-400 mt-3 mb-3 leading-relaxed text-center'>
            Berikut adalah sekolah dan pendidikan yang saya tempuh selama hidup saya
          </p>
        </div>
        <div className='flex gap-12 max-w-7xl flex-wrap justify-center'>
          <div className='w-full min-w-[389px] max-w-[389px] hover:scale-105 duration-500'>
            <img src="/img/sd.jpg" className="aspect-w-16 aspect-h-9 object-cover object-center rounded-lg" alt='' />
            <h1 className="text-center mt-6 text-slate-200 text-lg">SDN Lowokwaru 3 Malang</h1>
          </div>
          <div className='w-full min-w-[389px] max-w-[389px] hover:scale-105 duration-500'>
            <img src="/img/smp.png" className="aspect-w-16 aspect-h-9 object-cover object-center rounded-lg" alt='' />
            <h1 className="text-center mt-6 text-slate-200 text-lg">SMP Kartika IV-8 Malang</h1>
          </div>
          <div className='w-full min-w-[389px] max-w-[389px] hover:scale-105 duration-500'>
            <img src="/img/smk.jpg" className="aspect-w-16 aspect-h-9 object-cover object-center rounded-lg" alt='' />
            <h1 className="text-center mt-6 text-slate-200 text-lg">SMK PGRI 3 Malang</h1>
          </div>
        </div>
      </div>

      <div className="bg-[#06080f] w-full p-24 px-40 flex flex-col gap-16">
        <div className="flex items-center justify-center gap-16 flex-col">
          <div>
            <h1 className="font-sans text-white font-extrabold text-4xl tracking-tight text-center">Beberapa Projects<br />yang pernah Saya buat.</h1>
            <p className='text-slate-400 mt-3 mb-3 leading-relaxed text-center'>
              Berikut adalah beberapa projects yang pernah saya lakukan<br />untuk melatih Skill dan mengisi waktu produktifitas
            </p>
          </div>
          <Projects />
        </div>
      </div>
    </main >
  </>)
}
