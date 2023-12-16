import uni from '@dcloudio/vite-plugin-uni';
import {
	defineConfig
} from 'vite'
import limeIcon from './uni_modules/lime-icon/plugin';
import path from 'path'
export default defineConfig({
	plugins: [uni(), limeIcon({
    useInDevelopment: true,
		// 输出的配置
		output: {
			// 输出的文件目录
			dir: path.join(__dirname, '/static/icon/my-icons'),
			// 输出的文件的格式，如果是JSON则是生成一个图标合集， 例如： /static/icons/icons.json
			// file: 'icons.json',
			// 如果是SVG则是每个图标做为单独的文件 例如： /static/icons/xx/xxx.svg
			file: '*.svg',
		},
    input: {
      prefix: "my-icons",
      dir: '/static/svg',
    },
		// // 可选
		// icons: []
	})]
})