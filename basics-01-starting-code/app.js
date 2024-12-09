// connect Vue to part html
// 1) create vue app

const app = Vue.createApp({
    data() {
        return {
            courseGoalA : 'FINISH THE COURSE AND LEARNED VUE!',
            courseGoalB : '<h2>FINISH THE COURSE AND LEARNED REACT!<h2/>',
            vueLink : 'https://vuejs.org/'

        }; // must be an object
    },
    methods: {
        outputGoals(){
            var randomNumber = Math.random();

            if(randomNumber < 0.5 ){
                // return 'Learn Vue!';
                return this.courseGoalA; // use this to refer data in data()
            }else{
                // return 'Master Vue!'
                return this.courseGoalB; // use this to refer data in data()
            }
        }
    },
});

app.mount('#user-goal');// it hold the css selector