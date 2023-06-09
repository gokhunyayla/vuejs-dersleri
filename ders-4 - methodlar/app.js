const { createApp } = Vue

createApp({
    data(){
        return {
            name: "Han",
            a: 3,
            b: 4
        }
    },
    methods:{
        hesapla: function(isim, gun_durum){
            
            return "İyi " + gun_durum + " " + this.name

        },
        topla: function(){
            return this.a + this.b;
        }
    }
}).mount("#ilk-uygulama");