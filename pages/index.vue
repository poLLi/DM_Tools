<template>
    <div>
        <header class="mainhead">
            <b-container class="h-100">
                <b-row class="h-100 text-center" align-h="center" align-content="center">
                    <b-col lg="10">
                        <img
                            src="~/assets/images/dm_logo.png"
                            alt="Dead Matter Tools"
                            class="mainhead-logo img-fluid"
                        />
                        <h2 class="text-uppercase text-white font-weight-medium">Community Web Tools</h2>
                        <p class="text-primary">( unofficial )</p>
                        <hr class="my-4" />
                    </b-col>
                    <b-col lg="8" class="text-white mb-5">
                        <p>Everything you need to survive the Zombie-Apocalypse!</p>
                    </b-col>
                    <b-col lg="12 mt-5">
                        <p class="font-weight-light text-secondary">
                            Tools made with love by <span class="underline">Just-Look Network</span>
                        </p>
                        <a
                            class="btn btn-primary"
                            href="https://discord.gg/YA7YmeA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Community Discord
                        </a>
                        <a
                            class="btn btn-secondary"
                            href="https://github.com/poLLi/DM_Tools/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github Issue´s
                        </a>
                    </b-col>
                </b-row>
            </b-container>
        </header>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mainhead {
    padding-top: 10vh;
    background: linear-gradient(to bottom, rgba(25, 25, 25, 0.35) 20%, #222831 80%),
        url(~assets/images/background-highres.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    min-height: 40rem;
    height: 100vh;
}

.mainhead-logo {
    max-width: 450px;
}

@media (max-width: 576px) {
    .mainhead-logo {
        max-width: 350px;
    }
}

.underline {
    text-decoration: underline;
}
</style>
