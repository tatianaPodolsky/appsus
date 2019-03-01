

export default {
    template: 
    `<form @submit="saveNewNote">
        <input v-model="addedNote.content" @keyup.enter="saveNewNote" placeholder="What is in your mind?"></textarea>
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
            if(this.addedNote.content){
            this.$emit('saveNewNote', this.addedNote)
            }
            this.addedNote.content = '';
        },
    }
}