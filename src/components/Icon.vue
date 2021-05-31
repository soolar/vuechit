<template>
	<img class="chit_icon" :src="img" />
</template>

<script>
export default {
	name: 'Icon',
	props: {
		img: String
	}
}
</script>

<style scoped>
img.chit_icon {
  border: 1px solid #D0D0D0 !important;
  margin: 1px !important;
}
</style>
