import keepContainer from '../../cmps/keep/keep-container-cmp.js'
import keepSearch from '../../cmps/keep/keep-search-cmp.js';
import keepNewNote from '../../pages/keep/keep-new-note.js'
import keepService from '../../services/keep-service.js'

export default {
    template : `
        <section class="keep-app">
            <h1>Miss keep</h1>            
            <keep-search :notes="notes" @filterBy="filterNotes"></keep-search>  
            <keep-new-note></keep-new-note>  
            <keep-container @updateNotes="reCreate":notes="notes"></keep-container>
        </section> 
    `,
    data() {
        return {
            notes: null,
            filterBy: ''
        }
    },
    methods: {
        reCreate() {
            keepService.query()
            .then(notes =>this.notes = notes);
        },
        filterNotes(filterBy) {
            if (!filterBy) this.reCreate();
            let searchStr = filterBy.toLowerCase();
            this.notes = this.notes.filter(note => {
                if (note.type === 'imgNote') return ('image').includes(searchStr) && !note.isPinned;
                else if (note.type === 'todoNote') {
                   return (note.content.find(todo => todo.txt.toLowerCase().includes('searchStr')) &&!note.isPinned)
                } else return note.content.toLowerCase().includes(searchStr) && !note.isPinned})
        }
    },
    computed: {
    },
    components: {
        keepSearch,
        keepContainer,
        keepNewNote,
        // keepNoteDetails
    },
    created() {
        keepService.query()
            .then(notes =>this.notes = notes);
    }    
}


//notesToShow() {
//     this.searchTerm = this.filterBy.txt.toLowerCase()
//     return this.notes.filter(note => {
//         return (
//                note.data.subject.toLowerCase().includes(this.searchTerm)
//             || note.data.body.toLowerCase().includes(this.searchTerm)
//             || note.labels.join('').toLowerCase().includes(this.searchTerm)
//         ) &&   !note.isPinned
//     })
// },