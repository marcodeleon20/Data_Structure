// Definición de la clase Stack (Pila)
class Stack {
    constructor() {
      this.stack = [];
      this.counter = 1;
    }
  
    // Agregar un nuevo elemento a la pila
    push(data) {
      this.stack.push(data);
      this.displayStack();
    }
  
    // Mostrar la pila en una tabla
    displayStack() {
      const table = document.getElementById("stackTable");
      table.innerHTML = `
        <tr>
          <th>#</th>
          <th>Dato</th>
        </tr>
      `;
  
      this.stack.forEach((data, index) => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = this.stack.length - index;
        cell2.innerHTML = data;
      });
    }
  }
  
  // Crear una instancia de Stack
  const stack = new Stack();
  
  // Función para agregar un nuevo elemento desde el formulario
  function push() {
    const data = document.getElementById("data").value;
    stack.push(data);
  }
  