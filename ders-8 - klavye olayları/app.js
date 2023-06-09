const { createApp } = Vue

createApp({
    data(){
        return {
          
        }
    },
    methods: {
        isimYakala: function(){
            console.log("İsim alanına bişey yazdın");
        },
        YasYakala: function(){
            console.log("Yaş alanına bişey yazdın");
        }
    }
}).mount("#app");
