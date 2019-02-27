
import notePreview from './keep-note-preview-cmp.js';

export default {
    props: [],
    template: `
        <section class="keep-container" >
            <h1>Your notes</h1>
            <ul>
                <li :key="note.id" 
                    v-for="note in notes">
                    <router-link
                    :to="'/note/' + note.id" 
                    >
                        <book-preview  
                            :book="note"  >
                        </book-preview>
                    </router-link>
                    <!-- <button @click="emitDeleted(book.id)">x</button> -->
                </li>
            </ul>
        </section>
    `,
        data() {
            return {
    
            }
        },
        methods: {
    
        },
        computed: {
        },
        created() {
    
        },
        components: {
            notePreview,
        }    
}