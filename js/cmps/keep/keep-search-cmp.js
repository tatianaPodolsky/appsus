import keepApp from '../../pages/keep/keep-app.js'

export default {
    props: ['notes'],
    template : `
    <section class="keep-search">
        <input v-model="inputSearch">
        <button><i class="fas fa-search"></i></button>
    </section>
    `,
    data() {
        return {
            inputSearch: '',
        }
    },
    methods: {

    }
}