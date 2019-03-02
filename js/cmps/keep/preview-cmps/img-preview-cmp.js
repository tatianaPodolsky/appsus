import notePreview from '../keep-note-preview-cmp.js';

export default {
    props: ['data'],
    template: `
        
        <div class="img-preview">
            <input v-if="data.isEditing" @click.stop="focusInput" @blur="saveNewUrl" @keyup.enter="saveNewUrl" v-model="correctedUrl">
            <img :src="url">
        </div>
    `,
    data() {
        return {
            correctedUrl: this.data.content
        }
    },
    methods: {
        saveNewUrl() {
            // if(this.data.isEditing) return;
            this.$emit('updateContent', this.correctedUrl);
        },
        focusInput(){
            console.log('input');
            
        }
    },
    computed: {
        url() {
            return this.data.content;
        }
    },
    // watch: {
    //     data: function(n,o) {

    //     }
    // }
}