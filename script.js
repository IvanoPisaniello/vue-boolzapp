
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
                    avatar: "_9",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Mi faccia vedere il biglietto...se ce l'ha...",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "ce l'ho...se non ce l'ho l'ho perso",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            message: "se l'ha perso le farò la contravvenzione",
                            status: "sent",
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
                            message: "che fai domani?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "ah boh, penso nulla",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "vuoi fare un giro?",
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
                            message: "hai visto il nuovo MI?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma si ma non mi è piaciuto molto",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "preferisco altri tipi di film",
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
            newMessageText: "",
            currentContact: null,
            newMessage: {
                message: "",
                status: "sent",
                date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
            newMessageReceived: {
                message: "Non voglio parlare con te",
                status: "received",
                date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
            over: false,
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

                // setTimeout(() => {
                //     this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
                // }, 0);
            }, 2000);

            //funzione che permette lo scroll automatico in basso all'aggiunta di un nuovo messsaggio
            //usiamo this per richiamara la "ref" poichè è una funzione interna a js 
            //inserendo la funzione in setTimeout la funzione viene messa in coda e si aggiorna solo dopo l'aggiunta del nuovo
            // console.log(this.$refs.messagesContainer)
            // setTimeout(() => {
            //     this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
            // }, 0);
        },
        formatDate() { },



        beforeMount() {
            this.currentContact = this.contatti[0];
        },


    },
    //inserisco la funzione per filtrare in computed perchè restituisce un valore basato su dati reattivi
    computed: {
        listaContatti() {
            //se l'imput è più lungo di 0 allora mi deve ritornare il singolo contatto restituito dal controllo del nome del contatto stesso e il valore di search
            if (this.search.length > 0) {
                return this.contatti.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()));
            } else {
                //altrimenti mi deve ritornare la lista dei contatti iniziali presente nell'array
                return this.contatti;
            }

        },
    },
    mounted() {
        this.currentContact = this.contatti[0];
    }
})

app.mount("#app")
