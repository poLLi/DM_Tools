export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'Dead Matter Tools — JLN',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'author', content: 'Just-Look Network' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Unofficial Dead Matter Tools. Everything you need to survive the Zombie Apocalypse in Dead Matter. Use our Character Builder, Ineractive Live Map or our huge database of all the things Dead Matter has to offer.'
            },
            {
                name: 'keywords',
                content:
                    'dead matter tools, community web tools, interactive map, database, character builder, open world, zombie, survival, game'
            },

            // Twitter Meta Tags
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@JL_PoLLi' },
            { name: 'twitter:image', content: 'https://dm.just-look.net/dm_tools.png' },
            { name: 'twitter:title', content: 'Dead Matter Tools — JLN' },
            {
                name: 'twitter:description',
                content:
                    'Unofficial Dead Matter Tools. Everything you need to survive the Zombie Apocalypse in Dead Matter. Use our Character Builder, Ineractive Live Map or our huge database of all the things Dead Matter has to offer.'
            },

            // Open Graph Meta Tags
            { property: 'og:title', content: 'Dead Matter Tools — JLN' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://dm.just-look.net' },
            { property: 'og:image', content: 'https://dm.just-look.net/dm_tools.png' },
            {
                property: 'og:description',
                content:
                    'Unofficial Dead Matter Tools. Everything you need to survive the Zombie Apocalypse in Dead Matter. Use our Character Builder, Ineractive Live Map or our huge database of all the things Dead Matter has to offer.'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
            { rel: 'icon', type: 'image/png', href: '/favicon/android-icon-192x192.png', sizes: '192x192' },
            { rel: 'apple-touch-icon', href: '/favicon/apple-icon-180x180.png', sizes: '180x180' }
        ],
        script: [
            {
                src: 'https://cdn.just-analytics.com/just-analytics.js'
            }
        ]
    },
    loading: false,
    /*
     ** Global CSS
     */
    css: ['~/assets/scss/main.scss'],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: ['~/plugins/vue-clipboard.js', '~/plugins/vue-bootstrap-icons.js'],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        // '@nuxtjs/axios'
        'vue-sweetalert2/nuxt',
        'nuxt-i18n'
    ],
    i18n: {
        locales: [
            {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en-US.js'
            },
            {
                name: 'German',
                code: 'de',
                iso: 'de-DE',
                file: 'de-DE.js'
            },
            {
                name: 'Turkish',
                code: 'tr',
                iso: 'tr-TR',
                file: 'tr-TR.js'
            }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectBrowserLanguage: false
    },
    /*
     ** BootstrapVue Settings
     */
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    // axios: {},
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        extractCSS: true
    }
};
