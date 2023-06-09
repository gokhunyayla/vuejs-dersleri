const { createApp } = Vue

createApp({
    data(){
        return {
            ilkDegisken: "Vue'ye Hoşgeldiniz!",
            ikinciDegisken: "tekrar merhaba"
        }
    }
}).mount("#ilk-uygulama");