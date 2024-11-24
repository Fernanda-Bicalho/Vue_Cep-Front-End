<template>
  <div class="search-container no-edit">
    <header class="app-header">
      <h1 class="fixed-text">Pesquisa de CEP</h1>
    </header>

    <div class="search container">
      <h2 class="fixed-text">Digite o CEP para consultar o endereço</h2>
      <div class="input-container d-flex justify-content-center gap-3">
        <input
          v-model="cep"
          type="text"
          placeholder="Digite o CEP"
          maxlength="9"
          @input="removeDash"
          class="form-control form-control-lg w-auto"
        />
        <button class="btn btn-success btn-lg" @click="searchAddress">Buscar</button>
        <router-link to="/">
          <button class="btn btn-secondary btn-lg">Voltar</button>
        </router-link>
      </div>

      <div v-if="address && !error" class="address-text mt-3">
        <p><strong>Cep:</strong> {{ address.cep }}</p>
        <p><strong>Rua:</strong> {{ address.logradouro }}</p>
        <p><strong>Bairro:</strong> {{ address.bairro }}</p>
        <p><strong>Cidade:</strong> {{ address.localidade }}</p>
        <p><strong>UF:</strong> {{ address.uf }}</p>
        <p><strong>IBGE:</strong> {{ address.ibge }}</p>
      </div>
      <p v-if="error" class="error-text mt-3">{{ error }}</p>
    </div>

    <footer class="app-footer bg-light py-3">
      <p class="m-0 text-center">&copy; 2024 Pesquisa de CEP - Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchView",
  data() {
    return {
      cep: "",
      address: null,  
      error: null,    
    };
  },

  methods: {
    
    isValidCep(cep) {
      const regex = /^\d{5}-\d{3}|\d{8}$/;
      return regex.test(cep);
    },
    removeDash() {
      this.cep = this.cep.replace(/\D/g, "");
    },

    
    async searchAddress() {
      this.address = null;
      this.error = null;

      
      if (this.isValidCep(this.cep)) {
        try {
          
          const response = await axios.get(`http://localhost:8081/api/enderecos/${this.cep}`);

          if (response.data) {
            this.address = response.data;
          } else {
            this.error = "Endereço não encontrado para este CEP.";
          }
        } catch (error) {
          
          this.error = "Não foi possível encontrar o endereço. Verifique o CEP e tente novamente.";
        }
      } else {
        
        this.error = "Por favor, insira um CEP válido.";
      }
    },
  },
};
</script>

<style scoped>

.no-edit {
  pointer-events: none; 
  user-select: none; 
}


.search-container .search, .search-container .input-container, .search-container button, .search-container input {
  pointer-events: auto; 
}


.search-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: url('@/assets/endereco.jpg');
  background-size: cover;
  background-position: center;
  font-family: 'Roboto', sans-serif;
  color: #333;
}


.app-header {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  text-align: center;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.app-header h1 {
  font-size: 3rem;
  margin: 0;
  font-weight: 700;
}


.search {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}

.search h2 {
  position: relative;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
}


.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}


.search input {
  padding: 10px 15px;
  font-size: 1.2rem;
  border-radius: 10px;
  border: 2px solid #ccc;
  transition: border-color 0.3s;
  max-width: 300px; /* Largura do campo de input */
  text-align: center;
}

.search input:focus {
  border-color: #acff40;
}


.search button {
  padding: 15px 30px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search button:hover {
  background-color: #2c7c0d;
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.address-text {
  font-size: 1.2rem;
  color: #333;
  margin-top: 20px;
}

.error-text {
  color: rgb(77, 172, 23);
  font-weight: bold;
}

.app-footer {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.2);
}
</style>
