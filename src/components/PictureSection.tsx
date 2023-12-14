import { PictureSection } from "@/sanity/sanity-types"

type Props = {
	pictureSection : PictureSection
}

export default function PictureSectionComp({ pictureSection } : Props) {
	
	const width = pictureSection.extra_wide ? 1000 : 960
	const bgColor = pictureSection.background_blue ? 'bg-bigpic' : 'bg-background'
	//const height = pictureSection.height ? pictureSection.height : 200

	//console.log("Height = ", height)

	return (
		<div className={`flex flex-col w-[calc(100%+64px)] ${bgColor} py-20 px-8 gap-y-4 items-center`}>
		<div className={ `flex flex-col w-full ` }
			style={{
				width: 'full',
				maxWidth: `${width}px` 
			}}
		>
			<div className={`flex flex-col h-full w-full`}>
				<div className={`flex flex-row justify-between  gap-x-8`}>
					{pictureSection!.pictures!.map(() => {
						

						return (
							<div>
							
							</div>
						)
					})}	
				</div>
				<h1 className="text-background text-base w-fit font-normal ">{pictureSection.description}</h1>
			</div>
		</div>
		</div>
	)
}
