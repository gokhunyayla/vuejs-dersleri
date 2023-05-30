<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form 2 - Log In</h3>
                <p>Giriş yapmak için formu doldurun</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="username" required />
                <input type="password" placeholder="password" required />
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Giriş</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
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
            alert('Form 2 ile giriş yaptığın için teşekkürler!');
        }
    }
}
</script>

<style>
body{
    margin: 0;
}
</style>