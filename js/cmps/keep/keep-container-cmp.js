
import notePreview from './keep-note-preview-cmp.js';
import keepApp from '../../pages/keep/keep-app.js';
import keepService from '../../services/keep-service.js'

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
                        <note-preview @deleteNote="removeNote" :note="note"></note-preview>
                    </router-link>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            symbType: null,
        }
    },
    methods: {
        removeNote(note) {
            keepService.removeNote(note);
            this.$emit('updateNotes');
        }
    },
    computed: {

    },
    created() {
    },
    components: {
        notePreview,
    }
}