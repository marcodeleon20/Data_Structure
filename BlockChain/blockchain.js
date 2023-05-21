// Definición de la clase Block (Bloque)
class Block {
  constructor(id, previousHash, nonce, timestamp) {
    this.id = id;
    this.previousHash = previousHash;
    this.nonce = nonce;
    this.timestamp = timestamp;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return CryptoJS.SHA256(this.id + this.previousHash + this.nonce + this.timestamp).toString();
  }
}

// Definición de la clase Blockchain
class Blockchain {
  constructor() {
    this.chain = [];
    this.blockGenerationInterval = 60; // Tiempo de generación de bloque predeterminado en segundos
    this.blockGenerationTimer = null; // Referencia al temporizador de generación de bloque
  }

  startBlockGeneration() {
    if (this.blockGenerationTimer) return; // El temporizador ya está en marcha

    this.blockGenerationTimer = setInterval(() => {
      this.addBlock();
    }, this.blockGenerationInterval * 1000);
  }

  stopBlockGeneration() {
    clearInterval(this.blockGenerationTimer);
    this.blockGenerationTimer = null;
  }

  setBlockGenerationInterval(interval) {
    this.blockGenerationInterval = interval;
    this.stopBlockGeneration();
    this.startBlockGeneration();
  }

  addBlock() {
    const id = Math.floor(Math.random() * 1000);
    const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : "";
    const nonce = Math.floor(Math.random() * 1000); // Prueba de trabajo aleatoria
    const timestamp = new Date().toLocaleString();
    const block = new Block(id, previousHash, nonce, timestamp);
    this.chain.push(block);
    this.displayBlockchain();
  }

  displayBlockchain() {
    const table = document.getElementById("blockchainTable");

    if (table.rows.length === 1) {
      // La tabla solo tiene el encabezado, se agrega una fila vacía para mantenerlo visible
      table.insertRow();
    }

    const row = table.insertRow();
    row.insertCell().textContent = this.chain.length;
    row.insertCell().textContent = this.chain[this.chain.length - 1].previousHash;
    row.insertCell().textContent = this.chain[this.chain.length - 1].nonce;
    row.insertCell().textContent = this.chain[this.chain.length - 1].timestamp;
    row.insertCell().textContent = this.chain[this.chain.length - 1].hash;
  }
}

const blockchain = new Blockchain();
blockchain.startBlockGeneration();

function addBlock() {
  blockchain.addBlock();
}

function changeBlockGenerationInterval() {
  const intervalInput = document.getElementById("intervalInput");
  const newInterval = parseInt(intervalInput.value);

  if (!isNaN(newInterval)) {
    blockchain.setBlockGenerationInterval(newInterval);
    intervalInput.value = "";
  }
}
