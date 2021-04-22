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
                completed: false,
                isEditing: false,
                inputEditTask: '',
            },
        ],
        inputText: '',        
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
                    inputEditTask: '',
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

        /**
         * Allow editing task from icon click
         */
        editTask(index) {
            // se la "modalità modifica" è disabilitata, viene abilitata e il testo della task
            // viene copiata nella input, pronta per la modifica
            if (this.todos[index].isEditing === false) {
                this.todos[index].isEditing = true;
                this.todos[index].inputEditTask = this.todos[index].text;
                // altrimenti se si è già in modifica, il testo della input diventa il testo della task
                // e la "modalità modifica" viene chiusa.
            } else {
                // prevengo che venga salvata una task senza testo
                if (this.todos[index].inputEditTask == '') {
                    this.todos[index].inputEditTask = this.todos[index].text;
                }
                this.todos[index].text = this.todos[index].inputEditTask;
                this.todos[index].isEditing = false;
                // in questo modo posso salvare la modifica sia ricliccando sull'icona
                // e sia premendo il tasto invio dalla tastiera (funzione confirmEditTask(index))
            }
        
        },

        /**
         * Confirm editing task from enter key
         */
        confirmEditTask(index) {
            // prevengo che venga salvata una task senza testo
            if (this.todos[index].inputEditTask == '') {
                this.todos[index].inputEditTask = this.todos[index].text;
            }
            // il testo della input diventa il testo della task
            // e la "modalità modifica" viene chiusa.
            this.todos[index].text = this.todos[index].inputEditTask;
            this.todos[index].isEditing = false;
        }

    }
})