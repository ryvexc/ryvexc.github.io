import { useState } from "react";

export default function ProfileName(): JSX.Element {
  const [name, setName] = useState<string>("Arif Kurniawan");

  return <div className="flex">
    <h1 className="text-3xl md:text-4xl duration-1000 mt-7 mb-4 font-sans text-white font-extrabold lg:text-5xl tracking-tight text-center mr-2">Saya, {name}</h1>
  </div>
}