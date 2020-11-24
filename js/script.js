var app = new Vue({
  el: "#app",

  data: {
    newMessage: "",
    selected: 0,
    contacts: [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        chat: [
         {
           message: 'Hai portato a spasso il cane?',
           date: "15:03",
           status: "out"
         },
         {
           message: 'Ricordati di dargli da mangiare',
           date: "15:04",
           status: "out"
         },
         {
           message: 'Tutto fatto!',
           date: "15:10",
           status: "in"
         },
         ]
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        chat: [
          {
            message: "Ciao come stai?",
            date: "21:33",
            status: "out"
          },
          {
            message: 'Bene grazie! Stasera ci vediamo?',
            date: "21:34",
            status: "in"
          },
          {
            message: "Non posso, ho troppi impegni",
            date: "21:36",
            status: "out"
          }
          ]
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        chat: [
           {
             message: "La Marianna va in campagna?",
             date: "18:00",
             status: "out"
           },
           {
             message: 'Sicuro di non aver sbagliato chat?',
             date: "19:05",
             status: "in"
           },
           {
             message: "Ah scusa!",
             date: "19:10",
             status: "out"
           }
           ]
        },
        {
          name: "Luisa",
          img: "img/avatar_6.jpg",
          chat: [
            {
              message: "Lo sai che ha aperto una nuova pizzeria?",
              date: "12:03",
              status: "out"
            },
            {
              message: 'Si, ma preferirei andare al cinema',
              date: "15:05",
              status: "in"
            },
          ]
        }
      ]
    },

  methods: {
    //funzione che mostra la chat selezionata
    showChat: function(i) {
      this.selected = i
    },
    //funzione che pusha un nuovo messaggio nella chat selezionata
    pushMess: function() {
      if (this.newMessage != "") {
        let messageNew = {message: this.newMessage, date: "13:11", status: "out"};
        this.contacts[this.selected].chat.push(messageNew);
        this.newMessage = "";
        setTimeout(this.autoReply, 1000);
      }
    },
    //funzione che restituisce una risposta automatica ad un nuovo messaggio
    autoReply: function() {
      let message ={message: "ok", date:"15:30", status: "in"};
      this.contacts[this.selected].chat.push(message);
    }

  }
})
