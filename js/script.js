var app = new Vue({
  el: "#app",

  data: {
    selected: 0,
    contacts: [
      { name: "Michele",
        img: "img/avatar_1.jpg",
        chat: [
         { message: 'Hai portato a spasso il cane?',
           date: "15:03",
           status: "out"
         },
         { message: 'Ricordati di dargli da mangiare',
           date: "15:04",
           status: "out"
         },
         { message: 'Tutto fatto!',
           date: "15:10",
           status: "in"
         },
        ]
         },
      { name: "Fabio",
        img: "img/avatar_2.jpg",
        chat: [
          { message: "Ciao come stai?",
            date: "21:33",
            status: "out"
          },
          { message: 'Bene grazie! Stasera ci vediamo?',
            date: "21:34",
            status: "in"
          },
          { message: "Non posso, ho troppi impegni",
            date: "21:36",
            status: "out"
          }
         ]
        },
       { name: "Samuele",
         img: "img/avatar_3.jpg",
         chat: [
           { message: "La Marianna va in campagna?",
             date: "18:00",
             status: "out"
           },
           { message: 'Sicuro di non aver sbagliato chat?',
             date: "19:05",
             status: "in"
           },
           { message: "Ah scusa!",
             date: "19:10",
             status: "out"
           }
          ]
         },
        { name: "Luisa",
          img: "img/avatar_6.jpg",
          chat: [
            { message: "Lo sai che ha aperto una nuova pizzeria?",
              date: "12:03",
              status: "out"
            },
            { message: 'Si, ma preferirei andare al cinema',
              date: "15:05",
              status: "in"
            },
          ]
        }
      ]
    },

  methods: {
    showChat: function(i) {
      this.selected = i
    }
  }

})
