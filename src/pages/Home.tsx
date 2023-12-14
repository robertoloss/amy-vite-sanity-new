import { useState, useEffect } from "react"
import PreviewCard from "@/components/PreviewCard";
import { getPreviews } from "@/utils/sanity-queries";
import { Preview } from "@/sanity/sanity-types";
import Hero from "@/components/Hero";

function Home() {
	const [previews, setPreviews] = useState<Preview[] | null>(null)
	
	useEffect(() => {
    (async () => {
        const data = await getPreviews();
        setPreviews(data);
    })();
  }, []);	
	

return (
		<div className="flex flex-col relative px-8 pb-20 items-center">
			<Hero/>
			{previews && <div className="flex flex-col gap-y-10">{previews.map(( preview: {preview : Preview}, index: number ) =>
					<PreviewCard key={index} preview={preview.preview}/>
					)}
			</div> }
		</div>
	)
}

export default Home



