import imgPreview from './preview-cmps/img-preview-cmp.js'
import textPreview from './preview-cmps/text-preview-cmp.js'
import todoPreview from './preview-cmps/todo-preview-cmp.js'
import keepContainer from '../keep/keep-container-cmp.js'
import {eventBus} from '../../event-bus.js'

export default {
    props: ['note'],
    template: `
    <div>
        <div class="send-mail" title="Send me by mail"><i @click.stop.self="sendMail" class="far fa-envelope"></i></div>
        <component
        @updateNote="updateNote" @updateContent="updateContent"
        :is="cmp.type" 
        :data="cmp.data">
        </component>
    <div class="preview-icons-panel flex">
        <i :class="symbType"></i>
        <i class="fas fa-thumbtack" title="Pin me too see on top!" @click.stop.self="pinNote" :style="[note.pinned ? {color:'black'} : {color:''}]"></i>
        <div class="edit-panel" v-if="note.focus">
                <i class="fas fa-palette" title="Change my color!" @click.stop.self="changingColor" :style="[(isChangingColor && note.focus)? {color:'black'} : {color:''}]"></i>
                <i class="fas fa-edit" title="Edit me" @click.stop.self="isEdit" :style="[cmp.data.isEditing ? {color:'black'} : {color:''}]"></i>
                <i class="fas fa-copy" title="Copy me, I'm awesome" @click.stop.self="copyNote"></i>
                <i class="fas fa-trash" title="Delete me :(" @click.stop.self="deleteNote"></i>
            </div>
        </div>
    
    <div class="color-picker flex" v-if="(isChangingColor && note.focus)">
        <div class="pink" @click.stop="changeColor('pink')"><i class="fas fa-certificate"></i></div>
        <div class="yellow" @click.stop="changeColor('yellow')"><i class="fas fa-certificate"></i></div>
        <div class="green" @click.stop="changeColor('lightgreen')"><i class="fas fa-certificate"></i></div>
        <div class="blue" @click.stop="changeColor('lightblue')"><i class="fas fa-certificate"></i></div>
        <div class="violet" @click.stop="changeColor('violet')"><i class="fas fa-certificate"></i></div>
        <div class="orange" @click.stop="changeColor('orange')"><i class="fas fa-certificate"></i></div>
    </div>
    </div>
    `,
    data() {
        return {
            cmp: { type: this.note.type, data: this.note },
            symbType: null,
            isChangingColor: null
        }
    },
    methods: {
        sendMail() {
            console.log('sending....');
            eventBus.$emit('sentNote', this.cmp.data);
            this.$router.push('/mail-app');
        },
        changeColor(newColor) {
            this.note.style.bColor = newColor;
            this.$emit('updateNote', this.cmp.data);
        },
        changingColor() {
            this.isChangingColor = !this.isChangingColor;
        },
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
    created() {
        this.cmp.type = this.note.type;
        this.cmp.data = this.note;
        if(!this.note.focus) this.isChangingColor = false;
        if(this.note.type === 'textNote') this.symbType = "fas fa-font";
        else if(this.note.type === 'imgNote') this.symbType = "fas fa-image";
        else if(this.note.type === 'todoNote') this.symbType = "fas fa-list-ul";

    },
    watch: {
        note: function(newVal, oldVal) {
            this.cmp.data = this.note;
            this.isChangingColor = false;
        },
    },
    components: {
        imgNote: imgPreview,
        textNote: textPreview,
        todoNote: todoPreview
    }

}

