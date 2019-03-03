import keepContainer from '../../cmps/keep/keep-container-cmp.js'
import keepSearch from '../../cmps/keep/keep-search-cmp.js';
import keepNewNote from '../../pages/keep/keep-new-note.js'
import keepService from '../../services/keep-service.js'
import { eventBus } from '../../event-bus.js'
export default {
    template : `
        <section class="keep-app" @click="unFocus">
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
            .then(notes =>this.notes = notes)
            .then(()=> this.notes = this.notesToShow())
        },
        filterNotes(filterBy) {
            console.log('filtering');
            this.filterBy = filterBy;
            if (!filterBy) this.reCreate();
            let searchStr = filterBy.toLowerCase();
            this.notes = this.notes.filter(note => {
                if (note.type === 'imgNote') return ('image').includes(searchStr) || note.content.toLowerCase().includes(searchStr)
                else if (note.type === 'todoNote') {
                   return (note.content.find(todo => todo.txt.toLowerCase().includes('searchStr')))
                } else return note.content.toLowerCase().includes(searchStr)});
            this.filterBy ='';
        },
        notesToShow() {
            return this.notes.sort(function(a, b) {
                return b.pinned - a.pinned 
                ||a.date - b.date
              })
        },
        unFocus(event) {
            if(event.target.localName === 'ul' || event.target.localName === 'section' || event.target.localName === 'input' || event.target.localName ==='h1') {
                console.log('unfocus All!');
                keepService.unFocusAll()
                .then(() => this.reCreate())
            }
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
            .then(notes =>this.notes = notes)
            .then(()=> this.notes = this.notesToShow());

        eventBus.$on('filterBy', val => {
            // setTimeout(() => {
                console.log(val);
                this.filterNotes(val)
            // }, 0)
          })
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