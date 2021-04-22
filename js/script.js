const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Comprare il pane',
                completed: false,
            },
            {
                text: 'Chiamare il sindacalista',
                completed: false,
            },
            {
                text: 'Pagare le bollette',
                completed: false,
            },
            {
                text: 'Pulire casa',
                completed: false,
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
        }

    }
})