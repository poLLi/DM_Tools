<template>
    <b-navbar id="mainNav" toggleable="lg" fixed="top" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand to="/">
                <img
                    src="~/assets/images/jl_logo.png"
                    alt="Just-Look Network Logo"
                    class="d-inlineblock align-top nav-logo"
                />
                | Dead Matter Tools <small class="text-secondary">(unofficial)</small>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="localePath('/')" exact>{{ $t('MENU.START') }}</b-nav-item>
                    <b-nav-item :to="localePath('/build')">{{ $t('MENU.BUILDER') }}</b-nav-item>
                    <b-nav-item :to="localePath('/map')" disabled>Map</b-nav-item>

                    <b-nav-item-dropdown :text="$t('MENU.MORE')" right>
                        <b-dropdown-header> > Database</b-dropdown-header>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item :to="localePath('/info/weapons')" disabled>
                            {{ $t('MENU.MORE_WEAPONS') }}
                        </b-dropdown-item>
                        <b-dropdown-item :to="localePath('/info/items')" disabled>
                            {{ $t('MENU.MORE_ITEMS') }}
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item :to="localePath('/changelog')">Changelog</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item :to="localePath('/contact')">{{ $t('MENU.CONTACT') }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
};
</script>

<style lang="scss" scoped>
.nav-logo {
    width: 30px;
}
</style>
