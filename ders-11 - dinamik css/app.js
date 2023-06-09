const { createApp } = Vue

createApp({
    data(){
        return {
            aktiflik: false,
            ekstra: false
        }
    },
    methods: {

    },
    computed: {
        degisikligiAlgila: function(){
            return {
                aktif: this.aktiflik,
                ekstra: this.ekstra
            }
        }
    }
}).mount("#app");
