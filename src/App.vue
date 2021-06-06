<template>
	<FamiliarBrick/>
	<FamiliarIcon :fam="fam"/>
	<button @click="incfam">Next familiar</button>
</template>

<script>
	import FamiliarIcon from './components/FamiliarIcon.vue'
	import FamiliarBrick from './components/FamiliarBrick.vue'

	export default {
		name: 'App',
		components: {
			FamiliarIcon,
			FamiliarBrick
		},
		data() {
			return {
				famnum: 0,
				favs: window.fams.favorites
			}
		},
		computed: {
			fam() {
				return window.fams.all[this.famnum];
			}
		},
		methods: {
			incfam() {
				this.famnum = this.famnum + 1;
			}
		}
	}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
