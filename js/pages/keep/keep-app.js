import keepContainer from '../../cmps/keep/keep-container-cmp.js'
import keepSearch from '../../cmps/keep/keep-search-cmp.js';
import keepNewNote from '../../pages/keep/keep-new-note.js'
import keepService from '../../services/keep-service.js'

export default {
    template : `
        <section class="keep-app">
            <h1>Miss keep</h1>            
            <keep-search :notes="notes"></keep-search>  
            <keep-new-note></keep-new-note>  
            <keep-container :notes="notes"></keep-container>
        </section> 
    `,
    data() {
        return {
            notes: null,
        }
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