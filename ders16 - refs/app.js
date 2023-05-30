new Vue({
    el: '#vue-app',
    data: {
        output: 'Favori yemeğin'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            console.log(this.$refs.input.value);
            this.output=this.$refs.input.value;
            console.log(this.$refs.test.innerHTML)
        }
    }
});