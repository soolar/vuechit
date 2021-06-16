<template>
	<div class="table">
		<div class="table-header">
			<div class="table-row">
				<slot name="header"/>
			</div>
		</div>
		<div class="table-body">
			<slot/>
		</div>
		<div class="table-footer" v-if="!!$slots.footer">
			<div class="table-row">
				<slot name="footer"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Table'
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

	.table-footer {
		display: table-footer-group;
	}

	.table-row {
		width: 100%;
		min-height: 1px;
		height: auto;
		margin: 0;
		display: table-row;
	}

	.table-cell {
		margin: 0;
		padding: 0;
		display: table-cell;
	}
</style>
