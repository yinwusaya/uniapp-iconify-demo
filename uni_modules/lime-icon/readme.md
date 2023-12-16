# lime-icon 图标
- 基于uniapp vue3 实现的图标插件，方便快捷的使用[iconify](https://iconify.design/)图标集合。超过150,000个开源矢量图标。
- 当前仅为测试阶段，欢迎提出你的建议

## 使用
### 基础使用
到 [iconify](https://icon-sets.iconify.design/) 网站找到需要的图标,通过 `name` 属性来指定需要使用的图标
![](https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/263cfd20-39e6-11ee-b4f0-9bc760224a38_1.png?1693883817)
![](https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/263cfd20-39e6-11ee-b4f0-9bc760224a38_2.png?1693883822)

```html
<l-icon name="ri:aliens-fill" />
```

### 使用图标URL
```html
<l-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"></l-icon>
```

### 图标颜色
通过 `color` 属性来设置图标的颜色。

```html
<l-icon name="ri:aliens-fill" color="#1989fa" />
<l-icon name="icon-park-outline:acoustic" color="#ee0a24" />
```

### 图标大小

通过 `size` 属性来设置图标的尺寸大小，可以指定任意 CSS 单位。

```html
<!-- 不指定单位，默认使用 px -->
<l-icon name="ri:aliens-fill" size="40" />
<!-- 指定使用 rem 单位 -->
<l-icon name="ri:aliens-fill" size="34rpx" />
```



### 自定义字体图标
- 如果需要自定义自己的 字体图标，可以引入 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用
- 样式必须是放在页面或App.vue

```css
@font-face {
	font-family: 'iconfont';  /* Project id 2624395 */
	src:  url('data:font/ttf;charset=utf-8;base64,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Y2E4OwHneTx5eTx5eTx5eTwAAAAAAwAA/9UDqwMrABQAKQA1AAAFIicmJyY0NzY3NjIXFhcWFAcGBwYnMjc2NzY0JyYnJiIHBgcGFBcWFxYTNxcHFwcnByc3JzcCAHRjYTg7OzhhY+hjYTg7OzhhY3RdT00uLi4uTU+6T00uLi4uTU9deTx5eTx5eTx5eTwrOzhhY+hjYTg7OzhhY+hjYTg7Vi4uTU+6T00uLi4uTU+6T00uLgGReTx5eTx5eTx5eTwAAAAAABIA3gABAAAAAAAAABUAAAABAAAAAAABAAgAFQABAAAAAAACAAcAHQABAAAAAAADAAgAJAABAAAAAAAEAAgALAABAAAAAAAFAAsANAABAAAAAAAGAAgAPwABAAAAAAAKACsARwABAAAAAAALABMAcgADAAEECQAAACoAhQADAAEECQABABAArwADAAEECQACAA4AvwADAAEECQADABAAzQADAAEECQAEABAA3QADAAEECQAFABYA7QADAAEECQAGABABAwADAAEECQAKAFYBEwADAAEECQALACYBaQpDcmVhdGVkIGJ5IGljb25mb250Cmljb25mb250UmVndWxhcmljb25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4BAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPAAppbWFnZS1maWxsD2ltYWdlLWZhaWwtZmlsbBFhcnJvdy1sZWZ0LXMtZmlsbBFhcnJvdy1sZWZ0LXMtbGluZQ9hcnJvdy11cC1zLWZpbGwPYXJyb3ctdXAtcy1saW5lEmFycm93LXJpZ2h0LXMtbGluZRJhcnJvdy1yaWdodC1zLWZpbGwRYXJyb3ctZG93bi1zLWxpbmURYXJyb3ctZG93bi1zLWZpbGwKY2xvc2UtZmlsbBFjbG9zZS1jaXJjbGUtZmlsbBFjbG9zZS1jaXJjbGUtbGluZQAAAAAA') format('truetype');
}
.custom {
	font-family: 'iconfont' !important; 
}
.custom-image-fill::before{
	content: '\e771';
}
```

```html
<!-- 通过 prefix 指定类名为 custom -->
<l-icon prefix="custom" name="image-fill"></l-icon>
```


## 私有化
默认会使用`iconify`的API，如果你想私有化可按以下步骤来
### 第一步 安装

```cmd
yarn add @iconify/json @iconify/tools @iconify/utils
```
### 第二步 配置
#### 1、手动下载
- 需要在根目录新建一个lime.config.js文件

```
// 在根目录新建一个lime.config.js文件
// lime.config.js
module.exports = {
	// 输入的文件目录，自有的SVG，如果没有则不需要
	input: {
		prefix: "my-icons",
		dir: '/static/svg',
	},
	// 输出的配置
	output: {
		// 输出的文件目录
		dir: '/static/icons',
		// 输出的文件的格式，如果是JSON则是一个图标合集
		// file: 'icons.json',
		// 如果是SVG则是每个图标做为单独的文件
		file: '*.svg',
	},
	// 指定使用的图标
	icons: [
		'el:address-book', 
		'uil:12-plus',
		'icon-park-outline:abdominal',
		'icon-park-outline:acoustic'
	]
}
```
在终端执行脚本
```
node ./uni_modules/lime-icon/generate-icons.js
```

#### 2、自动引入
如果使用的是vue3，通过配置 **vite.config.js**达到自动引入

```js
import uni from '@dcloudio/vite-plugin-uni';
import limeIcon from './uni_modules/lime-icon/plugin';
import path from 'path'
export default defineConfig({
	plugins: [uni(), limeIcon({
		// 输出的配置
		output: {
			// 输出的文件目录
			dir: path.join(__dirname, '/static/icons'),
			// 输出的文件的格式，如果是JSON则是生成一个图标合集， 例如： /static/icons/icons.json
			// file: 'icons.json',
			// 如果是SVG则是每个图标做为单独的文件 例如： /static/icons/xx/xxx.svg
			file: '*.svg',
		},
		// 可选
		icons: []
	})]
})
```


### 第三步 挂载图标地址

```js
// main.js
// 如果配置的是json则引入json
import icons from './static/icons/icons.json'
uni.$iconCollections = icons;
// 如果配置的是单个svg则指定目录，后期可上传到后端，不占用本地空间
uni.$iconsHost = '/static/icons/';
```





## API

### Props

| 参数                       | 说明                                                         | 类型             | 默认值       |
| --------------------------| ------------------------------------------------------------ | ---------------- | ------------ |
| name                      | 图标名称                                                      | <em>string</em>  | ``     |
| color                     | 颜色                                   | <em>string</em>  | ``     |
| size                     | 尺寸                         | <em>string</em>  | `square`     |
| prefix                   | 字体图标前缀                                 | <em>string</em>  | ``     |
| inherit                  | 是否继承颜色                          | <em>boolean</em>  | `true`     |

### Events
| 参数                       | 说明                                                         | 参数             | 
| --------------------------| ------------------------------------------------------------ | ---------------- |
| click              		| 点击  |  | 


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)