
import notePreview from '../keep-note-preview-cmp.js';

export default {
    props: ['data'],
    template: `
        <div class="todo-preview">
            <li v-for="(todo, idx) in todos" :key="idx" @click.stop.prevent="updateIsDone(idx)" :class="{done: todo.done}">
                <p @focusout="updateText($event,idx)" :contenteditable="data.isEditing">{{todo.txt}}</p>
            </li>
            <!-- <p><i class="fas fa-list-ul"></i></p> -->
        </div>
    `,
    data() {
        return {
            todos: this.data.content,
            editStatus: this.data.isEditing,
        }
    },
    methods: {
        updateIsDone(idx) {
            if(this.data.isEditing) return;
            let prevStatus = this.todos[idx].done;
            this.todos[idx].done = !prevStatus;
            this.$emit('updateNote')
        },
        updateText(event, idx) {
            // debugger
            var newTextTodo = {done: this.data.content[idx].done, txt: event.target.innerHTML};
            this.todos.splice(idx, 1, newTextTodo);
            this.$emit('updateContent', this.todos);
        }
    },
    computed: {
    },
    created() {
        // this.todos = data.content;
    },
}