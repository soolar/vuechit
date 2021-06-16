<template>
	<Icon :img="'/images/itemimages/' + item.image" :title="item.name" class="item"/>
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