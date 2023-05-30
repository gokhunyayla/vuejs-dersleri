new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(){
            this.age++;
        },
        subtract: function(){
            this.age--;
        },
        adddbl: function(years){
            this.age+=years;
        },
        subtractdbl: function(years){
            this.age-=years;
        },
        updateXY(event){
            console.log(event);
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
});