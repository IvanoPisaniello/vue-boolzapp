
const app = Vue.createApp({

    data() {

        return {
            contatti: [
                {
                    name: "Michele",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Ajeje",
                    avatar: "_2",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Biglietto per favore",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Mi hanno rubato il portafogli",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Giorgio",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Marco",
                    avatar: "_2",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luca",
                    avatar: "_3",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Giovanni",
                    avatar: "_2",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Mario",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ],
            search: "",
            // chatIndex: 0,
            // newMessageText: "",
            currentContact: null,
            newMessage: {
                message: "",
                status: "sent",
            },
            newMessageReceived: {
                message: "Non voglio parlare con te",
                status: "received",
            }

        }
    },

    methods: {

        onChatClick(contact) {
            console.log(contact)
            this.currentContact = contact;

        },
        addMessage() {
            const messageClone = { ...this.newMessage };
            this.currentContact.messages.push(messageClone)
            console.log(this.contatti)
            this.newMessage.message = "";


            setTimeout(() => {
                const messageReceivedClone = { ...this.newMessageReceived };
                this.currentContact.messages.push(messageReceivedClone)
            }, 2000);

        },




        beforeMount() {
            this.currentContact = this.contatti[0];
        },


    },
    computed: {
        listaContatti() {
            if (this.search.length > 0) {
                return this.contatti.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()));
            } else {
                return this.contatti;
            }

        },
    },
    mounted() {
        this.currentContact = this.contatti[0];
    }
})

app.mount("#app")
