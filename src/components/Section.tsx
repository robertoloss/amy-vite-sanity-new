import SectionTop from "./SectionTop"
import { createColumns } from "@/utils/CreateColumns"
import ThreeColumns from "./ThreeColumns"
import Quote from "./Quote"
import PictureSection from "./PictureSection"

type Props = {
	section: any
	sectionNum: number
}

export default function Section({ section, sectionNum } : Props) {

	const columns = createColumns(section.three_cols_in_section) 
	//console.log("section : ", section)
	//console.log("section.picture_sections : ", section.picture_sections)

	return (<>

		<SectionTop section={section} />

		{section.three_cols_yesNo && <ThreeColumns columns={columns}/>}

		{section.quote && <Quote quote={section.quote.quote} author={section.quote.author} /> }

		{section.picture_sections  && section.picture_sections.map((pSection: any, key: number) =>
			<PictureSection pictureSection={pSection} key={sectionNum*10 + key}/>	
		)} 
		
	</>)
}
