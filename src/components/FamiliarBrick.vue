<template>
	<Brick name="familiar">
		<template #header>
			<div class="table-cell" :title="'Buffed Weight (Base Weight ' + active.weight + ' lb)'">
				<span class="famweight">
					{{ active.weight + weightAdjustment }}
				</span>
			</div>
			<div class="table-cell"><!-- TODO: Link to terrarium -->{{ name }}</div>
			<div class="table-cell">&nbsp;</div>
		</template>
		<template #default>
			<div class="table-row">
				<div class="table-cell icon" title="Pick a familiar">
					<!-- TODO: Link to open familiar picker -->
					<FamiliarIcon :fam="active"/>
				</div>
				<div class="table-cell info">
					<a title="Familiar Haiku" class="hand" @click="showHaiku">{{ active.type }}</a>
				</div>
				<div class="table-cell icon">
					<!-- TODO: Link to open familiar equipment picker -->
					<ItemIcon :item="famEquip"/>
				</div>
			</div>
			<!-- TODO: Experience bar, when progress bars are made -->
		</template>
	</Brick>
</template>

<script>
	import Brick from './Brick.vue'
	import FamiliarIcon from './FamiliarIcon.vue'
	import ItemIcon from './ItemIcon.vue'

	export default {
		name: 'FamiliarBrick',
		components: {
			Brick,
			FamiliarIcon,
			ItemIcon
		},
		data() {
			return {
				favs: window.fams.favorites,
				active: window.fams.active,
				weightAdjustment: window.fams.weightAdjustment,
				famEquip: window.items.equipped.familiar
			}
		},
		methods: {
			showHaiku() {
				let haikuWindow = window.open("desc_familiar.php?which=" + this.active.id, "familiar", "height=200,width=400")
				if(haikuWindow.focus) {
					haikuWindow.focus()
				}
			}
		},
		computed: {
			name() {
				return this.active.name || "No Name";
			}
		}
	}
</script>

<style scoped>
.famweight {
	color: blue;
}
</style>
