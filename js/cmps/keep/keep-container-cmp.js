
import notePreview from './keep-note-preview-cmp.js';
import keepApp from '../../pages/keep/keep-app.js';
import keepService from '../../services/keep-service.js'
import { eventBus } from '../../event-bus.js';

export default {
    props: ['notes'],
    template: `
        <section class="keep-container">
            <ul>
                <li @click="onFocus(note)" :class="{'prev-focus': note.focus}"
                    :style="{backgroundColor: note.style.bColor}"
                    tabindex="idx"
                    :key="note.id" 
                    v-for="(note, idx) in notes"
                    class="note-preview flex">
                    <note-preview @copyNote="copyNote" @updateNote="updateNote" @deleteNote="removeNote" :note="note" :focus="focus">
                    </note-preview>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            symbType: null,
            focus: false
        }
    },
    methods: {
        onFocus(note){
            // if(note.isEditing) return;
            note.focus = !note.focus;
            keepService.updateFocus(note);
            this.$emit('updateNotes');
            if(!note.focus) note.isEditing = false;
        },
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
        },
    },
    computed: {

    },
    created() {
    },

    components: {
        notePreview,
    }
}