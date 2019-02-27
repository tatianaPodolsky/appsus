import imgPreview from './preview-cmps/img-preview-cmp.js'
import textPreview from './preview-cmps/text-preview-cmp.js'
import todoPreview from './preview-cmps/todo-preview-cmp.js'

export default {
    props: ['note'],
    template: `
        <li class="note-preview" >
            <h2>{{note.title}}</h2>
            <component  :is="cmp.type" 
                        :data="cmp.data">
            </component>
        </li>
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
        this.cmp.type = this.note.type;
        this.cmp.data = this.note;

    },
    components: {
        imgPreview,
        textPreview,
        todoPreview
    }
 
}
 
