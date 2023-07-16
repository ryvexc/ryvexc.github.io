export default function Heading3({ id, className, content }: any): JSX.Element {
  return <h3 id={id} className={`font-bold text-lg lg:text-xl ${className}`}>{content || "Heading-3"}</h3>
}