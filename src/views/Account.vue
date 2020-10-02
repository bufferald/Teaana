<template>
  <div>
    <Login />
    <EditProfile />
    <Profile />
  </div>
</template>
<script>
import Profile from "../components/Profile.vue";
import Login from "../components/Login.vue";
import EditProfile from "../components/EditProfile.vue";
export default {
  components: {
    Profile,
    Login,
    EditProfile,
  },
};
</script>
