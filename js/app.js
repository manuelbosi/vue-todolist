// Creiamo una mini app di todolist con html,css,js in VUE
// Un input permette all’utente di scrivere una “cosa da fare”;
// Un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// Un bottone (X) per eliminare quella determinata cosa dalla lista.

const app = new Vue({
  el: "#app",
  data: {
    taskList: [],
    todo: null
  },
  methods: {
    
    // funzione per aggiungere task
    addTodo(){
      console.log("TASK DA AGGIUNGERE", this.todo) // debug: vedo se il valore che mi stampa è quello dell'input
      this.taskList.push(this.todo) // pusho il valore inserito nell'array
      console.log("ARRAY", this.taskList) // debug: vedo se il valore è stato inserito correttamente
    },

    // funzione per eliminare task
    deleteTodo(){
      console.log("clicked");
    }


  } 
});



// STRUTTURA DEI DATI
// un array inizializzato vuoto che contiene tutte le task aggiunte - OK
// una funzione sul bottone aggiungi che pusha il valore dell'input dentro l'array - OK
// una serie di li generati dinamicamente con un v-for che stampa ogni valore dell'array - OK
// una funzione sulla X per eliminare li corrispondente che si vuole cancellare