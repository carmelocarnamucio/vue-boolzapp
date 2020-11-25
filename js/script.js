var app = new Vue({
  el: "#app",

  data: {
    newMessage: "",
    search: "",
    selected: 0,
    contacts: [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        visible: true,
        chat: [
         {
           message: 'Hai portato a spasso il cane?',
           date: "22/11/2020 15:9:27",
           status: "out"
         },
         {
           message: 'Ricordati di dargli da mangiare',
           date: "22/11/2020 15:11:00",
           status: "out"
         },
         {
           message: 'Tutto fatto!',
           date: "22/11/2020 15:19:54",
           status: "in"
         },
         ]
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        visible: true,
        chat: [
          {
            message: "Ciao come stai?",
            date: "25/11/2020 21:9:32",
            status: "out"
          },
          {
            message: 'Bene grazie! Stasera ci vediamo?',
            date: "25/11/2020 21:11:27",
            status: "in"
          },
          {
            message: "Non posso, ho troppi impegni",
            date: "25/11/2020 21:12:16",
            status: "out"
          }
          ]
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        visible: true,
        chat: [
           {
             message: "La Marianna va in campagna?",
             date: "18/11/2020 18:9:27",
             status: "out"
           },
           {
             message: 'Sicuro di non aver sbagliato chat?',
             date: "18/11/2020 20:34:05",
             status: "in"
           },
           {
             message: "Ah scusa!",
             date: "18/11/2020 20:35:00",
             status: "out"
           }
           ]
        },
        {
          name: "Luisa",
          img: "img/avatar_6.jpg",
          visible: true,
          chat: [
            {
              message: "Lo sai che ha aperto una nuova pizzeria?",
              date: "14/11/2020 11:56:10",
              status: "out"
            },
            {
              message: 'Si, ma preferirei andare al cinema',
              date: "14/11/2020 12:40:22",
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
        let messageNew = {message: this.newMessage, date: this.dataTime (), status: "out"};
        this.contacts[this.selected].chat.push(messageNew);
        this.newMessage = "";
        setTimeout(this.autoReply, 1000);
      }
    },
    //funzione che restituisce una risposta automatica ad un nuovo messaggio
    autoReply: function() {
      let message ={message: "ok", date:this.dataTime (), status: "in"};
      this.contacts[this.selected].chat.push(message);
    },
    //funzione ricerca contatti
    searchContact: function() {
        for (let i = 0; i < this.contacts.length; i++) {
          if(this.contacts[i].name.toLowerCase().includes(this.search.toLowerCase())) {
            this.contacts[i].visible = true;
          } else {
            this.contacts[i].visible = false;
          }
        }
     },
    //funzione per avere data attuale
    dataTime: function () {
      let today = new Date();
      let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date+' '+time;
      return dateTime;
    }

  },
  //scroll automatico ad ogni nuovo messaggio
  updated: function () {
    let container = document.querySelector(".content-chat");
    let scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;
  }
})
