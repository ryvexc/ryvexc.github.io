// components/JSXParserComponent.js
import React from 'react';
import Heading1 from './ui/Heading1';
import Heading2 from './ui/Heading2';
import Heading3 from './ui/Heading3';
import Paragraph from './ui/Paragraph';

export type BlogComponents = "rh1" | "rh2" | "rh3" | "pg";

export interface ReactJSONComponent {
  component: BlogComponents,
  content: string,
  className: string | undefined,
}

const ReactJSONCompiler = ({ id, jsonComponent }: { id: string, jsonComponent: ReactJSONComponent }) => {
  if (jsonComponent.component == "rh1") return <Heading1 id={id} className={jsonComponent.className} content={jsonComponent.content} />
  else if (jsonComponent.component == "rh2") return <Heading2 id={id} className={jsonComponent.className} content={jsonComponent.content} />
  else if (jsonComponent.component == "rh3") return <Heading3 id={id} className={jsonComponent.className} content={jsonComponent.content} />
  else if (jsonComponent.component == "pg") return <Paragraph id={id} className={jsonComponent.className} content={jsonComponent.content} />
  else return <></>
};

export default ReactJSONCompiler;
