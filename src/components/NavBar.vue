<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://res.cloudinary.com/dzneqacw6/image/upload/v1625062245/images/rebook/reboot-logo.f771c83.png"
                    alt="The best social network"
                >
            </b-navbar-item>
        </template>

        <!-- <template #start>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template> -->

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>My Profile</strong>
                    </a>
                    <a class="button is-dark">
                        Log out
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.navbar {
  background-color: #011334 !important;
}
.is-primary {
  background-color: #00a1c9 !important;
}
.is-dark {
  background-color: #ffffff26 !important;
}
</style>
