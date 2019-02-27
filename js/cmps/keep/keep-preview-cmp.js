export default {
    props: ['note', 'type'],
    template: `
         <li>
             <div class="note">

             </div>
        </li>
    `,
    data: {
        note: {
            img: '',
            text: '',
            
        }
    },
    methods: {
    },
    computed: {

    }
}