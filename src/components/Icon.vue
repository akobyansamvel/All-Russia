<template>
	<i :class="`i i-${name} ${className}`">
		<svg xmlns="http://www.w3.org/2000/svg">
			<use :xlink:href="`#i-${name}`"></use>
		</svg>
	</i>
</template>

<script setup>
defineProps({
	className: {
		type: String,
		default: ''
	},
	name: {
		type: String
	}
})
</script>

<style lang="scss">
.i {
	display: inline-flex;
	font-size: inherit;
	svg {
		height: 1em;
		width: 1em;
		fill: currentColor;
	}
}

.i-r-180 {
	transform: rotate(180deg);
}
</style>
