// Definición de la clase HashTable (Tabla Hash)
class HashTable {
    constructor() {
      this.size = 10; // Tamaño inicial de la tabla
      this.table = new Array(this.size);
    }
  
    // Calcular el hash de una clave
    calculateHash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.size;
    }
  
    // Agregar un elemento a la tabla
    addElement(id, name) {
      const key = id.toString();
      const hash = this.calculateHash(key);
  
      if (!this.table[hash]) {
        this.table[hash] = [];
      }
  
      this.table[hash].push({ id, name });
      this.displayTable();
    }
  
    // Mostrar la tabla en una tabla HTML
    displayTable() {
      const table = document.getElementById("hashTable");
      table.innerHTML = "";
  
      // Generar los encabezados de la tabla
      const headerRow = table.insertRow();
      const idHeader = headerRow.insertCell();
      idHeader.textContent = "ID";
      const nameHeader = headerRow.insertCell();
      nameHeader.textContent = "Nombre";

      // Generar las filas y celdas de la tabla
      for (let i = 0; i < this.size; i++) {
        const row = table.insertRow();
  
        if (!this.table[i]) {
          const emptyCell = row.insertCell();
          emptyCell.colSpan = 2;
          emptyCell.textContent = "Vacío";
          emptyCell.className = "empty";
        } else {
          for (let j = 0; j < this.table[i].length; j++) {
            const cell1 = row.insertCell();
            cell1.textContent = this.table[i][j].id;
            const cell2 = row.insertCell();
            cell2.textContent = this.table[i][j].name;
          }
        }
      }
    }
  }
  
  // Crear una instancia de HashTable
  const hashTable = new HashTable();
  
  // Función para agregar un nuevo elemento desde el formulario
  function addElement() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    hashTable.addElement(id, name);
  }
  
  