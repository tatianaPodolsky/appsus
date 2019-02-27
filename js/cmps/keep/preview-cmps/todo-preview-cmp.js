
import notePreview from '../keep-note-preview-cmp';

export default {
    props: ['data'],
    template: `
        <div class="todo-note-prev">
            <ul>
                <li v-for: :key="currCar.id" 
                    v-for="(currCar, idx) in cars"></li>
            </ul>
        </div>
    `,
    data: {
        todos: data.content,

    }
}