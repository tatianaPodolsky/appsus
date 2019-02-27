
import notePreview from './keep-note-preview-cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="keep-container" >
            <h1>Your notes</h1>
            <ul>
                <li :key="note.id" 
                    v-for="note in notes">
                    <router-link
                    :to="'/note/' + note.id" 
                    >
                        <note-preview  
                            :note="note"  >
                        </note-preview>
                    </router-link>
                </li>
            </ul>
        </section>
    `,
        data() {
            return {
            }
        },
        components: {
            notePreview,
        }    
}