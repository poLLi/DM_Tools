<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">Changelog</h2>
                <p class="desc pl-4">well... yea that what you would expext here</p>
            </div>

            <div class="info">
                <h2 class="title text-monospace">Version 1.0.2</h2>
                <div class="pl-4">
                    <p class="text-muted">blabla version ist toll blabla</p>
                    <p class="text-primary h5">🐛 Bug-Fixes</p>
                    <ul>
                        <li>Fixed an issue where on mobile u still got tooltipps in your way</li>
                        <li>Fixed server-side rendering out of sync with client-side</li>
                        <li>Fixed loading of favicon correctly</li>
                        <li>Fixed setting active Occupation / Peak</li>
                    </ul>
                    <p class="text-primary h5">✏️ Improvements</p>
                    <ul>
                        <li>
                            Improved length of Saved Build URL
                            <ul>
                                <li class="small text-muted">unfortunately old saved url´s no longer work :(</li>
                            </ul>
                        </li>
                        <li>
                            Build url will now be generated each time you select something and set it as your browser
                            url
                            <ul>
                                <li class="small text-muted">
                                    no longer need to click on "Save Build", just copy your url from the browser
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.0.1</h2>
                <div class="pl-4">
                    <p class="text-muted">Updated Character Builder design and functions</p>
                    <p class="text-primary h5">🎨 Design Changes</p>
                    <ul>
                        <li>Changed Theme Colors</li>
                        <li>Added slight Shadows to Cards</li>
                        <li>Added Icons all over the place</li>
                        <li>Added Mobile friendly stuff</li>
                    </ul>
                    <p class="text-primary h5">✨ Features</p>
                    <ul>
                        <li>Added save Build function</li>
                        <li>Added loading saved build function</li>
                        <li>Added Perk Stats Calculation</li>
                        <li>Added Perk Stats Listing</li>
                    </ul>
                </div>
            </div>
            <div class="info">
                <h2 class="title text-monospace">Version 1.0.0</h2>
                <div class="pl-4">
                    <p class="text-muted">Initial Release</p>
                </div>
            </div>
        </b-container>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.full-height {
    min-height: 90vh;
    padding-top: 10vh;
}

.info {
    margin-top: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    .title {
        text-decoration: underline;
    }
}
</style>
