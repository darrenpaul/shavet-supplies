import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig()
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'G-1GT0ZJ60PJ'
        }
    })
})
