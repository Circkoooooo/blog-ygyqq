# pnpm管理的monorepo

## 1.  初始化
```
npm init 
//npm init --scope=xxx //或者配置一个这样的组织的库名
//从零开始 配置一个npm
```

## 2.  配置pnpm.workspace
> 创建pnpm.workspace.yaml来指定包库
配置下来，pnpm就能识别到你的包管理区
```
packages:
  - 'packages/**'
```

##  3. 创建packages并管理
> 创建包库，并为每个包init初始化，配置dev和build方便根来统一管理
##  4. 配置一些ignore文件等
> 每个package配置npmignore和打包配置，实现每个包的打包，并且发布时的ignore
##  5. 配置根命令来统一发布管理
> 用pnpm的命令等来配置根的build的dev，来实现统一发布
其中使用到了bumpp库用来管理每个包的version
```
"dev": "pnpm -r --parallel --filter=./packages/** run dev",
"build": "pnpm -r --filter=./packages/** run build",
```
##  6.  配置release脚本用于发布。
> 用bumpp来实现版本的统一升级。
```
"release": "bumpp package.json packages/*/package.json --commit --push --tag&& pnpm -r publish --access public",
```


##  7. Rollup打包ts库 

##  8. 【重要配置】 ts的良好支持
> 1. 在rollup配置中没有对类型等输出文件做额外配置的情况下，等于将所有文件都暴露在index.ts中
>  2. 则需要在index.ts中引入所有的types文件，在使用该库的时候能resolve到类型文件，另外提供给外部来使用的函数也要在此导出，其它内部调用的不提供给外部的函数就不导出。
> 3. 下列就给最后打包发布的项目指明了需要寻找类型和寻找主函数的位置。配合的是rollup输出的文件。
```
{
  "name": "foo",
  "version": "zoo",
  "description": "",
  "main": "./dist/bundle.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "rollup -c"
  },
  "author": "cirko",
  "license": "ISC"
}


```