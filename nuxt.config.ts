import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    // buildModules: [
    //     '@nuxtjs/style-resources'
    // ],
    // styleResources: {
    //     scss: ['./assets/scss/*.scss'],
    //     hoistUseStatements: true
    // },
    router: {
        scrollBehavior(to: any) {
            if (to.hash) {
                return window.scrollTo({
                    top: document.querySelector(to.hash).offsetTop + window.innerHeight,
                    behavior: 'smooth'
                })
            }
            return window.scrollTo({ top: 0, behavior: 'smooth'})
        }
    }
})
