// Definición de la clase SparseMatrix (Matriz Dispersa)
class SparseMatrix {
    constructor() {
      this.matrix = {};
    }
  
    // Agregar un elemento a la matriz
    addElement(x, y) {
      if (!this.matrix[x]) {
        this.matrix[x] = {};
      }
  
      this.matrix[x][y] = true;
      this.displayMatrix();
    }
  
    // Mostrar la matriz en una tabla
displayMatrix() {
    const table = document.getElementById("matrixTable");
    table.innerHTML = "";
  
    let maxX = 0;
    let maxY = 0;
  
    // Encontrar los valores máximos de X e Y en la matriz
    for (const x in this.matrix) {
      if (parseInt(x) > maxX) {
        maxX = parseInt(x);
      }
  
      for (const y in this.matrix[x]) {
        if (parseInt(y) > maxY) {
          maxY = parseInt(y);
        }
      }
    }
  
    // Generar la primera fila con los encabezados en el eje X
    const headerRow = table.insertRow();
    const emptyCell = headerRow.insertCell();
    for (let i = 1; i <= maxY; i++) {
      const cell = headerRow.insertCell();
      cell.textContent = i;
    }
  
    // Generar las filas y celdas de la matriz
    for (let i = 1; i <= maxX; i++) {
      const row = table.insertRow();
      const headerCell = row.insertCell();
      headerCell.textContent = i;
  
      for (let j = 1; j <= maxY; j++) {
        const cell = row.insertCell();
        if (this.matrix[i] && this.matrix[i][j]) {
          cell.className = "filled";
        }
      }
    }
  }
  
  }
  
  // Crear una instancia de SparseMatrix
  const sparseMatrix = new SparseMatrix();
  
  // Función para agregar un nuevo elemento desde el formulario
  function addElement() {
    const x = parseInt(document.getElementById("y").value);
    const y = parseInt(document.getElementById("x").value);
    sparseMatrix.addElement(x, y);
  }
  
  
  
  