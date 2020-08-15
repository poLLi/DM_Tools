<template>
    <div>
        <header class="mainhead">
            <b-container class="h-100">
                <b-row class="h-100 text-center" align-h="center" align-content="center">
                    <b-col lg="10">
                        <img src="~/assets/images/dm_logo.png" alt="Dead Matter Tools" class="mainhead-logo" />
                        <h2 class="text-uppercase text-white font-weight-medium">Community Web Tools</h2>
                        <p>( unofficial )</p>
                        <hr class="divider my-4" />
                    </b-col>
                    <b-col lg="8" class="text-white font-weight-light mb-5">
                        <p>Everything you need to survive the Zombie-Apocalypse!</p>
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
    background: linear-gradient(to bottom, rgba(25, 25, 25, 0.5) 20%, #222831 80%),
        url(~assets/images/background-highres.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    min-height: 40rem;
    height: 100vh;
}

.mainhead-logo {
    width: 450px;
}
</style>
