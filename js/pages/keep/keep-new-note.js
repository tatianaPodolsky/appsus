import keepApp from './keep-app.js'
import keepService from '../../services/keep-service.js'
import imgInput from '../../cmps/keep/input-cmps/img-input-cmp.js'
import textInput from '../../cmps/keep/input-cmps/text-input-cmp.js'
import todoInput from '../../cmps/keep/input-cmps/todo-input-cmp.js'
export default {
    props: ['notes'],
    template: `
    <section class="keep-new-note">
        <!-- <label for="note">New note</label> -->
            <component
                :is="cmp.type" 
                :data="cmp.data"
                @saveNewNote="saveNewNoteToDB">
            </component>
        <button @click="setType(1)"><i class="fas fa-font"></i></button>
        <button @click="setType(2)"><i class="fas fa-image"></i></button>
        <button @click="setType(3)"><i class="fas fa-list-ul"></i></button>
    </section>
    `,
    data() {
        return {
            cmp: {type: null, data: null},
            selectedCmp: 'textNote',
        }
    },
    methods: {
        setType(typeNum) {
            switch(typeNum) {
                case 1:
                    this.cmp.type = 'textNote';
                    break;
                case 2:
                    this.cmp.type = 'imgNote';
                    break;
                case 3:
                    this.cmp.type = 'todoNote';
                    break;
            }
        },
        saveNewNoteToDB(addedNote) {
            keepService.addNote(addedNote.type, addedNote.content);
        }
    },
    created() {
        console.log('note input is created');
        this.cmp.type = this.selectedCmp;
        // this.cmp.data = this.note;

    },
    components: {
        imgNote: imgInput,
        textNote: textInput,
        todoNote: todoInput
    }
}