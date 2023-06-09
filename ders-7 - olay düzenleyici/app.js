const { createApp } = Vue

createApp({
    data(){
        return {
            age: 25,
            x: 0,
            y: 0,
        }
    },
    methods: {
        ekle: function(){
            this.age++;
        },
        cikar: function(){
            this.age--;
        },
        ekle10: function(yil){
            this.age+=yil;
        },
        cikar10: function(yil){
            this.age-=yil;
        },
        updateXY(event){
            console.log(event);
            
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        tikla: function(){
            alert("Buna tıkladım.");
        }
    }
}).mount("#app");
