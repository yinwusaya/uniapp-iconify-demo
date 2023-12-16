// @ts-nocheck
import { computed, defineComponent, ref, onMounted } from '@/uni_modules/lime-shared/vue';
import { addUnit } from '@/uni_modules/lime-shared/addUnit';
import { isObject } from '@/uni_modules/lime-shared/isObject';
import { pathToBase64 } from '@/uni_modules/lime-shared/pathToBase64';
import IconProps from './props';
const name = 'l-icon';
export default defineComponent({
	name,
	externalClasses: ['l-class'],
	options: {
		addGlobalClass: true,
		virtualHost: true,
	},
	props: IconProps,
	emits: ['click'],
	setup(props, { emit }) {
		let { $iconsHost, $iconCollections } = uni as any
		const IconifyURL = 'https://api.iconify.design/'
		const hasImage = ref(false)
		const iconUrl = ref('')
		const hasHost = computed(() => `${props.name}`.indexOf('/') !== -1);
		const isIconify = computed(() => !hasHost.value && `${props.name}`.includes(':'))
		const collectionIcon = computed(() => isObject($iconCollections) && $iconCollections[props.name])
		const isImage = computed(() => hasHost.value || /\.(.+)$/i.test(props.name) || collectionIcon.value && collectionIcon.value.length > 5 || hasImage.value);
		const classes = computed(() => {
			const { prefix } = props
			const iconPrefix = prefix || name
			const iconName = `${iconPrefix}-${props.name}`
			return {
				[iconPrefix]: !isImage.value && prefix,
				[iconName]: !isImage.value,
				[`${name}--image`]: isImage.value,
				[`${name}--font`]: !isImage.value,
				[`is-inherit`]: isImage.value && (props.color || props.inherit)
			}
		})
		
		const getIconUrl = computed(() => {
			if (hasHost.value) {
				return props.name
			}
			if (/\.(.+)$/i.test(props.name)) {
				return `${$iconsHost}${props.name}`
			}
			if (collectionIcon.value && collectionIcon.value.length > 4) {
				return collectionIcon.value
			}
			return iconUrl.value
		})
		const styles = computed(() => {
			return {
				'font-size': addUnit(props.size),
				'color': props.color,
				'--l-icon': getIconUrl.value ? `url("${getIconUrl.value}")` : ''
			}
		})
		const imageLoad = () => {
			hasImage.value = true
		}
		const imageError = () => {
			hasImage.value = false
			if(isIconify.value && iconUrl.value && !iconUrl.value.includes(IconifyURL)) {
				const name = `${props.name}.svg`.replace(/:/g, '/')
				iconUrl.value = `${IconifyURL}${name}`
			}
		}
		const onClick = () => emit('click');
		const addSlash = (string: string) => {
		  if (string.charAt(string.length - 1) !== '/') {
			string += '/';
		  }
		  return string;
		}
		const getBase64 = () => {
			console.log('-getBase64-',isIconify.value,$iconsHost);
			if(isIconify.value) {
				const name = `${props.name}.svg`.replace(/:/g, '/')
				// 本地的SVG需要转成BASE64
				if(!hasHost.value && $iconsHost && $iconsHost.startsWith("/static")) {
					const url = `${addSlash($iconsHost)}${name}`
					// #ifdef MP
					if(!/^(?:https?|ftp):\/\/|^\/\//i.test(url)) {
						pathToBase64(url).then(base64 => {
							iconUrl.value = base64
						})
					} else {
						iconUrl.value = url
					}
					// #endif
					// #ifndef MP
					iconUrl.value = url
					// #endif
				} else {
					iconUrl.value = `${IconifyURL}${name}`
				}
			}
			return ''
		}
		onMounted(getBase64)
		return {
			classes,
			styles,
			isImage,
			onClick,
			props,
			iconUrl,
			imageLoad,
			imageError
		}
	}
})