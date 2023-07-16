export default function Paragraph({ id, className, content }: any): JSX.Element {
  return <p id={id} className={`text-slate-400 leading-relaxed lg:text-base text-sm text-left ${className}`}>{content || "Paragraph"}</p>
}