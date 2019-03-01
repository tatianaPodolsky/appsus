import imgPreview from './preview-cmps/img-preview-cmp.js'
import textPreview from './preview-cmps/text-preview-cmp.js'
import todoPreview from './preview-cmps/todo-preview-cmp.js'
import keepContainer from '../keep/keep-container-cmp.js'

export default {
    props: ['note'],
    template: `
    <div>
        <component
            @updateNote="updateNote" @updateContent="updateContent"
            :is="cmp.type" 
            :data="cmp.data">
        </component>
        <div class="preview-icons-panel flex">
            <i :class="symbType"></i>
            <div class="edit-panel">
                <i class="fas fa-thumbtack" @click.stop.self="pinNote" :style="[note.pinned ? {color:'black'} : {color:''}]"></i>
                <i class="fas fa-palette"></i>
                <i class="fas fa-edit" @click="isEdit" :style="[cmp.data.isEditing ? {color:'black'} : {color:''}]"></i>
                <i class="fas fa-copy" @click.stop.self="copyNote"></i>
                <i class="fas fa-trash" @click.stop.self="deleteNote"></i>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            cmp: { type: null, data: null },
            symbType: null,
        }
    },
    methods: {
        copyNote() {
            this.$emit('copyNote', this.cmp.data)
        },
        pinNote() {
            this.cmp.data.pinned = !this.cmp.data.pinned;
            this.$emit('updateNote', this.cmp.data)
        },
        deleteNote() {
            this.$emit('deleteNote', this.cmp.data)
        },
        updateNote() {
            this.$emit('updateNote', this.cmp.data)
        },
        isEdit() {
            switch(this.cmp.data.type) {
                case 'textNote':
                this.cmp.data.isEditing = (this.cmp.data.isEditing)? false:'editText';
                break;
                case 'todoNote':
                this.cmp.data.isEditing = (this.cmp.data.isEditing)? false:'editTodo';
                break;
                case 'imgNote':
                this.cmp.data.isEditing = (this.cmp.data.isEditing)? false:'editImg';
                break;
            }
        },
        updateContent(newContent) {
            this.cmp.data.content = newContent;
            this.$emit('updateNote', this.cmp.data)
            this.cmp.data.isEditing = false;
        }

    },
    computed: {

    },
    created() {
        this.cmp.type = this.note.type;
        this.cmp.data = this.note;
        if(this.note.type === 'textNote') this.symbType = "fas fa-font";
        else if(this.note.type === 'imgNote') this.symbType = "fas fa-image";
        else if(this.note.type === 'todoNote') this.symbType = "fas fa-list-ul";

    },
    components: {
        imgNote: imgPreview,
        textNote: textPreview,
        todoNote: todoPreview
    }

}

