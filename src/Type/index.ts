export interface ContentType {
	imgPath: string
	title: string
	detail: string
	time: string
	link?: string
}

export interface BlogCardType {
	id: number
	title: string
	detail: string
	time: string
	tag: string[]
}

export interface MarkdownEle {
	codeBlocks: {
		code: string
		infostring: string
	}
	headings: {
		level: number
		raw: string
		text: string
	}
}
