// Definición de la clase Node (Nodo)
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Definición de la clase LinkedList (Lista Enlazada)
  class LinkedList {
    constructor() {
      this.head = null;
      this.counter = 1;
    }
  
    // Agregar un nuevo nodo a la lista
    addNode(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
  
      this.displayList();
    }
  
    // Mostrar la lista en una tabla
    displayList() {
      const table = document.getElementById("listTable");
      table.innerHTML = `
        <tr>
          <th>#</th>
          <th>Dato</th>
        </tr>
      `;
  
      let current = this.head;
      let counter = 1;
      while (current !== null) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = counter++;
        cell2.innerHTML = current.data;
        current = current.next;
      }
    }
  }
  
  // Crear una instancia de LinkedList
  const linkedList = new LinkedList();
  
  // Función para agregar un nuevo nodo desde el formulario
  function addNode() {
    const data = document.getElementById("data").value;
    linkedList.addNode(data);
  }
  