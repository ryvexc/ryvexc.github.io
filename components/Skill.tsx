import Link from "next/link"
import { useEffect, useState } from "react"
import { getVisibility } from "@/lib/getVisibility"

interface ISkillData {
  name: string,
  description: string,
  iconSrc: string,
  href: string
}

export default function Skill({ id }: any) {
  const [randomzedSkill, setRandomizedSkill] = useState<ISkillData>({ name: "", description: "", iconSrc: "", href: "" });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
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
  }, []);

  const skillData: Array<ISkillData> = [
    {
      name: "Javascript",
      description: "JavaScript adalah bahasa pemrograman yang mendukung pengembangan aplikasi web dan berjalan di sisi klien (browser) maupun sisi server (Node.js).",
      iconSrc: "/img/javascript.png",
      href: "https://javascript.com"
    },
    {
      name: "Next.js",
      description: "Next.js memungkinkan Anda membuat aplikasi Web full- stack dengan memperluas fitur React terbaru, dan mengintegrasikan alat JavaScript berbasis Rust yang kuat untuk build tercepat.",
      iconSrc: "/next.svg",
      href: "https://nextjs.org"
    },
    {
      name: "MongoDB",
      description: "MongoDB adalah basis data NoSQL berorientasi dokumen yang memiliki skema fleksibel, dukungan untuk replikasi dan sharding, serta kemampuan query yang kuat.",
      iconSrc: "/img/mongo.png",
      href: "https://mongodb.com"
    },
    {
      name: "MySQL",
      description: "MySQL adalah basis data relasional yang populer dengan dukungan untuk transaksi ACID, indeks, optimasi kueri, dan performa yang baik.",
      iconSrc: "/img/mysql.png",
      href: "https://mysql.com"
    },
    {
      name: "Typescript",
      description: "TypeScript adalah bahasa pemrograman statis yang dikembangkan di atas JavaScript, memberikan dukungan untuk tipe data statis, inferensi tipe, generik, dan integrasi yang baik dengan ekosistem JavaScript.",
      iconSrc: "/img/typescript.png",
      href: "https://typescriptlang.org"
    },
    {
      name: "Tailwind CSS",
      description: "Tailwind CSS adalah kerangka kerja CSS yang memberikan utilitas kelas yang kaya untuk membangun antarmuka pengguna dengan cepat dan mudah, dengan fokus pada desain kustomisasi yang mudah.",
      iconSrc: "/img/tailwind.png",
      href: "https://tailwindcss.com"
    },
    {
      name: "Java",
      description: "Java adalah bahasa pemrograman yang banyak digunakan untuk membangun aplikasi lintas platform dan sistem berbasis Java Virtual Machine (JVM).",
      iconSrc: "/img/java.png",
      href: "https://java.com"
    },
    {
      name: "Python",
      description: "Python adalah bahasa pemrograman serbaguna yang mudah dipelajari dan digunakan untuk berbagai tujuan, termasuk pengembangan web, analisis data, dan kecerdasan buatan.",
      iconSrc: "/img/python.png",
      href: "https://python.org"
    },
    {
      name: "C++",
      description: "C++ adalah bahasa pemrograman tingkat tinggi yang mendukung pemrograman prosedural, pemrograman berorientasi objek, dan pemrograman generik.",
      iconSrc: "/img/cpp.png",
      href: "https://cplusplus.com"
    },
    {
      name: "C",
      description: "C adalah bahasa pemrograman yang memiliki sintaks sederhana dan mendukung pemrograman sistem dan pengembangan perangkat keras.",
      iconSrc: "/img/c.png",
      href: "https://id.wikipedia.org/wiki/C_(bahasa_pemrograman)"
    },
    {
      name: "C#",
      description: "C# adalah bahasa pemrograman yang kuat untuk membangun aplikasi Windows dan .NET dengan dukungan fitur seperti tipe yang aman dan garbage collection.",
      iconSrc: "/img/csharp.png",
      href: "https://learn.microsoft.com/en-us/dotnet/csharp/"
    },
    {
      name: "Git",
      description: "Git adalah sistem kontrol versi yang populer yang digunakan untuk mengelola perubahan kode sumber dalam pengembangan perangkat lunak.",
      iconSrc: "/img/git.png",
      href: "https://git-scm.com"
    },
    {
      name: "React",
      description: "React adalah perpustakaan JavaScript untuk membangun antarmuka pengguna yang interaktif dan efisien secara performa dalam aplikasi web.",
      iconSrc: "/img/react.png",
      href: "https://react.dev"
    },
  ]

  useEffect(() => {
    setRandomizedSkill(skillData[Math.floor(Math.random() * skillData.length)]);
    return () => { };
  }, []);

  return <div id={id} className="bg-[#06080f] w-full p-20 px-[10%] flex flex-col gap-16 items-center">
    <div className="flex items-center justify-center gap-16 flex-wrap flex-row-reverse">
      <div className="">
        <h1 className="font-sans text-white font-extrabold lg:text-4xl tracking-tight text-3xl">Beberapa hal lain<br />yang Saya kuasai.</h1>
        <p className='text-slate-400 mt-7 leading-relaxed lg:text-base text-sm'>
          Selain itu, saya menguasai beberapa hal seperti Bahasa Pemrograman, <br />Library, Framework, Database, dan masih banyak lagi.
        </p>
      </div>
      <Link id="chkvis" href={randomzedSkill.href} className='flex justify-center border flex-wrap md:flex-nowrap border-slate-800 p-7 max-w-[508px] rounded-lg hover:shadow-glow duration-200'>
        <div className="">
          <div className="w-28 min-w-[7rem]">
            <img src={randomzedSkill.iconSrc} alt="" className='w-full aspect-square' />
          </div>
          <p className='text-slate-300 text-center mt-3 font-semibold text-base'>{randomzedSkill.name}</p>
        </div>
        <div className="md:ml-6 ml-0 text-slate-400 text-center md:text-left mt-1 text-sm">
          {randomzedSkill.description}
        </div>
      </Link>
    </div>

    <div className='flex gap-7 flex-wrap items-center justify-center max-w-[1400px]'>
      {skillData.map((data: ISkillData) => {
        if (data.name != randomzedSkill.name) return <Link id="chkvis" key={data.name} href={data.href} className="hover:shadow-glow duration-200 hover:cursor-pointer w-60 min-w-[240px] rounded-lg border border-slate-800 flex items-center flex-col p-8">
          <img src={data.iconSrc} alt="" className={data.name != "C#" ? 'w-28 aspect-square' : 'w-24 h-28'} />
          <h1 className='mt-3 text-slate-300'>{data.name}</h1>
        </Link>
      })}
    </div>
  </div>
}