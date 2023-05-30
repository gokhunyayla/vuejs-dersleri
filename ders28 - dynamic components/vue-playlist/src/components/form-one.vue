<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form 1 - İletişim</h3>
                <p>Alanları Doldur</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required />
                <label>Mesajınız:</label>
                <textarea></textarea>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Gönder</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
import formHelper from './formHelper.vue'
export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {
        }
    },
    methods: {
        handleSubmit: function(){
            alert('Teşekkürler, mesajın alındı.');
        }
    }
}
</script>

<style>
body{
    margin: 0;
}
</style>