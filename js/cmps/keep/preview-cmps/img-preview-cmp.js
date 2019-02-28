import notePreview from '../keep-note-preview-cmp.js';

export default {
    props: ['data'],
    template: `
        <div class="img-preview">
            <img :src="url">
            <!-- <i class="fas fa-image"></i> -->
        </div>
    `,
    methods: {

    },
    computed: {
        url() {
            return this.data.content;
        }
    }
}