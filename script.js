
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
                date: "",
            },
            newMessageReceived: {
                message: "",
                status: "received",
                date: "",
            },
            over: false,
            messageLastAxcess: "ultimo accesso ore 12:00",
            lastMessage: null,


            videoStream: null,
            cameraOpen: false,
            currentMessage: null,
            startingScreen: true,
            screenshotURL: '',
            sendImageClick: false,
            isImage: false,

        }

    },

    methods: {
        onDeleteMessage(message, i) {
            // this.currentMessage = message;
            this.currentContact.messages.splice(i, 1)
            console.log("indice messaggio", i)
        },
        onDeleteClickChat(contact) {
            let indexItem = this.contatti.findIndex((contact) => this.currentContact === contact)
            this.contatti.splice(indexItem, 1)

            console.log("contatto corrente", indexItem)
        },


        //utilizzo async per creare una funzione asincrona, in modo tale che la pagina contnui a fare il resto
        async openCamera() {
            this.cameraOpen = true;
            //mette in pausa il resto del codice finche non viene mantenuta la "promessa"
            this.videoStream = await
                //in questo caso mi interessa solo il video e quindi scriviamo solo "video: true", altrimenti la funzione permette anche di catturare il suono
                //inserendo "audio: true"
                navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            //qui prendiamo con il ref l'elemento dove visualizzare la cam, il tag video ha un src in questo caso ci inseriamo
            //videoStream
            this.$refs.videoElement.srcObject = this.videoStream;




        },
        //adesso catturo uno screenshot dello streaming della camera
        async capture() {
            let el = this.$refs.videoWindow;
            const canvas = await html2canvas(el)
            console.log(this.$refs.videoWindow)
            this.screenshotURL = canvas.toDataURL('image/png');

        },


        closeVideo() {
            this.cameraOpen = false;
            this.videoStream = null;
            //getTracks() è un metodo di getUserMedia, che tiene traccia dei flussi multimediali,
            //agendo su getTracks si può stoppare il flusso della videocamera
            let tracks = this.$refs.videoElement.srcObject.getTracks();

            tracks.forEach(track => {
                track.stop();
            });


        },

        onChatClick(contact) {
            console.log(contact)
            this.currentContact = contact;


        },
        addMessage() {
            //soluzione per formattare l'ora: passiamo come primo argomento a "toLocaleTimeString" un array vuoto(impostazioni regionali)
            //e come secondo argomento passiamo un oggetto che ha all'interno 2 proprietà "2-digit" che specifica il numero di cifre da
            //ritornare
            const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            this.newMessage.date = currentDate;
            const messageClone = { ...this.newMessage };
            // this.currentContact.messages.push(messageClone)
            if (this.newMessage.message !== "" && this.newMessage.message !== " ") {
                this.currentContact.messages.push(messageClone)
                this.lastMessage = messageClone.message + " " + messageClone.status + " " + "at" + " " + currentDate;
            }
            console.log(this.contatti)


            if (this.newMessage.message !== "" && this.newMessage.message !== " ") {
                setTimeout(() => {
                    this.messageLastAxcess = "sta scrivendo..."
                }, 3000);
            }
            this.newMessage.message = "";

            console.log("il contatto corrente è:", this.currentContact)

            setTimeout(() => {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/sentence")
                    .then((axiosResp) => {
                        const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        this.newMessageReceived.date = currentDate;
                        // const messageReceivedClone = { ...this.newMessageReceived };
                        this.currentContact.messages.push({ message: axiosResp.data.response, date: currentDate, })
                        this.messageLastAxcess = "Online";
                        this.lastMessage = axiosResp.data.response + " " + " " + this.newMessageReceived.status + " " + "at" + " " + currentDate;
                        console.log(axiosResp.data.response)
                    });

                // const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                // this.newMessageReceived.date = currentDate;
                // const messageReceivedClone = { ...this.newMessageReceived };
                // this.currentContact.messages.push(messageReceivedClone)
                // this.messageLastAxcess = "Online";



            }, 5000);




            setTimeout(() => {

                this.messageLastAxcess = "Online 1 min fa";

            }, 12000);
            setTimeout(() => {

                this.messageLastAxcess = "Ultimo accesso alle:" + this.newMessageReceived.date;

            }, 17000);

            setTimeout(() => {

                const div = this.$refs.msgsContainer;
                div.scrollTop -= 600;
            }, 0);

        },
        //invio la foto come messaggio
        sendImage() {
            this.isImage = true;
            this.currentContact.messages.push({
                message: this.screenshotURL, status: "sent"
            })
        },

        formatDate() { },

        listaContatti() {
            //se l'imput è più lungo di 0 allora mi deve ritornare il singolo contatto restituito dal controllo del nome del contatto stesso e il valore di search
            if (this.search.length > 0) {
                return this.contatti.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()));
            } else {
                //altrimenti mi deve ritornare la lista dei contatti iniziali presente nell'array
                return this.contatti;
            }

        },

        beforeMount() {
            this.currentContact = this.contatti[0];
        },


    },
    //inserisco la funzione per filtrare in computed perchè restituisce un valore basato su dati reattivi
    // computed: {
    //     listaContatti() {
    //         //se l'imput è più lungo di 0 allora mi deve ritornare il singolo contatto restituito dal controllo del nome del contatto stesso e il valore di search
    //         if (this.search.length > 0) {
    //             return this.contatti.filter(contact => contact.name.toLowerCase().includes(this.search.toLowerCase()));
    //         } else {
    //             //altrimenti mi deve ritornare la lista dei contatti iniziali presente nell'array
    //             return this.contatti;
    //         }

    //     },
    // },
    mounted() {
        this.currentContact = this.contatti[0];


        setTimeout(() => {
            this.startingScreen = false
        }, 5000);

    }
})

app.mount("#app")
