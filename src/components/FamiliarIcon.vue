<template>
	<Icon :img="'/images/itemimages/' + fam.image" :title="title" class="familiar"/>
</template>

<script>
import Icon from './Icon.vue'
import famStuff from '../familiarStuff.js'

export default {
	name: 'FamiliarIcon',
	components: {
    Icon
  },
	props: {
		fam: Object
	},
	computed: {
		title() {
			let res = this.fam.name + ', the ' + this.fam.type
			let notes = famStuff.notes(this.fam, true)
			if(notes) {
				res += ' (' + notes + ')'
			}
			return res
		}
	}
}
</script>

<style scoped>

</style>