import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DynamicIsland({ iconColor, notifyIcon, href, title, children, defaultShow, setDefaultShow }: any) {
  const [show, setShow] = useState<boolean>(false);
  const [time, setTime] = useState<string>("00:00");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      setTime(`${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`);
    }, 1000);

    return () => { }
  });

  return <div onClick={e => window.open(href, '_blank')?.open()} onMouseOver={e => setShow(true)} onMouseOut={e => setShow(false)} className={`transform duration-300 ease-in-out rounded-lg bg-black ${show || defaultShow ? "h-24 w-80" : "h-8 w-40"}`}>
    <div className={`absolute ${!show && !defaultShow ? 'delay-200 opacity-1' : 'opacity-0'} select-none duration-300 overflow-hidden w-full h-full flex justify-center items-center`}>
      <FontAwesomeIcon icon={notifyIcon} className={`absolute left-3 ${iconColor}`}></FontAwesomeIcon>
      {time}
    </div>
    <div className={`${show || defaultShow ? 'opacity-1 scale-100' : 'opacity-0 scale-0'} ease-in-out select-none duration-300 overflow-hidden w-full h-full`}>{children}</div>
  </div>
}