<template>
    <b-navbar id="mainNav" toggleable="lg" fixed="top" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand to="/">
                <img
                    src="~/assets/images/jl_logo.png"
                    alt="Just-Look Network Logo"
                    class="d-inlineblock align-top nav-logo"
                />
                | Dead Matter - Web Tools
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/" exact>Start</b-nav-item>
                    <b-nav-item to="/build">Charcater-Builder</b-nav-item>
                    <b-nav-item to="/map" disabled>Map</b-nav-item>
                    <b-nav-item-dropdown text="Info" right disabled>
                        <b-dropdown-item to="/info/weapons" disabled>Weapons</b-dropdown-item>
                        <b-dropdown-item to="/info/items" disabled>Items</b-dropdown-item>
                        <b-dropdown-item to="/info/Perks" disabled>Perks</b-dropdown-item>
                        <b-dropdown-item to="/info/stats" disabled>Stats</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style lang="scss" scoped>
.nav-logo {
    width: 30px;
}
</style>
