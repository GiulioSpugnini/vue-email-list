console.log('OK Vue', Vue);
Vue.config.devtools = true;
const root = new Vue({
    el: '#root',
    data: {
        emails: [],
        totalEmails: 10,

    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                this.emails.push(res.data.response);
                console.log(res.data.response);
            });
        },

    },

})