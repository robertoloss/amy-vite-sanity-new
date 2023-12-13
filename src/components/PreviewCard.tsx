import { PortableText } from "@portabletext/react";
import { components } from "./Hero";
//import arrowLeft from '@/public/arrow_left.svg'
import { Link } from "react-router-dom"; 
import { Preview } from "@/utils/sanity-types";
import { urlFor } from "@/utils/sanity-queries";

type Props = {
	preview: Preview 
}

export default function PreviewCard({ preview } : Props) {
	
	const imgUrl = preview.picture ? urlFor(preview.picture?.image)?.width(2400)?.url() : "" 

	return (<>
		<div className="flex flex-col md:flex-row relative p-6 border-2 rounded-lg w-full 
		max-w-[960px] min-h-[360px] bg-muted gap-x-[80px] gap-y-4">
			<div className="relative flex flex-col w-full h-[200px] md:h-auto">
				
			</div>
			<div className="flex flex-col w-full justify-center ">
				<div className="flex flex-col h-fit leading-none gap-y-2">
					<h1 className="text-[28px] font-bold leading-10"> {preview.title}</h1>
					<PortableText components={components} value={preview.description}/>
					<Link to={`/projects/${preview.slug}`}>
						<div 
							className="flex flex-row gap-x-1 items-center"
						>
							<h1 className="text-lg font-bold text-destructive">Read More</h1>


						</div>
					</Link>
				</div>
			</div>
		</div>	
	</>)
}
