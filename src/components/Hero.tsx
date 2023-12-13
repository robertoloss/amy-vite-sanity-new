import { getWebsiteInfo } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from '@portabletext/react'

export const components : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-lg font-normal leading-6">{children}</h1>,
  },
	marks: {
    em: ({children}) => <p className="text-lg font-normal text-destructive leading-6">{children}</p>,
	},
}

export default async function Hero() {
		
	const website = await getWebsiteInfo();
	
	return (
		<div className="w-full min-h-[200px] flex flex-col justify-center items-center pt-20 md:pt-40 pb-20">
			<div className="flex flex-col max-w-[780px] w-full justify-center items-center gap-y-4 "> 
				<h1 className="text-[24px] text-destructive font-semibold">{website[0].name}</h1>
				<h1 className="text-[32px]">{website[0].title}</h1>
				<div className="w-full h-0 border-t border-[B8B9BA]"/>
				<PortableText components={components} value={website[0].description} />
			</div>
		</div>
	)
}
