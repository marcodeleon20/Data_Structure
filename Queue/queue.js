// Definición de la clase Queue (Cola)
class Queue {
    constructor() {
      this.queue = [];
      this.counter = 1;
    }
  
    // Agregar un nuevo elemento a la cola
    enqueue(data) {
      this.queue.push(data);
      this.displayQueue();
    }
  
    // Mostrar la cola en una tabla
    displayQueue() {
      const table = document.getElementById("queueTable");
      table.innerHTML = `
        <tr>
          <th>#</th>
          <th>Dato</th>
        </tr>
      `;
  
      this.queue.forEach((data, index) => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = index + 1;
        cell2.innerHTML = data;
      });
    }
  }
  
  // Crear una instancia de Queue
  const queue = new Queue();
  
  // Función para agregar un nuevo elemento desde el formulario
  function enqueue() {
    const data = document.getElementById("data").value;
    queue.enqueue(data);
  }
  