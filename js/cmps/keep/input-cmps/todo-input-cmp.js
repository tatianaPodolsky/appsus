export default {
    template: 
    `<form @submit="saveNewNote">
        <input name="note" v-model="addedNote.content" @keyup.enter="saveNewNote" placeholder="Enter comma separated list.."></input>
        <button type="submit" class="btn-save-note" :disabled="!addedNote.content" value="save">Save</button>
    </form>`,
    data() {
        return {
            addedNote: {
                content: '',
                type: 'todoNote'
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
    },
}