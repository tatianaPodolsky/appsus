

export default {
    template: 
    `<form @submit="saveNewNote">
        <input name="note" v-model="addedNote.content" @keyup.enter="saveNewNote" placeholder="What is in your mind?"></textarea>
        <button type="submit" class="btn-save-note" :disabled="!addedNote.content" value="save">Save</button>
    </form>`,
    data() {
        return {
            addedNote: {
                content: '',
                type: 'textNote'
        }
    }
    },
    methods: {
        saveNewNote() {
            if(this.addedNote)
            this.$emit('saveNewNote', this.addedNote)
            this.addedNote = '';
        }
    },
}