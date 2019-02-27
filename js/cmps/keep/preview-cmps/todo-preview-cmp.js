
import notePreview from '../keep-note-preview-cmp.js';

export default {
    props: ['data'],
    template: `
        <div class="todo-preview">
            <li v-for="(todo, idx) in todos" :key="idx" :class="{done: todo.done}">
                <p>{{todo.txt}}</p>
            </li>
            <p><i class="fas fa-list-ul"></i></p>
        </div>
    `,
    data() {
        return {
            todos: this.data.content,
        }
    },
    methods: {

    },
    computed: {
    },
    created() {
        // this.todos = data.content;
    },
}