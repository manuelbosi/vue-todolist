// Creiamo una mini app di todolist con html,css,js in VUE
// Un input permette all’utente di scrivere una “cosa da fare”;
// Un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// Un bottone (X) per eliminare quella determinata cosa dalla lista.

const app = new Vue({
  el: "#app",
  data: {
    taskList: [],
    todo: "",
    taskListOk: []
  },
  methods: {
    
    // FUNZIONE PER AGGIUNGERE TASK
    addTodo(){
      let upperCaseInput = this.todo.toUpperCase() // converto il valore in maiuscolo

      // Check task già inserita e vuota
      if (!this.taskList.includes(upperCaseInput) && (upperCaseInput !== "")) {
        console.log("TASK DA AGGIUNGERE", this.todo) // debug: vedo se il valore che mi stampa è quello dell'input
        this.taskList.push(upperCaseInput) // pusho il valore inserito nell'array
        console.log("ARRAY", this.taskList) // debug: vedo se il valore è stato inserito correttamente
        this.todo = ""; // ripulisco l'input  
      } else {
        alert("NON PUOI INSERIRE TASK DOPPIE O VUOTE");
      }
    },

    // FUNZIONE PER ELIMINARE TASK
    deleteTodo(i){
      let todoIndex = this.taskList.indexOf(i); // salvo in una variabile indice dell'argomento (task)
      this.taskList.splice(todoIndex, 1); // rimuovo il task passato come parametro nell'attributo @click html
      console.log("ARRAY", this.taskList) // debug: vedo se il valore è stato inserito correttamente
      this.taskListOk.push(i);
    }
  } 
});



// STRUTTURA DEI DATI
// un array inizializzato vuoto che contiene tutte le task aggiunte - OK
// una funzione sul bottone aggiungi che pusha il valore dell'input dentro l'array - OK
// una serie di li generati dinamicamente con un v-for che stampa ogni valore dell'array - OK
// una funzione sulla X per eliminare li corrispondente che si vuole cancellare