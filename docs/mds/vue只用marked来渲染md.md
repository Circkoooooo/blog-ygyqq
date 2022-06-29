# vue只用marked来渲染md

## 思路
1. 使用marked库提供的**字符串**解析markdown的api
2. 通过异步来动态的引入markdown的raw格式(纯字符串格式)
3. 调用markdown，用响应式来把内容渲染到页面上去。

## 核心代码
```vue
let temp = ref<string>()
// 通过字符串的形式引入 ?raw
onMounted(async () => {
	const data = await import(`../../../docs/mds/${detail.title}.md?raw`)
	temp.value = marked(data.default)
	// 检查
	const pattern = /<.+>(.+)<\/h1>/g
	const res = pattern.exec(temp.value)
	if (res !== null && res[1] !== detail.title) {
		throw new Error(`The title should be '${detail.title}'`)
	}
})
```


