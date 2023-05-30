<template>
  <div id="add-blog"> <!-- id sadece styling için ekledik -->
    <h2>Yeni Blog Post Ekle</h2>
    <form>
      <label>Blog Başlığı</label>
      <input type="text" v-model.lazy="blog.title" required> <!-- lazy input modifier'ı ile bu input'ta yazdıklarımız anında preview olmasın ancak bu input dışına çıkınca göstersin diye kullandık. -->
      <label>Blog İçeriği</label>
      <textarea v-model="blog.content"></textarea>
    </form>
    <div id="preview">
      <h3>Blog Ön İzleme</h3>
      <p>Blog Başlığı: {{ blog.title }}</p>
      <p>Blog İçeriği:</p>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: "",
        content: "",
      }
    }
  },
  methods: {

  }
}
</script>

<style>
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
