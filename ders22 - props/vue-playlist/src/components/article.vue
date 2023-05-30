<template>
    <div id="users">
        <ul>
            <li v-for="user in users" @click="user.show = !user.show">
                <h2>{{ user.name }}</h2>
                <p v-show="user.show">{{ user.speciality }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    //props: ['users'], //root component'ten veri almak için kullanılır. veri alma işlemi diyebiliriz. Burada users değişkenini istiyoruz root'tan ancak root'un da buraya göndermiş olması gerekiyor. Data buraya geldiğinde sanki data alanındaymış gibi her yerde kullanılabilir.
    props: {
        users: {
            type: Array, //String vb de test etmek için kullanılabilir. Buraya gelen user değişkeninin tipi eğer burada aranan tip değilse otomatik olarak console'da hata görürürüz.
            required: true //Bu parametre ile users değişkeninin zorunlu olarak root tarafından bu component'e gönderilmesi gerektiğini söylüyoruz.
        }
    },  
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
#users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>