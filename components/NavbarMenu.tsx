export default function NavbarMenu({ isActiveState }: any) {
  const list = [
    ["Home", "home", "bg-green-500"],
    ["School", "school", "bg-yellow-400"],
    ["Skill", "skill", "bg-indigo-700"],
    ["Projects", "projects", "bg-red-700"]
  ];

  return <div className={`${!isActiveState ? "-left-80" : "left-0"} duration-300 ease-in-out fixed w-80 bg-slate-800 bg-opacity-50 backdrop-blur-xl h-screen z-10`}>
    <ul className="mt-16 p-6 flex flex-col gap-y-3">
      {list.map((item) => {
        return <li key={item[0]} onClick={e => document.getElementById(item[1])?.scrollIntoView({ behavior: "smooth" })} className="overflow-hidden relative bg-slate-800 p-3 rounded-lg duration-200 hover:rounded-l-none bg-opacity-50 select-none cursor-pointer group">
          <h4 className="ml-2 group-hover:ml-4 duration-200">{item[0]}</h4>
          <span className={`${item[2]} absolute left-0 top-0 bottom-0 w-1 duration-200 ease-in-out group-hover:w-2`}></span>
        </li>
      })}
    </ul>
  </div>
}