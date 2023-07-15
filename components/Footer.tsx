import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer(): JSX.Element {
  return <div className="flex justify-center w-full bg-[#090c16] px-24 py-8 gap-16 flex-wrap">
    <div className="flex items-center flex-col gap-5 justify-center">
      <p className="text-lg font-medium text-center">Social Media</p>
      <div className="flex gap-3 flex-wrap max-w-[64px] justify-center">
        <Link href={"https://github.com/ryvexc"} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          <h1 className="text-white font-light">Github</h1>
        </Link>

        <Link href={"https://instagram.com/ryve.tsx"} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faInstagram} className="text-fuchsia-600"></FontAwesomeIcon>
          <h1 className="text-white font-light">Instagram</h1>
        </Link>

        <Link href={"https://www.youtube.com/channel/UC2ABzBVZUG-YAQQihYS_55w"} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faYoutube} className="text-red-600"></FontAwesomeIcon>
          <h1 className="text-white font-light">Youtube</h1>
        </Link>

        <Link href={"https://open.spotify.com/playlist/6mbZheaFzPWMX5pIe35wYk?si=8248595b1ab34a9a"} className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSpotify} className="text-green-500"></FontAwesomeIcon>
          <h1 className="text-white font-light">Spotify</h1>
        </Link>
      </div>
    </div>

    <div className="flex items-center flex-col gap-3">
      <p className="text-lg font-medium">Dibuat dengan</p>
      <div className="flex gap-1 flex-col">
        <Link href={"https://nextjs.org"} className="flex items-center gap-2">
          <img src="/next.svg" className="max-h-[32px] aspect-square" />
          <h1 className="text-white font-light">Next.js</h1>
        </Link>

        <Link href={"https://tailwindcss.com"} className="flex items-center gap-2">
          <img src="/img/tailwind.png" className="max-h-[32px] aspect-square" />
          <h1 className="text-white font-light">Tailwind.css</h1>
        </Link>

        <Link href={"https://mongodb.com"} className="flex items-center gap-2">
          <img src="/img/mongo.png" className="max-h-[32px] aspect-square" />
          <h1 className="text-white font-light">MongoDB</h1>
        </Link>
      </div>
    </div>
  </div>
}