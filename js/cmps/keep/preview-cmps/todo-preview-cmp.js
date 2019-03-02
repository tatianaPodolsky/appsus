
import notePreview from '../keep-note-preview-cmp.js';

export default {
    props: ['data'],
    template: `
        <div class="todo-preview">
            <button class="add-todo-btn" v-if="(data.isEditing && data.focus)" @click="onAddTodo"><i class="fas fa-plus"></i></button>
            <input name="todos" v-if="isAddingTodo" v-model="addedTodo" @focusout="saveNewTodo" @keyup.enter="saveNewTodo" placeholder="Enter todo">
            <li v-for="(todo, idx) in todos" :key="idx" @click.stop.prevent="updateIsDone(idx)" :class="{done: todo.done}">
                <p @focusout="updateText($event,idx)" :contenteditable="data.isEditing">{{todo.txt}}</p>
            </li>
            <!-- <p><i class="fas fa-list-ul"></i></p> -->
        </div>
    `,
    data() {
        return {
            todos: this.data.content,
            isAddingTodo: false,
            addedTodo: ''
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
        },
        onAddTodo() {
            this.isAddingTodo = true;
        },
        saveNewTodo() {
            if (!this.addedTodo) {
                this.isAddingTodo = false;
                return};
            var newTodo = {done: false, txt: this.addedTodo}
            this.todos.push(newTodo);
            this.$emit('updateContent', this.todos);
            this.isAddingTodo = false;
            this.addedTodo = '';
        }
    },
    computed: {

    },
    created() {
        // this.todos = data.content;
    },
}