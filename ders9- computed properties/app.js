new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: { //metgods değişken değişsin değişmesin her zaman işlem yapar, veriyi cahce'den almaz.
        /*
        addToA: function(){
            console.log("addToA");
            return this.a + this.age;
        },
        addToB: function(){
            console.log("addToB");
            return this.b + this.age;
        }
        */
    },
    computed: { //computed bir değişken değişmediği sürece işlem yapmaz cache'de tutar
        addToA: function(){
            console.log("addToA");
            return this.a + this.age;
        },
        addToB: function(){
            console.log("addToB");
            return this.b + this.age;
        }
    }
});