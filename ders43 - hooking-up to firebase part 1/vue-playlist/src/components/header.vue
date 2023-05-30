<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Blogları Göster</router-link></li> <!-- açık olanda router-link-active class'ı oluşur. -->
            <li><router-link to="/add" exact>Yeni Blog Ekle</router-link></li> <!-- exact etiketi sadece gerçekten bu linkink aktif olmasını sağlar. bu link altında gösterilen diğer linkler örneğin add/adas seçili iken aktif class'ına sahip olmaması sağlanır.  -->
        </ul>
    </nav>
</template>

<script>
export default{
    data(){
        return {

        }
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>