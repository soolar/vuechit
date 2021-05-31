<template>
	<div class="familiar">
		<Icon :img="imgsrc" />
		<span>{{ fam.name }}</span>
	</div>
</template>

<script>
import Icon from './Icon.vue'

export default {
	name: 'Familiar',
	components: {
    Icon
  },
	props: {
		fam: Object
	},
	computed: {
		imgsrc() {
			return "/images/itemimages/" + this.fam.image;
		}
	}
}
</script>

<style scoped>

</style>