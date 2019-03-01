import notePreview from '../keep-note-preview-cmp.js';

export default {
    props: ['data'],
    template: `
        <div class="text-preview">
            <p @focusout="updateText" :contenteditable="data.isEditing">{{data.content}}</p>
        </div>
    `,
    data() {
        return {
            editStatus: this.data.isEditing,
            newContent: null
        }
    },
    methods: {
        updateText(event) {
            this.newContent = event.target.innerHTML;
            this.$emit('updateContent', this.newContent);
        }
    },

}