<template>
  <div class="app-container no-edit">
    <header class="app-header">
      <h1>Pesquisa de CEP</h1>
    </header>
    <div class="home">
      <h2 class="fixed-text">Bem-vindo à Pesquisa de CEP</h2>
      <p class="fixed-text">Descubra o endereço correspondente ao seu CEP rapidamente.</p>
      <router-link to="/search">
        <button class="btn-custom">Ir para Pesquisa</button>
      </router-link>
    </div>
    <footer class="app-footer">
      <p>&copy; 2024 Pesquisa de CEP - Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {
    
    const appContainer = document.querySelector('.app-container');
    const originalHTML = appContainer.innerHTML;

    setInterval(() => {
      if (appContainer.innerHTML !== originalHTML.trim()) {
        appContainer.innerHTML = originalHTML;
      }
    }, 1000);
  },
};
</script>

<style scoped>

.no-edit {
  pointer-events: none; 
  user-select: none; 
}


.no-edit .btn-custom {
  pointer-events: auto; 
}

.app-container {
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


.home {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.6); 
}

.home h2 {
  font-size: 2.5rem;
  margin: 10px 0;
  font-weight: 600;
  color: #333;
}

.home p {
  font-size: 1.2rem;
  margin: 10px 0;
  max-width: 600px;
  color: #555; 
}


button {
  padding: 15px 30px;
  margin-top: 30px;
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

button:hover {
  background-color: #2c7c0d; 
  transform: scale(1.1); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
}


.app-footer {
  background-color: rgba(255, 255, 255, 0.8); 
  color: #333;
  text-align: center;
  padding: 15px;
  font-size: 0.9rem;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.2);
}

.app-footer p {
  margin: 0;
}


@media (max-width: 768px) {
  .home {
    padding: 20px;
  }

  .home h2 {
    font-size: 2rem; 
  }

  .home p {
    font-size: 1rem; 
  }

  .app-header h1 {
    font-size: 2rem; 
  }

  button {
    font-size: 1rem;
    padding: 12px 24px;
  }
}
</style>
