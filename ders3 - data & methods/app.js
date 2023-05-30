new Vue({
    el: '#vue-app',
    data: {
        name: "Gokhun",
        job: "Developer"
    },
    methods: {
        greet: function(time){
            return "Good" + time +  " " + this.name;
        }
    }
});