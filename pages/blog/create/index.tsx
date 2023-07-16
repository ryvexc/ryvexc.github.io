import Tag from "@/components/Tag";
import ReactJSONCompiler, { BlogComponents, ReactJSONComponent } from "@/components/blog/Core";
import Paragraph from "@/components/blog/ui/Paragraph";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faCheck, faLineChart, faTextHeight, faTrash, faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Index(): JSX.Element {
  const [blogTitle, setBlogTitle] = useState<string>("Empty Title");
  const [components, setComponents] = useState<Array<ReactJSONComponent>>([]);
  const [availableCategories, setAvaibleCategories] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState<ReactJSONComponent>();
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [contentInputDefaultValue, setContentInputDefaultValue] = useState<string>("");
  const [selectedAlign, setSelectedAlign] = useState<string>("");
  const [lineSpacing, setLineSpacing] = useState<number>(0);
  const [pageCategories, setPageCategories] = useState<Array<any>>([]);

  const inputColumn: React.MutableRefObject<any> = useRef(null);
  const mainPage: React.MutableRefObject<any> = useRef(null);

  const addComponentHandler = (componentId: BlogComponents) => {
    setComponents([...components, { className: "text-left", component: componentId, content: "" }]);
  }

  useEffect(() => {
    const classList = mainPage.current!.classList;

    classList.forEach((className: string) => {
      if (/^gap-.*/.test(className)) {
        classList.remove(className);
      }
    });

    mainPage.current!.classList.add(`gap-${lineSpacing.toString().replace("NaN", "0")}`)

    return () => { };
  }, [lineSpacing]);

  useEffect(() => {
    fetch("/api/tag")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAvaibleCategories(data)
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    document.getElementById(selectedAlign)?.classList.add("bg-slate-700", "rounded");
    document.getElementById("component-" + selectedIndex)?.classList.add("outline", "outline-1", "outline-red-600");

    return () => document.getElementById(selectedAlign)?.classList.remove("bg-slate-700", "rounded");
  }, [selectedAlign]);

  useEffect(() => {
    document.getElementById("component-" + selectedIndex)?.classList.add("outline", "outline-1", "outline-red-600");

    setContentInputDefaultValue(selectedComponent?.content || "");
    inputColumn.current?.focus();

    return () => {
      document.getElementById("component-" + selectedIndex)?.classList.remove("outline", "outline-1", "outline-red-600");
    }
  }, [selectedComponent]);

  const insertCategories = (category: any) => setPageCategories(Array.from(new Set([...pageCategories, category])));

  const generateBlogData = () => {
    const data = {
      title: blogTitle,
      content: components,
      author: "Arif Kurniawan",
      tags: pageCategories,
      lineSpacing: `gap-${lineSpacing.toString().replace("NaN", "0")}`
    }

    if (confirm("Publish?") && data.title !== "Empty Title" && data.content.length > 0 && data.tags.length > 0)
      fetch("/api/post", {
        headers: {
          'Content-Type': "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          data: JSON.stringify(data)
        })
      }).then(response => {
        if (response.ok) window.location.href = "/blog"
        else alert("Gagal memposting!");
      }).catch(error => console.log(error));
    else alert("Tidak Boleh Kosong.")
  }

  const removeCategories = useCallback((index: number) => {
    const skippedIndex = [];

    for (let i = 0; i < pageCategories.length; i++)
      if (i !== index) skippedIndex.push(pageCategories[i]);

    setPageCategories(skippedIndex);
  }, [pageCategories]);

  const investigateComponent = (index: number) => {
    setSelectedAlign(
      components[index].className?.includes("text-left") ? "text-left" :
        components[index].className?.includes("text-center") ? "text-center" :
          components[index].className?.includes("text-right") ? "text-right" :
            "text-justify"
    )

    setSelectedComponent(components[index]);
    setSelectedIndex(index);
  }

  const componentContentChangeHandler = (newContent: string) => {
    setContentInputDefaultValue(newContent)

    const updatedContent: ReactJSONComponent = {
      content: newContent,
      className: selectedComponent!.className,
      component: selectedComponent!.component
    }

    setSelectedComponent(updatedContent);

    const newComponents = [];

    for (let i = 0; i < components.length; i++) {
      if (selectedIndex == i) newComponents.push(updatedContent);
      else newComponents.push(components[i]);
    }

    setComponents(newComponents);
  }

  const resetState = () => {
    setSelectedAlign("");
    setSelectedComponent(undefined);
    setSelectedIndex(-1);
    setContentInputDefaultValue("");
  }

  const destroyComponent = () => {
    setComponents([...components.slice(0, selectedIndex), ...components.slice(selectedIndex + 1)])

    resetState();
  }

  const componentAlignChangeHandler = (direction: string) => {
    console.log(direction);
    setSelectedAlign(direction);

    const updatedContent: ReactJSONComponent = {
      content: selectedComponent!.content,
      component: selectedComponent!.component,
      className: selectedComponent!.className!
        .replace("text-left", direction)
        .replace("text-center", direction)
        .replace("text-right", direction)
        .replace("text-justify", direction)
    }

    setSelectedComponent(updatedContent);

    const newComponents = [];

    for (let i = 0; i < components.length; i++) {
      if (selectedIndex == i) newComponents.push(updatedContent);
      else newComponents.push(components[i]);
    }

    setComponents(newComponents);
  }

  return <>
    <Head>
      <title>Ryve | Create Blog</title>
    </Head>

    <div className="bg-[#090c16] h-screen overflow-hidden w-full flex">
      <div className="bg-[#06080f] w-96 h-screen select-none p-5">
        <h1 className="font-semibold p-6 text-xl pb-3 text-slate-200 border-b border-slate-700">Components</h1>
        <div className="text-slate-400 flex flex-col font-light w-full mt-3">
          {components.map((comp: ReactJSONComponent, index: number) => {
            return <p key={index} onClick={e => investigateComponent(index)} className="hover:bg-slate-900 hover:text-slate-300 text-slate-400 pl-6 py-1">{comp.component}</p>
          })}
        </div>
      </div>

      <div className="relative w-full h-min-screen overflow-y-scroll">
        <ContextMenu>
          <ContextMenuContent className="w-64">
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>Add Components</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem onClick={e => addComponentHandler("rh1")}>Heading 1</ContextMenuItem>
                <ContextMenuItem onClick={e => addComponentHandler("rh2")}>Heading 2</ContextMenuItem>
                <ContextMenuItem onClick={e => addComponentHandler("rh3")}>Heading 3</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem onClick={e => addComponentHandler("pg")}>Paragraph</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem inset onClick={e => window.location.reload()}>
              Reload
              <ContextMenuShortcut>Ctrl + R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset>
              Undo
              <ContextMenuShortcut>Ctrl + Z</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Redo
              <ContextMenuShortcut>Ctrl + Shift + Z</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>

          <ContextMenuTrigger>
            <div className={`flex gap-x-10 max-w-5xl w-full h-full p-16 select-none`}>
              <div className="flex flex-col gap-y-5 w-full">
                <div>
                  <h1 className="font-sans text-white font-extrabold lg:text-4xl text-left tracking-tight text-3xl">{blogTitle || "Empty Title"}</h1>
                  <p className="text-sm font-light mt-2">Diposting oleh <b>Arif Kurniawan</b> pada ..:..</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {pageCategories.length > 0 ?
                    pageCategories.map((tag: any, index: number) => {
                      return <Tag onClick={(e: any) => removeCategories(index)} key={index} title={tag.name} type={tag.type}></Tag>
                    })
                    :
                    <Paragraph content="Tambahkan Tags..." />
                  }
                </div>
                <div className="h-px bg-slate-700 mt-2" />
                <div className="flex flex-col" ref={mainPage}>
                  {components.map((comps: ReactJSONComponent, index: number) => {
                    return <div key={index} onClick={e => investigateComponent(index)} id={"investigated-component-" + index} className="">
                      <ReactJSONCompiler id={"component-" + index} jsonComponent={comps} />
                    </div>
                  })}
                </div>
              </div>
            </div>
          </ContextMenuTrigger>
        </ContextMenu>
      </div>

      <div className="w-80 flex flex-col p-5 bg-[#06080f] h-screen max-h-screen select-none">
        <div className="h-auto">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold p-6 text-xl pb-3 text-slate-200 border-b border-slate-700">Page Control</h1>
            <div className="flex flex-col">
              <p className="text-slate-300">Title</p>
              <textarea onChange={e => setBlogTitle(e.target.value)} rows={3} className="bg-slate-950 text-slate-300 outline-none border-none" placeholder="Add your title here" defaultValue={blogTitle}></textarea>
            </div>

            <div className="flex gap-3">
              <p className="text-slate-300">Line Spacing</p>
              <input className="text-slate-300 bg-[#090c16] w-12" onChange={e => setLineSpacing(parseInt(e.target.value))} type="number" value={lineSpacing} />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-slate-300">Select Categories</p>
              <div className="flex gap-3 flex-wrap">
                {availableCategories.map((category: any, index: number) => {
                  return <Tag onClick={(e: any) => insertCategories(category)} title={category.name} type={category.type} key={index}></Tag>
                })}
              </div>
            </div>
            <div>
              <button onClick={e => generateBlogData()} className="border rounded-lg w-full border-blue-500 bg-blue-600 hover:bg-opacity-30 duration-100 bg-opacity-20 p-4 py-1 text-blue-500"><FontAwesomeIcon icon={faCheck} className="mr-2 text-sm" />Publish</button>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col h-full">
          <h1 className="font-semibold p-6 text-xl pb-3 text-slate-200 border-b border-slate-700">Component Control</h1>
          {selectedComponent ? <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex flex-col">
                <p className="text-center">Text</p>
                <textarea ref={inputColumn} onChange={e => componentContentChangeHandler(e.target.value)} rows={3} className="bg-slate-950 outline-none border-none" placeholder="Add your title here" value={contentInputDefaultValue}></textarea>
              </div>
              <div className="text-center flex flex-col items-center">
                Alignment
                <div className="flex gap-3">
                  <FontAwesomeIcon onClick={e => componentAlignChangeHandler("text-left")} id="text-left" icon={faAlignLeft} className="text-lg p-1" />
                  <FontAwesomeIcon onClick={e => componentAlignChangeHandler("text-center")} id="text-center" icon={faAlignCenter} className="text-lg p-1" />
                  <FontAwesomeIcon onClick={e => componentAlignChangeHandler("text-right")} id="text-right" icon={faAlignRight} className="text-lg p-1" />
                  <FontAwesomeIcon onClick={e => componentAlignChangeHandler("text-justify")} id="text-justify" icon={faAlignJustify} className="text-lg p-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={e => resetState()} className="border rounded-lg w-full border-green-500 bg-green-600 hover:bg-opacity-30 duration-100 bg-opacity-20 p-4 py-1 text-green-500"><FontAwesomeIcon icon={faCheck} className="mr-2 text-sm" />Done</button>
              <button onClick={e => destroyComponent()} className="border rounded-lg w-full border-red-500 bg-red-600 hover:bg-opacity-30 duration-100 bg-opacity-20 p-4 py-1 text-red-500"><FontAwesomeIcon icon={faTrash} className="mr-2 text-sm" />Delete</button>
            </div>
          </div>
            :
            <p>No Selected Component.</p>
          }
        </div>
      </div>
    </div>
  </>
}