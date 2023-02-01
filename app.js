const test = Vue.createApp({
// represents root for data, functions for anything inside the div with id of app in index.html
    // template: '<h2>I am the template</h2>'

// function short hand, must create a function and return a value inside that function
    data(){
        return {
            // data type does not matter, cannot use these variables outside of the scope of the vue compononet with id of app
            showBooks: true,
            title: 'The Book of Five Rings',
            author: ' Miyamoto Musashi',
            age: '61'
        }
    },

    methods: {
        changeTitle() {
            this.title = "The Art of War"
            console.log('you clicked me')

        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }

    }
})

test.mount('#app')

