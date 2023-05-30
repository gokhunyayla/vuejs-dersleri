new Vue({
    el: '#vue-app',
    data: {
        available: false, //true ise available class'ı görünecek.
        nearby: false
    },
    methods: {
       
    },
    computed: {
        compClasses: function(){
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});