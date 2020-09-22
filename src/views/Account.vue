<template>
	<div>
		<NavBar />
		<Login />
		<EditProfile />
		<Profile />
	</div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import Profile from '../components/Profile.vue';
import Login from '../components/Login.vue';
import EditProfile from '../components/EditProfile.vue';
export default {
	components: {
		NavBar,
		Profile,
		Login,
		EditProfile,
	},
};
</script>
