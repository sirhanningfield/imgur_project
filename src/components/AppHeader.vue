<template>
	<div> 
		<div class="ui secondary pointing menu">
			<router-link to="/" class="ui item">
		      Image Storage
		    </router-link>
		  <div v-if="!isLoggedIn" class="right menu">
		    <a  @click="login" class="ui item">
		      Login
		    </a>
		  </div>
		  <div v-else="isLoggedIn" class="right menu">
		  	<router-link to="/" class="ui item">
		      Galleries
		    </router-link>
		    <router-link to="/upload"  class="ui item">
		    	Upload
		    </router-link>
		  	<a  @click="logout" class="ui item">
		      LogOut
		    </a>

		  </div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default{
	name:'AppHeader',
	methods : {
		...mapActions(['login','logout']) 
	},
	computed: {
		...mapGetters(['isLoggedIn'])
	}
}
</script>
<style>
.ui.secondary.pointing.menu {
	margin-top: 20px;
}
</style>