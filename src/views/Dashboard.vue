<template>
    <div class="main">
        <div class="sidebar">
            <Sidebar/>
        </div>
        <div class="content-right">
        <div class="navbar">
        <Navbar/>
        </div>
        <div class="pages">
            <slot name="slot-pages"></slot>
        </div>

        </div>
    </div>
</template>

<script>
import Sidebar from '../views/components/Sidebar.vue';
import Navbar from '../views/components/Navbar.vue';

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        Navbar,
    }
}
</script>

<style lang="scss" src="../styles/dashboard.scss" scoped>
