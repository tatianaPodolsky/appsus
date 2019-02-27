import keepContainer from '../cmps/keep-container-cmp.js';
import keepSearch from '../cmps/keep-search-cmp.js';
import keepNewNote from '/keep/keep-new-note.js';
import keepService from './services/'

export default {
    template : `
        <section class="keep-app">
            <h1>Miss keep</h1>            
            <keep-search></keep-search>  
            <keep-new-note></keep-new-note>  
            <keep-container></keep-container>
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
        keepNoteDetails
    },
    created() {
        keepService.query()
            .then(notes =>this.notes = notes);
    }    
}