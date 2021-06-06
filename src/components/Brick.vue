<template>
	<div :id='"chit_brick_" + name' class="table chit_brick">
		<div class="table-header">
			<div class="table-row">
				<slot name="header"></slot>
			</div>
		</div>
		<div class="table-body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Brick',
		props: {
			name: String,
		}
	}
</script>

<style>
	.table {
		width: 100%;
		height: 100%;
		display: table;
	}

	.table-header {
		display: table-header-group;
	}

	.table-body {
		display: table-row-group;
	}

	.table-row {
		width: 100%;
		min-height: 1px;
		height: auto;
		margin: 0;
		display: table-row;
	}

	.table-cell {
		float: left;
		margin: 0;
		padding: 0;
		display: table-cell;
	}

	.table.chit_brick {
		border-collapse: separate;
		empty-cells: show;
		font-size: 1em;
	}

	.table.chit_brick .table-header .table-row .table-cell {
		word-wrap: break-word;
		text-align: center;
		vertical-align: middle;
		background-color: #F0F0F0;
		padding: 2px;
		border-spacing: 0px;
	}
</style>
