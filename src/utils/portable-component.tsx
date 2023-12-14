import { PortableTextComponents } from "@portabletext/react"


export const components : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-lg font-normal leading-6">{children}</h1>,
  },
	marks: {
    em: ({children}) => <p className="text-lg font-normal text-destructive leading-6">{children}</p>,
	},
}
