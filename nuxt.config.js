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
        title: 'JLN | Dead Matter Tools (unofficial)',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Small usefull community build tools for the upcoming Zombie Survival Game Dead Matter from Qi Software, unofficial'
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
                file: 'en-US.js'
            },
            {
                name: 'German',
                code: 'de',
                file: 'de-DE.js'
            },
            {
                name: 'Turkish',
                code: 'tr',
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
    build: {}
};
