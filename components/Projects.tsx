import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Projects(): JSX.Element {
  return (
    <Carousel className='max-w-[1265px]' showThumbs={false} showArrows={true} showIndicators={false} showStatus={false} infiniteLoop={true} swipeable={true} >
      <div className=''>
        <img src="/img/elyx.png" alt="" className="h-[26rem] md:h-[25rem] max-w-[1265px] opacity-0" />
        <div className="w-4/5 p-5 rounded-2xl bg-[#090c16] flex flex-wrap md:flex-nowrap  absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 justify-center">
          <div className="w-full flex items-center justify-center">
            <img className="min-w-[227px]" src="/img/elyx.png" alt="" />
          </div>
          <div className="pl-5 flex flex-col justify-between">
            <div>
              <h1 className="font-semibold font-sans text-xl text-left text-slate-200 mt-4 md:mt-0">Elyx Store</h1>
              <p className="text-sm mt-3 text-slate-400 text-left mb-3">
                Project ini adalah project E-Commerce<br />
                user dapat membuat toko dan menjual barang mereka sendiri<br />
                serta user bisa membeli barang sesuka hati seperti E-Commerce lainnya.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <Link href="https://elyxstore.vercel.app" className='bg-slate-900 px-4 py-1 rounded-2xl'>Kunjungi</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <img src="/img/elyx.png" alt="" className="h-[26rem] md:h-[25rem] max-w-[1265px] opacity-0" />
        <div className="w-4/5 p-5 rounded-2xl bg-[#090c16] flex flex-wrap md:flex-nowrap absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 justify-center">
          <div className="w-full flex items-center justify-center">
            <img src="/img/ryp.png" alt="" />
          </div>
          <div className="pl-5 flex flex-col justify-between">
            <div>
              <h1 className="font-semibold font-sans text-xl text-left text-slate-200 mt-4 md:mt-0">Ryp Language</h1>
              <p className="text-sm mt-3 text-slate-400 text-left mb-3">
                Project ini adalah Project Bahasa Pemrograman yang saya buat sendiri<br />
                Bahasa Pemrograman ini memungkinkan user untuk menulis kode C++ dan Ryp di 1 File yang sama<br />
                Bahasa Pemrograman ini dibuat untuk tujuan performa, karena dibuat dengan C++.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <Link href="https://github.com/ryvexc/ryp-language" className='bg-slate-900 px-4 py-1 rounded-2xl'>Kunjungi</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <img src="/img/elyx.png" alt="" className="h-[26rem] md:h-[25rem] max-w-[1265px] opacity-0" />
        <div className="w-4/5 p-5 rounded-2xl bg-[#090c16] flex flex-wrap md:flex-nowrap absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 justify-center">
          <div className="w-4/5 flex items-center justify-center">
            <img src="/img/masbro.png" alt="" />
          </div>
          <div className="pl-5 flex flex-col justify-between">
            <div>
              <h1 className="font-semibold font-sans text-xl text-left text-slate-200 mt-4 md:mt-0">Masbro (Deprecated)</h1>
              <p className="text-sm mt-3 text-slate-400 text-left mb-3">
                Project ini adalah Project bot discord bernama Masbro<br />
                tujuan project ini dibuat agar server discord menjadi ramai.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <Link href="https://github.com/ryvexc/ryvedesh-bot" className='bg-slate-900 px-4 py-1 rounded-2xl'>Kunjungi</Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel >
  );
};
