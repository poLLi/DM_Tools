<template>
    <footer class="footer bg-dark pt-3">
        <b-container>
            <b-row class="d-flex">
                <b-col class="align-self-end">
                    <p class="text-muted font-weight-light small">
                        Dead Matter and the Dead Matter Logo are Trademarks of
                        <a href="https://qisoftware.ca/" target="_blank" rel="noopener noreferrer">
                            Quantum Integrity Software Inc.
                        </a>
                        <br />
                        Just-Look Network is not associated with Qi Software Inc. <br />
                        Official Dead Matter Website:
                        <a href="https://playdeadmatter.com" target="_blank" rel="noopener noreferrer">
                            https://playdeadmatter.com
                        </a>
                    </p>
                </b-col>
                <b-col class="align-self-end">
                    <p class="text-muted font-weight-light text-right">
                        <nuxt-link to="/imprint" class="text-muted font-weight-light">Imprint</nuxt-link> |
                        <nuxt-link to="/privacy" class="text-muted font-weight-light">Privacy</nuxt-link> |
                        <nuxt-link to="/contact" class="text-muted font-weight-light">Contact</nuxt-link>
                        <br />
                        Copyright © 2020 Just-Look Network
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style lang="scss" scoped></style>
