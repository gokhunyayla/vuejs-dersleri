var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App 1'
    },
    methods: {
    
    },
    computed: {
        greet: function(){
            return 'App 1 - merhaba'
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App 2'
    },
    methods: {
        changeTitle: function(){
            one.title="App 1'in başlığı App 2 içindeki bir butonla değiştirildi.";
        }
    },
    computed: {
        greet: function(){
            return 'App 2 - merba'
        }
    }
});

two.title = "App 2'nin başlığı instance'ların dışından değiştirildi.";