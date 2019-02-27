import notePreview from '../keep-note-preview-cmp';

export default {
    props: ['data'],
    template: `
        <div class="text-note-prev">
            <p>{{data.content}}</p>
        </div>
    `
}