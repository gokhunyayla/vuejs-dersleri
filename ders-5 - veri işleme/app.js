const { createApp } = Vue

createApp({
    data(){
        return {
            name: "Han",
            job: "Mühendis",
            website: "http://gokhunyayla.com",
            websiteTag: '<a href="https://webtangular.com">Bu da HTML Tag eklenerek Benim Sitem</a>'
        }
    },
    methods:{

    }
}).mount("#ilk-uygulama");