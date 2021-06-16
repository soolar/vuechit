<template>
	<Picker name="familiar">
		<template #header>
			<div class="table-cell">
				Change familiar
			</div>
		</template>
		<template #default>
			<div v-if="validFams.length > 0" class="table-row">
				<div class="table-cell">
					<FamiliarIcon v-for="fam in validFams" :key="fam.id" :fam="fam"/>
				</div>
			</div>
		</template>
	</Picker>
</template>

<script>
	import Picker from './Picker.vue'
	import FamiliarIcon from './FamiliarIcon.vue'

	export default {
		name: 'FamiliarPicker',
		components: {
			Picker,
			FamiliarIcon
		},
		data() {
			return {
				favs: window.fams.all
			}
		},
		computed: {
			validFams() {
				// you have to own a familiar to favorite it, so the second part
				// isn't really necessary, but who knows if a future path might
				// change that somehow...
				return this.favs //.filter(fam => fam.unrestricted && fam.owned)
			}
		}
	}
</script>

<style>

</style>
