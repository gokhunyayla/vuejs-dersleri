<template>
    <div id="add-blog">
        <h2>Yeni Blog Post Ekleme Formu</h2>
        <form action="#">
            <label for="title">Blog Başlığı</label>
            <input type="text" v-model.lazy="blog.title" required>

            <label for="content">Blog İçeriği</label>
            <textarea v-model.lazy="blog.content"></textarea>
        </form>
        <div id="preview">
            <h3>Blog Ön İzleme</h3>
            <p>Blog Başlığı: {{ blog.title }}</p>
            <p>Blog İçeriği: {{ blog.content }}</p>
            <p></p>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            blog: {
                title: "",
                content: ""
            }
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>