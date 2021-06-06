<template>
	<div class="familiar">
		<Icon :img="'/images/itemimages/' + fam.image" :title="fam.name + ', the ' + fam.type"/>
	</div>
</template>

<script>
import Icon from './Icon.vue'

export default {
	name: 'FamiliarIcon',
	components: {
    Icon
  },
	props: {
		fam: Object
	}
}
</script>

<style scoped>

</style>