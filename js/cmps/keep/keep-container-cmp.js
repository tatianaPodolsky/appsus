
import notePreview from './keep-note-preview-cmp.js';
import keepApp from '../../pages/keep/keep-app.js';
import keepService from '../../services/keep-service.js'
import { eventBus } from '../../event-bus.js';

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
                    <note-preview @copyNote="copyNote" @updateNote="updateNote" @deleteNote="removeNote" :note="note">
                    </note-preview>
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
        copyNote(noteToCopy) {
            keepService.copyNote(noteToCopy);
            this.$emit('updateNotes');
        },
        removeNote(noteToRemove) {
            keepService.removeNote(noteToRemove);
            this.$emit('updateNotes');
        },
        updateNote(noteToUpdate) {
            keepService.updateNote(noteToUpdate);
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