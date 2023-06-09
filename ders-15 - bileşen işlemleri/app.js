const { createApp } = Vue

const eleman = {
    template: '<p>Ben Elemen Taginin içerisiyim. Benim Adım: {{ name }}</p><button v-on:click="changeName">İsim Değiştir</button>',
    data(){
        return {
            name: 'Adnan Ziyagil'
        }
    },
    methods: {
        changeName: function(){
            this.name = "Bihter Ziyagil";
        }
    }
}

var one = createApp({
    components: {
        "ilan-ver": eleman
    },
    data(){
        return {

        }
    }
}).mount("#app-one");



var two = createApp({
    components: {
        "app-ikinci": eleman
    },
    data(){
        return {

        }
    }
}).mount("#app-two");