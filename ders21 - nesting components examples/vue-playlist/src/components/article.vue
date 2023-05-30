<template>
    <div id="users">
        <ul>
            <li v-for="user in users" v-on:click="user.show = !user.show">
                <h2>{{ user.name }}</h2>
                <p v-show="user.show">{{ user.speciality }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return {
            users: [
                {name: 'Gokhun', speciality: 'Geliştirici', show: false},
                {name: 'Elif', speciality: 'Stratejist', show: false},
                {name: 'Han', speciality: 'Daha bebek', show: false},
                {name: 'Alper', speciality: 'Patron', show: false},
                {name: 'Yağız', speciality: 'Patron yavurus', show: false},
                {name: 'Zahide', speciality: 'Ev hanımı', show: false},
            ]
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