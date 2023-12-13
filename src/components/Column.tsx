import { components } from "./Hero"
import { PortableText } from "@portabletext/react"
import { ColumnType } from "../utils/CreateColumns"

export default function Column({ column } : { column : ColumnType }) {

	return (
		<div className="flex flex-col max-w-[240px] min-w-[240px] items-start gap-y-4 p-10">
			{}
			{column.iconsYes === false && <h1 className="font-normal w-fit text-5xl text-destructive"> { column.figure } </h1>}
			<h1 className="text-2xl font-semibold">{column.title}</h1>
			<PortableText components={components} value={column.content}/>
		</div>
	)
}

