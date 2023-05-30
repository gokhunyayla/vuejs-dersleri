var data = {
    name: "Alper"
}

Vue.component("greeting", { 
    template: '<p>Ben bir yeniden kullanılabilir bileşenim {{ name }}. <button v-on:click="changeName"></button> </p>',
    data: function(){ //component'lerde data fonksiyonlar olarak çağrılır.
        //return {
        //    name: 'Webtangular'
        //}
        return data;
    },
    methods: {
        changeName: function(){ //buradaki metodlar instance yüklendikten sonra ve eğer data global değilse sadece ilgili instance için işlem yapar.
            this.name = 'Gokhun'
        }
    }
});

var one = new Vue({
    el: '#vue-app-one'
});

var two = new Vue({
    el: '#vue-app-two'
});