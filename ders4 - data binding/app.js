new Vue({
    el: '#vue-app',
    data: {
        name: 'Gokhun',
        job: 'Developer',
        website: 'http://gokhunyayla.com',
        websiteTag: '<a href="http://gokhunyayla.com">Websayfam</a>'
    },
    methods: {
        greet: function(time){
            return 'Good' + time +  ' ' + this.name;
        }
    }
});