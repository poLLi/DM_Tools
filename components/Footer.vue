<template>
    <footer class="footer bg-dark pt-3">
        <b-container>
            <b-row class="d-flex">
                <b-col class="align-self-end">
                    <p class="text-muted font-weight-light small p-0 mb-2">
                        <a
                            href="https://www.survivalservers.com/services/game_servers/dead_matter/"
                            target="_blank"
                            rel="noopener"
                        >
                            Dead Matter Server Hosting
                        </a>
                    </p>
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
                    <p class="text-right text-muted small p-0 m-0">Our Official Server Partner</p>
                    <p class="text-right p-0 mb-3">
                        <a
                            href="https://www.survivalservers.com/?trckaff=93783&trckit=DMTools"
                            target="_blank"
                            rel="noopener"
                        >
                            <img
                                src="~/assets/images/survival_servers.png"
                                alt="Just-Look Network Logo"
                                class="d-inlineblock align-top nav-logo"
                                style="height: 36px;"
                            />
                        </a>
                    </p>
                    <p class="text-muted font-weight-light text-right">
                        <a href="https://discord.gg/YA7YmeA" target="_blank" rel="noopener noreferrer">
                            <b-icon icon="chat-right-dots"></b-icon>
                        </a>
                        |
                        <nuxt-link :to="localePath('/imprint')" class="text-muted font-weight-light">Imprint</nuxt-link>
                        |
                        <nuxt-link :to="localePath('/privacy')" class="text-muted font-weight-light">Privacy</nuxt-link>
                        |
                        <nuxt-link :to="localePath('/contact')" class="text-muted font-weight-light">Contact</nuxt-link>
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
