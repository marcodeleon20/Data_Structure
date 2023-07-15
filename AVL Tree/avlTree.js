// Definición de la clase Nodo
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
  // Definición de la clase Árbol AVL
  class AVLTree {
    constructor() {
      this.root = null;
    }
  
    // Obtener la altura de un nodo
    getHeight(node) {
      if (node === null) {
        return 0;
      }
      return node.height;
    }
  
    // Obtener el factor de equilibrio de un nodo
    getBalanceFactor(node) {
      if (node === null) {
        return 0;
      }
      return this.getHeight(node.left) - this.getHeight(node.right);
    }
  
    // Realizar una rotación simple a la derecha
    rotateRight(y) {
      const x = y.left;
      const T2 = x.right;
  
      // Realizar la rotación
      x.right = y;
      y.left = T2;
  
      // Actualizar alturas
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
  
      // Retornar la nueva raíz
      return x;
    }
  
    // Realizar una rotación simple a la izquierda
    rotateLeft(x) {
      const y = x.right;
      const T2 = y.left;
  
      // Realizar la rotación
      y.left = x;
      x.right = T2;
  
      // Actualizar alturas
      x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
      y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  
      // Retornar la nueva raíz
      return y;
    }
  
    // Insertar un nodo en el árbol AVL
    insertNode(root, value) {
      // Paso 1: Insertar el nodo como en un árbol binario de búsqueda
      if (root === null) {
        return new Node(value);
      }
  
      if (value < root.value) {
        root.left = this.insertNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.insertNode(root.right, value);
      } else {
        // Los valores duplicados no están permitidos
        return root;
      }
  
      // Paso 2: Actualizar la altura del nodo actual
      root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
  
      // Paso 3: Obtener el factor de equilibrio del nodo actual
      const balanceFactor = this.getBalanceFactor(root);
  
      // Paso 4: Realizar las rotaciones según el factor de equilibrio
      if (balanceFactor > 1 && value < root.left.value) {
        // Caso: Rotación simple a la derecha
        return this.rotateRight(root);
      }
  
      if (balanceFactor < -1 && value > root.right.value) {
        // Caso: Rotación simple a la izquierda
        return this.rotateLeft(root);
      }
  
      if (balanceFactor > 1 && value > root.left.value) {
        // Caso: Rotación doble a la izquierda-derecha
        root.left = this.rotateLeft(root.left);
        return this.rotateRight(root);
      }
  
      if (balanceFactor < -1 && value < root.right.value) {
        // Caso: Rotación doble a la derecha-izquierda
        root.right = this.rotateRight(root.right);
        return this.rotateLeft(root);
      }
  
      // Retornar el nodo actual sin cambios
      return root;
    }
  
    // Realizar el recorrido inorden
    inordenTraversal(node) {
      if (node === null) {
        return [];
      }
  
      const left = this.inordenTraversal(node.left);
      const current = [node.value];
      const right = this.inordenTraversal(node.right);
  
      return left.concat(current, right);
    }
  
    // Realizar el recorrido preorden
    preordenTraversal(node) {
      if (node === null) {
        return [];
      }
  
      const current = [node.value];
      const left = this.preordenTraversal(node.left);
      const right = this.preordenTraversal(node.right);
  
      return current.concat(left, right);
    }
  
    // Realizar el recorrido postorden
    postordenTraversal(node) {
      if (node === null) {
        return [];
      }
  
      const left = this.postordenTraversal(node.left);
      const right = this.postordenTraversal(node.right);
      const current = [node.value];
  
      return left.concat(right, current);
    }
  
    // Insertar un nuevo nodo en el árbol AVL
    insert(value) {
      this.root = this.insertNode(this.root, value);
    }
  }
  
  // Crear instancia del árbol AVL
  const avlTree = new AVLTree();
  
  // Obtener referencia al formulario y los elementos de la tabla
  const form = document.getElementById("avlForm");
  const inordenElement = document.getElementById("inorden");
  const preordenElement = document.getElementById("preorden");
  const postordenElement = document.getElementById("postorden");
  
  // Agregar evento submit al formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const valueInput = document.getElementById("avlValue");
    const value = parseInt(valueInput.value);
  
    if (!isNaN(value)) {
      avlTree.insert(value);
      valueInput.value = "";
  
      // Actualizar los recorridos en la tabla
      const inordenResult = avlTree.inordenTraversal(avlTree.root).join(" ");
      const preordenResult = avlTree.preordenTraversal(avlTree.root).join(" ");
      const postordenResult = avlTree.postordenTraversal(avlTree.root).join(" ");
  
      inordenElement.textContent = inordenResult;
      preordenElement.textContent = preordenResult;
      postordenElement.textContent = postordenResult;
    }
  });
  