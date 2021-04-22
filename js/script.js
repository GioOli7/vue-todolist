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
        addItem() {
            if (this.inputText != '') {
                this.todos.push({
                    text: this.inputText,
                    completed: false,
                })
            }
            this.inputText = '';
        },

    }
})