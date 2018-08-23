<template>
	<div class="dropper">
		<input 
			multiple
			accept="imag/*" 
			type="file" @change="uploadImages($event.target.files)">
		<span>Drag files here! </span>
	</div>	
</template>

<script>
import {mapActions} from 'vuex';

export default {
	name : 'UploadForm',
	methods: mapActions(['uploadImages'])
};
</script>

<style scoped>
.dropper {
	height: 30vh;
	border: 2px dashed #eee;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-top: 50px;
}

.dropper:hover{
	background: #eee;
}

input {
	width: 100%;
	height: 30vh;
	position: absolute;
	opacity: 0;
}



</style>