
import notePreview from './keep-note-preview-cmp.js';
import keepApp from '../../pages/keep/keep-app.js';

export default {
    props: ['notes'],
    template: `
        <section class="keep-container" >
            <ul class="flex">
                <li 
                    :style="{backgroundColor: note.style.bColor}"
                    :key="note.id" 
                    v-for="note in notes"
                    class="note-preview flex">
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