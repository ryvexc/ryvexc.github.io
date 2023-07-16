export default function Heading1({ id, className, content }: any): JSX.Element {
  return <h1 id={id} className={`font-bold lg:text-3xl text-2xl ${className}`}>{content || "Heading-1"}</h1>
}