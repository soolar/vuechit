<template>
	<Table :id='"chit_brick_" + name' class="chit_brick">
		<template #header>
			<slot name="header"/>
		</template>
		<template #default>
			<slot/>
		</template>
		<template #footer v-if="!!$slots.footer">
			<slot name="footer"/>
		</template>
	</Table>
</template>

<script>
	import Table from './Table.vue'

	export default {
		name: 'Brick',
		components: {
			Table
		},
		props: {
			name: String,
		}
	}
</script>

<style>
	.table.chit_brick {
		border-collapse: separate;
		border: 1px solid #D0D0D0;
		empty-cells: show;
		font-size: 1em;
		padding: 1px 1px 0px 1px;
		border-spacing: 0px;
	}

	.table.chit_brick .table-row .table-cell {
		text-align: center;
		vertical-align: middle;
		border: 0;
	}

	.table.chit_brick .table-header .table-row .table-cell {
		word-wrap: break-word;
		background-color: #F0F0F0;
		padding: 2px;
		border-spacing: 0px;
		font-weight: bold;
	}


</style>
