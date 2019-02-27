
export default {
    template : `
        <section class="keep-app">
            <h1>Miss keep</h1>            
            <keep-search></keep-search>  
            <keep-new-note></keep-new-note>  
            <keep-note-details></keep-note-details>  
            <keep-list></keep-list>
        </section> 
    `,
    data() {
        return {
            cars: [],
            filterBy: {
                vendor : ''
            }
        }
    },
    components: {
        keepSearch,
        keepList,
        keepNewNote,
        keepNoteDetails
    }    
}