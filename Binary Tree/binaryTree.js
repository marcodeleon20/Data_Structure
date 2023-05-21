// Definición de la clase Nodo
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Definición de la clase Árbol Binario
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Agregar un nodo al árbol
    addNode(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.addNodeRecursively(this.root, newNode);
      }
  
      this.displayTraversals();
    }
  
    // Función auxiliar para agregar un nodo recursivamente
    addNodeRecursively(current, newNode) {
      if (newNode.value < current.value) {
        if (current.left === null) {
          current.left = newNode;
        } else {
          this.addNodeRecursively(current.left, newNode);
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
        } else {
          this.addNodeRecursively(current.right, newNode);
        }
      }
    }
  
    // Realizar el recorrido inorden
    inordenTraversal() {
      let result = [];
      this.inordenTraversalRecursively(this.root, result);
      return result;
    }
  
    // Función auxiliar para realizar el recorrido inorden recursivamente
    inordenTraversalRecursively(node, result) {
      if (node !== null) {
        this.inordenTraversalRecursively(node.left, result);
        result.push(node.value);
        this.inordenTraversalRecursively(node.right, result);
      }
    }
  
    // Realizar el recorrido preorden
    preordenTraversal() {
      let result = [];
      this.preordenTraversalRecursively(this.root, result);
      return result;
    }
  
    // Función auxiliar para realizar el recorrido preorden recursivamente
    preordenTraversalRecursively(node, result) {
      if (node !== null) {
        result.push(node.value);
        this.preordenTraversalRecursively(node.left, result);
        this.preordenTraversalRecursively(node.right, result);
      }
    }
  
    // Realizar el recorrido postorden
    postordenTraversal() {
      let result = [];
      this.postordenTraversalRecursively(this.root, result);
      return result;
    }
  
    // Función auxiliar para realizar el recorrido postorden recursivamente
    postordenTraversalRecursively(node, result) {
      if (node !== null) {
        this.postordenTraversalRecursively(node.left, result);
        this.postordenTraversalRecursively(node.right, result);
        result.push(node.value);
      }
    }
  
    // Mostrar los recorridos en la tabla
    displayTraversals() {
      const inordenResult = this.inordenTraversal();
      const preordenResult = this.preordenTraversal();
      const postordenResult = this.postordenTraversal();
  
      const inordenElement = document.getElementById("inorden");
      const preordenElement = document.getElementById("preorden");
      const postordenElement = document.getElementById("postorden");
  
      inordenElement.textContent = inordenResult.join(" ");
      preordenElement.textContent = preordenResult.join(" ");
      postordenElement.textContent = postordenResult.join(" ");
    }
  }
  
  // Función para agregar un nodo desde el input
  function addNode() {
    const valueInput = document.getElementById("valueInput");
    const value = parseInt(valueInput.value);
  
    if (!isNaN(value)) {
      binaryTree.addNode(value);
      valueInput.value = "";
    }
  }
  
  // Crear instancia del árbol binario
const binaryTree = new BinaryTree();

// Obtener referencia al botón
const addButton = document.getElementById("addButton");

// Agregar evento click al botón
addButton.addEventListener("click", addNode);

// Obtener referencia al input
const valueInput = document.getElementById("valueInput");

// Agregar evento keypress al input para detectar la tecla Enter
valueInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addNode();
  }
});

  