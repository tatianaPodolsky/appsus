
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
                    <router-link :to="'/note/' + note.id">
                        <note-preview :note="note"></note-preview>
                    </router-link>
                    <div class="edit-preview-panel">
                        <i class="fas fa-thumbtack"></i>
                        <i class="fas fa-palette"></i>
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-copy"></i>
                    </div>
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