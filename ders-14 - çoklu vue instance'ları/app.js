const { createApp } = Vue

var one = createApp({
    data(){
        return {
            title: "1. Instance Başlığı"
        }
    },
    methods: {

    },
    computed: {
        greet: function(){
            return "App 1 Başlığı";
        }
    }
}).mount("#app-one");


var two = createApp({
    data(){
        return {
            title: "2. Instance Başlığı"
        }
    },
    methods: {
        changeTitle: function(){
            one.title = "1. Instance Başlığı Değişti."
        }
    },
    computed: {
        greet: function(){
            return "App 2 Başlığı";
        }
    }
}).mount("#app-two");
