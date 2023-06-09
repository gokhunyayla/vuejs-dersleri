const { createApp } = Vue

createApp({
    data(){
        return {
            name: "Han", //String
            job: "Mühendis", 
            age: 17, //integer
            giyim: {
                sapka: true, //Boolean
                pantolon: 'Kot',
                t_shirt: false //Boolean
            },
            yetenek: ["Sürücü", "Yazılımcı", "Boksör", "Pianist", "İyi Yüzücü"]
        }
    },
    methods:{
        
    }
}).mount("#ilk-uygulama");