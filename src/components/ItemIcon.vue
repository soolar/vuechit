<template>
	<div class="item">
		<Icon :img="'/images/itemimages/' + item.image" :title="item.name"/>
	</div>
</template>

<script>
import Icon from './Icon.vue'

export default {
	name: 'ItemIcon',
	components: {
    Icon
  },
	props: {
		item: Object
	}
}
</script>

<style scoped>

</style>