import imgPreview from './preview-cmps/img-preview-cmp.js'
import textPreview from './preview-cmps/text-preview-cmp.js'
import todoPreview from './preview-cmps/todo-preview-cmp.js'
import keepContainer from '../keep/keep-container-cmp.js'

export default {
    props: ['note'],
    template: `
            <component
                :is="cmp.type" 
                :data="cmp.data">
            </component>
            

    `,
    data() {
        return {
            cmp: {type: null, data: null}
        }
    },
    methods: {
    },
    computed: {

    },
    created() {
        console.log('note preview is created');
        
        // debugger;
        this.cmp.type = this.note.type;
        this.cmp.data = this.note;

    },
    components: {
        imgNote: imgPreview,
        textNote: textPreview,
        todoNote: todoPreview
    }
 
}
 
