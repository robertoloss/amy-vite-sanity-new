import { PortableText } from "@portabletext/react"
import { Section } from "@/sanity/sanity-types"
import { PortableTextComponents } from "@portabletext/react"

type Props = {
	section: Section 
}
const components : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-lg font-normal leading-6">{children}</h1>,
  },
	marks: {
    em: ({children}) => <p className="text-lg font-normal text-destructive leading-6">{children}</p>,
	},
}
export default function SectionTop({ section } : Props) {



	return (
		<div className="py-10 flex flex-col w-full items-center">
			<div className="flex flex-col items-center gap-y-4 w-full max-w-[640px]">
				<p className="font-bold text-2xl text-destructive">0{section.section_number}</p>
				<p className="font-bold text-2xl">{section.section_title}</p>
				<div className="w-full h-0 border-t border-[B8B9BA]"/>
				<PortableText components={components} value={section.section_content!} />
			</div>
		</div>
	)
}
