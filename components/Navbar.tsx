import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ children, setNavbarMenuActive, navbarMenuActive }: any): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const hoverHandler = (e: any, set: boolean) => {
    setNavbarMenuActive(set);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 590) setIsMobile(true);
      else setIsMobile(false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollClick = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: 'start' });
  }

  return <>
    {!isMobile ?
      <ul className="text-white flex gap-10 absolute top-0 justify-center w-full py-4 bg-slate-900 bg-opacity-50 backdrop-blur-xl max-h-16">
        <ul className="flex w-full gap-10 justify-end">
          <li onClick={e => handleScrollClick("home")} className='cursor-pointer mt-1 hover:text-teal-500 hover:underline hover:underline-offset-8 duration-100 underline-offset-0'>Home</li>
          <li onClick={e => handleScrollClick("school")} className='cursor-pointer mt-1 hover:text-teal-500 hover:underline hover:underline-offset-8 duration-100 underline-offset-0'>School</li>
        </ul>
        <li>
          {children}
        </li>
        <ul className="flex w-full gap-10 justify-start">
          <li onClick={e => handleScrollClick("skill")} className='cursor-pointer mt-1 hover:text-teal-500 hover:underline hover:underline-offset-8 duration-100 underline-offset-0'>Skill</li>
          <li onClick={e => handleScrollClick("projects")} className='cursor-pointer mt-1 hover:text-teal-500 hover:underline hover:underline-offset-8 duration-100 underline-offset-0'>Projects</li>
        </ul>
      </ul>
      :
      <ul className="text-white flex gap-10 absolute top-0 justify-center w-full py-4 bg-slate-900 bg-opacity-50 backdrop-blur-xl max-h-16">
        <ul className="flex w-full gap-10 justify-start items-center pl-5">
          <FontAwesomeIcon icon={faBars} className="text-3xl cursor-pointer" onClick={e => hoverHandler(e, !navbarMenuActive)}></FontAwesomeIcon>
        </ul>
        <li>
          {children}
        </li>
        <ul className="flex w-full gap-10 justify-end items-center pr-5">
          <FontAwesomeIcon icon={faBars} className="text-3xl opacity-0"></FontAwesomeIcon>
        </ul>
      </ul >
    }
  </>
}