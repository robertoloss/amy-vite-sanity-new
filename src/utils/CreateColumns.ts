import { urlFor } from "./sanity-queries";
import { Section } from "@/sanity/sanity-types";

export type ColumnType = {
	title: string, 
	content: string[], 
	iconUrl: string | undefined, 
	figure: string,
	iconsYes: boolean
}


export function createColumns( item : Section["three_cols_in_section"] ) : ColumnType[] {
	
	const threeCols = item // === undefined ? {...item} : {...item.three_cols_proj};

	const colTitles = threeCols!.columns_titles ? [ ...threeCols!.columns_titles ] : []
	const colIcons = threeCols!.icons ? [ ...threeCols!.icons ] : []
	const colFigures = threeCols!.figures ? [ ...threeCols!.figures ] : []
	//const colContents = [threeCols!.columns_text_1, threeCols!.columns_text_2, threeCols!.columns_text_3]

  const columns : ColumnType[] = [];

	for (let i=0; i<3; i++) {
		const column : ColumnType = { title: "", content: [], iconUrl: "", figure: "", iconsYes: threeCols!.are_there_icons || false};
		column.title = colTitles[i];
		// column.content = colContents!
		column.iconUrl = colIcons[i]?.image ? urlFor(colIcons[i]?.image)?.width(28)?.url() : ""
		column.figure = colFigures[i]
		columns.push(column)
	}

	return columns
}
