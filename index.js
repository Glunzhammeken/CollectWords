Vue.createApp({

    data() {

        return {
            word: "",
            words: [],
            message: "",
            

        }

    },
    computed: {
        sortedWords() {
            return this.words.slice().sort(); 
        }
    },
    methods: {

        SaveWord() {
            if (this.word == "") {
                this.message = "Please enter a word"
            } else {
                this.words.push(this.word)
                this.word = ""
                this.message = ""
            }
        },
        ShowWords() {
            if(this.words == ""){
                this.message = "empty"
            }
        },
        ClearWords() {
            this.words = []
            this.message = "All words have been cleared"
        }

    }

}).mount("#app")