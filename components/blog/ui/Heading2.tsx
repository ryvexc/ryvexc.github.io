export default function Heading2({ id, className, content }: any): JSX.Element {
  return <h2 id={id} className={`font-bold text-xl lg:text-2xl ${className}`}>{content || "Heading-2"}</h2>
}