<template>
	<Table :id='"chit_picker_" + name' class="chit_picker">
		<template #header>
			<slot name="header"/>
		</template>
		<template #default>
			<slot/>
		</template>
	</Table>
</template>

<script>
	import Table from './Table.vue'

	export default {
		name: 'Picker',
		components: {
			Table
		},
		props: {
			name: String
		}
	}
</script>

<style>

</style>
