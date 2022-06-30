import * as fs from 'fs'
import { resolve } from 'path'
import { expect, test } from 'vitest'

test('test', async () => {
	const readDir = await fs.promises.readdir(resolve('src/docs/mds'))
	const blogJson = await fs.promises.readFile(resolve('src/docs/blog.json'))
	const data: { title: string }[] = JSON.parse(blogJson.toString())
	console.log(data)

	const result = data.map(item => {
		const validity = readDir.some(dir => {
			return dir === item.title + '.md'
		})
		return validity
	})
	expect(
		result.every(item => {
			return item
		})
	).toBe(true)
})
