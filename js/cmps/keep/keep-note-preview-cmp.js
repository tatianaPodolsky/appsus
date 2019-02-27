

export default {
    props: ['note'],
    template: `
        <li class="note-preview" >
            <h2>{{note.title}}</h2>
            <component v-for="(currCmp, idx) in cmps" 
                        :is="cmp.type" 
                        :data="cmp.data">
            </component>
        </li>
    `,
    data() {
        return {
            
        }
    },
    computed: {

    },
    created() {

    },
 
}
const 