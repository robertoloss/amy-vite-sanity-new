import SectionTop from "./SectionTop"
import { createColumns } from "@/utils/CreateColumns"
import ThreeColumns from "./ThreeColumns"
import Quote from "./Quote"
import PictureSectionComp from "./PictureSection"
import { PictureSection, Section } from "@/sanity/sanity-types"

type Props = {
	section: Section
	sectionNum: number
}

export default function Section({ section, sectionNum } : Props) {

	const columns = createColumns(section.three_cols_in_section) 
	//console.log("section : ", section)
	//console.log("section.picture_sections : ", section.picture_sections)

	return (<>

		<SectionTop section={section} />

		{section.three_cols_yesNo && <ThreeColumns columns={columns}/>}

		{section.quote && <Quote quote={section.quote!} author={section.section_title!.at(0)!} /> }

		{section.picture_sections  && section.picture_sections.map((pSection: PictureSection, key: number) =>
			<PictureSectionComp pictureSection={pSection} key={sectionNum*10 + key}/>	
		)} 
		
	</>)
}
