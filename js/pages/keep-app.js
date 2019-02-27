import keepList from '../cmps/keep-list-cmp.js';
import keepSearch from '../cmps/keep-search-cmp.js';
import keepNewNote from '/keep/keep-new-note.js';


export default {
    template : `
        <section class="keep-app">
            <h1>Miss keep</h1>            
            <keep-search></keep-search>  
            <keep-new-note></keep-new-note>  
            <keep-list></keep-list>
        </section> 
    `,
    data() {
        return {
        }
    },
    components: {
        keepSearch,
        keepList,
        keepNewNote,
        keepNoteDetails
    }    
}