# Typescript 类型谓词辨析类型

> 2022/7/3 22:11:44

<!-- >从这里开始输入你的内容 -->

## 关于类型辨析

```
type TypeA = {
	value:string
}
type TypeB = {
	value:number
}
function func(prop:TypeA|TypeB){
	if(typeof prop === "TypeA")//error typeof只能判断基本类型，引用类型是Object
}
```
如上方法不能判断prop的类型到底是TypeA和TypeB

## 接下来，实现类型保护
如果在type里面声明一个属性并且这个属性是这个类型特有的，而且必须实现。那么可以通过判断prop里面是否有这个属性，来区分类型。
```
type TypeA={
	typeA:true
	value:string
}
type TypeB{
	value:number
}

function isOfType<T>(use: any, propertyToCheckFor: keyof T): use is T {
	return (use as T)[propertyToCheckFor] !== undefined
}
```
想这样就可以区分prop是否是typeA。可以再次拓展出更多的类型来区分。
```
const isTypeA = ifOfType<TypeA>(prop,"typeA")//true
```