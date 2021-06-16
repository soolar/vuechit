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
					<a title="Familiar Haiku" class="hand" @click="showHaiku(active)">{{ active.type }}</a>
					<div v-if="notes" class="notes">({{ notes }})</div>
				</div>
				<div class="table-cell icon">
					<!-- TODO: Link to open familiar equipment picker -->
					<ItemIcon :item="famEquip"/>
				</div>
			</div>
		</template>
		<!-- TODO: Experience bar, when progress bars are made -->
	</Brick>
</template>

<script>
	import Brick from './Brick.vue'
	import FamiliarIcon from './FamiliarIcon.vue'
	import ItemIcon from './ItemIcon.vue'
	import famStuff from '../familiarStuff.js'

	export default {
		name: 'FamiliarBrick',
		components: {
			Brick,
			FamiliarIcon,
			ItemIcon
		},
		data() {
			return {
				active: window.fams.active,
				weightAdjustment: window.fams.weightAdjustment,
				famEquip: window.items.equipped.familiar,
				props: window.props
			}
		},
		methods: {
			showHaiku(fam) {
				famStuff.showHaiku(fam)
			}
		},
		computed: {
			name() {
				return this.active.name || "No Name";
			},
			notes() {
				return famStuff.notes(this.active)
			}
		}
	}
</script>

<style scoped>
.famweight {
	color: blue;
}

#chit_brick_familiar .table-cell.icon {
	width: 40px;
}

#chit_brick_familiar .table-cell.info {
	border-left: 1px solid #F0F0F0;
	border-right: 1px solid #F0F0F0;
	font-weight: bold;
	line-height: 1.4;
}

.notes {
	color: #606060;
	font-weight: normal;
}
</style>
