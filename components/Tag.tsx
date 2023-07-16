import { useEffect, useState } from "react"

export default function Tag({ onClick, title, type }: { onClick: any, title: string, type: "mythic" | "legend" | "epic" | "rare" | "common" }): JSX.Element {
  const [color, setColor] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");

  useEffect(() => {
    if (type == "mythic") {
      setColor("bg-rose-900")
      setBgColor("border-rose-700 text-rose-400")
    }
    if (type == "legend") {
      setColor("bg-amber-700")
      setBgColor("border-amber-600 text-amber-400")
    }
    if (type == "epic") {
      setColor("bg-violet-900")
      setBgColor("border-violet-700 text-violet-400")
    }
    if (type == "rare") {
      setColor("bg-blue-800")
      setBgColor("border-blue-700 text-blue-400")
    }
    if (type == "common") {
      setColor("bg-green-700")
      setBgColor("border-green-600 text-green-400")
    }
  }, []);


  return <div onClick={onClick} className={bgColor + " " + color + " py-[2px] inline-block px-4 bg-opacity-30 rounded-3xl border text-xs"}>
    <p>{title}</p>
  </div>
}