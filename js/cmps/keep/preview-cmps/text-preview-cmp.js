import notePreview from '../keep-note-preview-cmp.js';

export default {
    props: ['data'],
    template: `
        <div class="text-preview">
            <p>{{data.content}}</p>
            <!-- <p><i class="fas fa-font"></i></p> -->
        </div>
    `
}