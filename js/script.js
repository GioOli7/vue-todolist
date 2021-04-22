const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Comprare il pane',
                completed: false,
                isEditing: false,
                inputEditTask: '',
            },
            {
                text: 'Chiamare il sindacalista',
                completed: false,
                isEditing: false,
                inputEditTask: '',
            },
            {
                text: 'Pagare le bollette',
                completed: false,
                isEditing: false,
                inputEditTask: '',
            },
            {
                text: 'Pulire casa',
                completed: true,
                isEditing: false,
                inputEditTask: '',
            },
        ],
        inputText: '',
        isEditing: false,
        
    },
    methods: {
        /**
         * add item to TodoList
         */
        addItem() {
            if (this.inputText != '') {
                this.todos.push({
                    text: this.inputText,
                    completed: false,
                    isEditing: false,
                })
            }
            this.inputText = '';
            this.$refs.input.focus(); // riporto il focus sulla input
        },

        /**
         * remove item to TodoList
         */
        deleteItem(index) {
            this.todos.splice(index, 1);
        },

        /**
         * toggle between completed and uncompleted task
         */
        taskDone(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        },

        editTask(index) {
            if (this.todos[index].isEditing === false) {
                this.todos[index].isEditing = ! this.todos[index].isEditing;
                this.todos[index].inputEditTask = this.todos[index].text;
            } else {
                this.todos[index].text = this.todos[index].inputEditTask;
                this.todos[index].isEditing = false;
            }
            
        },
        confirmEditTask(index) {
            this.todos[index].text = this.todos[index].inputEditTask;
            this.todos[index].isEditing = false;
        }

    }
})