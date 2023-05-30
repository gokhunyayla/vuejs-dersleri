<template>
  <div id="add-blog"> <!-- id sadece styling için ekledik -->
    <h2>Yeni Blog Post Ekle</h2>
    <form>
      <label>Blog Başlığı</label>
      <input type="text" v-model.lazy="blog.title" required> <!-- lazy input modifier'ı ile bu input'ta yazdıklarımız anında preview olmasın ancak bu input dışına çıkınca göstersin diye kullandık. -->
      <label>Blog İçeriği</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Kullanıcılar</label>
        <input type="checkbox" value="users" v-model="blog.categories">

        <label>Üyeler</label>
        <input type="checkbox" value="members" v-model="blog.categories">

        <label>Ziyaretçiler</label>
        <input type="checkbox" value="visitors" v-model="blog.categories">

        <label>Bilinmeyenler</label>
        <input type="checkbox" value="unknowns" v-model="blog.categories">
      </div>
      <label>Yazar</label>
      <select v-model="blog.author">
        <option value="">Lütfen Seçiniz</option>
        <option v-for="(author, index) in authors" :value="author">{{ author }}</option>
      </select>
    </form>
    <div id="preview">
      <h3>Blog Ön İzleme</h3>
      <p>Blog Başlığı: {{ blog.title }}</p>
      <p>Blog İçeriği:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Kategoriler</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Yazar: {{ blog.author }}</p>
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
        categories: [],
        author: ""
      },
      authors: ["Gökhun", "Elif", "Han", "Alper", "Yağız", "Melih"]
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
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
