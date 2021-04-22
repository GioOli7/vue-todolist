const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Comprare il pane',
                completed: false,
                isEditing: false,   // mi permette di verificare se sono in "modalità editing" della task
                inputEditTask: '',  // testo che proviene dagli input di editing della singola task
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
        // input text principale
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
            this.inputText = '';  //ripulisco il text input
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
            // switcho tra task completa ed incompleta
            this.todos[index].completed = ! this.todos[index].completed;
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
                // RICORDA!! USA THIS ANCHE PER RICHIAMARE ALTRE FUNZIONI!!!
                this.confirmEditTask(index);    
                // in questo modo posso salvare la modifica sia ricliccando sull'icona
                // e sia premendo il tasto invio dalla tastiera (funzione confirmEditTask(index))
            }
        },
    }
})