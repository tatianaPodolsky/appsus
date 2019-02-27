export default {
    props: ['note'],
    template: `
        <li class="note-preview" >
            <h2>{{note.title}}</h2>
            <img v-bind:src="book.thumbnail" />
 
        </li>
    `,
    data() {
        return {
        }
    },
    computed: {

    },
    created() {

    },
 
}