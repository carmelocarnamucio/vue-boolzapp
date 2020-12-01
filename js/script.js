var app = new Vue({
  el: "#app",

  data: {
    newMessage: "",
    search: "",
    showMe: true,
    selected: 0,
    random: ["ok", "certo", "va bene", "ci puoi contare", "si", "no", "forse"],
    contacts: [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        visible: true,
        lastOnline: "22/11/2020 15:19:54",
        chat: [
         {
            message: 'Hai portato a spasso il cane?',
            date: "22/11/2020 15:9:27",
            status: "out",
            dropdown: false,
         },
         {
            message: 'Ricordati di dargli da mangiare',
            date: "22/11/2020 15:11:00",
            status: "out",
            dropdown: false,
         },
         {
            message: 'Tutto fatto!',
            date: "22/11/2020 15:19:54",
            status: "in",
            dropdown: false,
         },
         ]
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        visible: true,
        lastOnline: "25/11/2020 21:11:27",
        chat: [
          {
            message: "Ciao come stai?",
            date: "25/11/2020 21:9:32",
            status: "out",
            dropdown: false
          },
          {
            message: 'Bene grazie! Stasera ci vediamo?',
            date: "25/11/2020 21:11:27",
            status: "in",
            dropdown: false
          },
          {
            message: "Non posso, ho troppi impegni",
            date: "25/11/2020 21:12:16",
            status: "out",
            dropdown: false
          },
          ]
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        visible: true,
        lastOnline: "18/11/2020 20:34:05",
        chat: [
           {
              message: "La Marianna va in campagna?",
              date: "18/11/2020 18:9:27",
              status: "out",
              dropdown: false
           },
           {
              message: 'Sicuro di non aver sbagliato chat?',
              date: "18/11/2020 20:34:05",
              status: "in",
              dropdown: false
           },
           {
              message: "Ah scusa!",
              date: "18/11/2020 20:35:00",
              status: "out",
              dropdown: false
           },
           ]
        },
        {
          name: "Luisa",
          img: "img/avatar_6.jpg",
          visible: true,
          lastOnline: "14/11/2020 12:40:22",
          chat: [
            {
              message: "Lo sai che ha aperto una nuova pizzeria?",
              date: "14/11/2020 11:56:10",
              status: "out",
              dropdown: false
            },
            {
              message: 'Si, ma preferirei andare al cinema',
              date: "14/11/2020 12:40:22",
              status: "in",
              dropdown: false
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
        let messageNew = {message: this.newMessage, date: this.dataTime (), status: "out", dropdown: false};
        this.contacts[this.selected].chat.push(messageNew);
        this.newMessage = "";
        setTimeout(this.autoReply, 1000);
        this.moveLastChat();
        this.selected = 0;
      }
    },

    //funzione che restituisce una risposta automatica ad un nuovo messaggio
    autoReply: function() {
      let message ={message: this.randomAnswers(this.random), date:this.dataTime (), status: "in", dropdown: false};
      this.contacts[this.selected].chat.push(message);
      this.lastTime();
    },

    //funzione che mi genera risposte random
    randomAnswers: function (random) {
      return random[Math.floor(Math.random() * random.length)];
    },

    //funzione per mettere in cima alla lista l'ultima chat utilizzata
    moveLastChat: function() {
      let move = this.contacts[this.selected]
      this.contacts.splice(this.selected, 1)
      this.contacts.unshift(move)
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
    },

    //funzione per far apparire e sparire opzione cancella messaggio
    dropDown: function(i) {
      let message = this.contacts[this.selected].chat[i];
      if (message.dropdown === false) {
        message.dropdown = true;
      } else {
        message.dropdown = false;
      }
    },

    //funzione per cancellare messaggi della chat
    removeMessage: function (i) {
      this.contacts[this.selected].chat.splice(i, 1);
    },

    // Funzione per salvare ultimo accesso
    lastTime: function() {
      this.contacts[this.selected].lastOnline = this.contacts[this.selected].chat[this.contacts[this.selected].chat.length-1].date
    },

  },

  //scroll automatico ad ogni nuovo messaggio
  updated: function () {
    let container = document.querySelector(".content-chat");
    let scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;
  },

})
