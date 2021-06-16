<template>
	<FamiliarBrick/>
	<FamiliarPicker/>
</template>

<script>
	import FamiliarPicker from './components/FamiliarPicker.vue'
	import FamiliarBrick from './components/FamiliarBrick.vue'

	export default {
		name: 'App',
		components: {
			FamiliarBrick,
			FamiliarPicker
		},
		data() {
			return {
				favs: window.fams.favorites
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
