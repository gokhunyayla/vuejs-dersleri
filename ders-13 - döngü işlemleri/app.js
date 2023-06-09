const { createApp } = Vue

createApp({
    data(){
        return {
            karakterler: ["Adnan", "Bihter", "Behlül", "Matmazel"],
            ozellikler: [
                {name: "Adnan", age: 55},
                {name: "Bihter", age: 28},
                {name: "Behlül", age: 28},
                {name: "Matmazel", age: 35}
            ]
        }
    },
    methods: {

    },
    computed: {
 
    }
}).mount("#app");
