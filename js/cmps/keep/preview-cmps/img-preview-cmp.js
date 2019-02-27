import notePreview from '../keep-note-preview-cmp';

export default {
    props: ['data'],
    template: `
        <div class="img-note-prev">
            <img src="data.content">
        </div>
    `
}