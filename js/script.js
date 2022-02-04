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
                if (!this.emails.includes(res.data.response)) //controllo se esiste gia una mail nell'array
                    this.emails.push(res.data.response);
                console.log(res.data.response);
            });
        },
        getRandomEmails(emails) {
            for (let i = 0; i < emails; i++) {
                this.getRandomEmail();
            }
        }

    },
    mounted() {
        this.getRandomEmails(this.totalEmails);
    }

})