<template>
    <div class="layout-container">
		<div class="left-slider">
			<Slider />
		</div>
		<div class="right-container">
			<router-view />
		</div>
    </div>
</template>

<script>
import Slider from '@/components/SLider'
export default {
	components: {
		Slider
	}
}
</script>

<style lang="less">
.layout-container {
	display: flex;
	.left-slider {
		width: 300px;
	}
	.right-container {
		flex: 1;
		min-height: 100%;
		overflow: auto;
	}
}
</style>