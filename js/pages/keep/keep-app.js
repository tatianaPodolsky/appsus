import keepContainer from '../cmps/keep-container-cmp.js';
import keepSearch from '../cmps/keep-search-cmp.js';
import keepNewNote from '/keep/keep-new-note.js';


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

        }
    },
    components: {
        keepSearch,
        keepContainer,
        keepNewNote,
        keepNoteDetails
    },
    created() {
        
    }    
}