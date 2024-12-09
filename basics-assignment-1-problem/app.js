const app = Vue.createApp({
    data(){
        return {
            name:'Nasrul',
            age:0,
            imgUrl:'https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/02/wanda-icon.png',
        }
    },
    methods: {
        randomNum(){
            var randNum = Math.random();
            return randNum;
        },
        agePlus(){
            age = this.age + 5;
            return age;
        }

    },
})

app.mount('#assignment')