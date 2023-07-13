import { useState } from "react"

export default function DynamicIsland({ title, children, defaultShow, setDefaultShow }: any) {
  const [show, setShow] = useState<boolean>(false);

  return <div onMouseOver={e => setShow(true)} onMouseOut={e => setShow(false)} className={`absolute left-1/2 transform duration-300 ease-in-out rounded-lg -translate-x-1/2 bg-slate-900 bg-opacity-80 backdrop-blur-xl ${show || defaultShow ? "h-20 w-80" : "h-8 w-40"} mt-5`}>
    {/* <div className={`absolute ${!show && !defaultShow ? 'delay-200 opacity-1' : 'opacity-0'} select-none duration-300 overflow-hidden w-full h-full flex justify-center items-center`}>{title}</div> */}
    <div className={`${show || defaultShow ? 'opacity-1 scale-100' : 'opacity-0 scale-0'} ease-in-out select-none duration-300 overflow-hidden w-full h-full`}>{children}</div>
  </div>
}