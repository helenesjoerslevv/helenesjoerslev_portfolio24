<template>
  <header>
    <div class="row">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/v2.0.png" alt="Logo">
        </router-link>
      </div>
      <nav>
        <ul class="categories">
          <li class="divider"></li>
          <li @click="openPortfolio">Portfølje</li>
          <li><router-link to="about">Bag Glasset</router-link></li>
          <li><router-link to="contact">Kontakt</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const openPortfolio = () => {
  // Naviger til forsiden med kategorien 'photo' åben
  router.push({ path: '/', query: { selectedcategory: 'photo' } });
};
</script>

<style scoped>

* {
  background-color: #f8f8f8;
}

header {
  background-color: #f8f8f8;
  width: 100%;
  border-bottom: #91A595 1px solid;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 200px; /* Justerer logoets størrelse */
  margin-left: 40px;
}

.categories {
  list-style-type: none;
  display: flex;
  align-items: flex-end;
  font-weight: 700;
  margin-right: 50px;
}

.categories li {
  margin: 0 20px; /* Justerer mellemrummet mellem menuelementerne */
  white-space: nowrap;
}

.categories li:hover {
  cursor: pointer;
  color: #91A595;
}

.divider {
  border-left: 1.5px solid #000;
  height: 20px;
  margin: 0 20px;
}

.active {
  color: #91A595; /* Farve for aktiv kategori */
}

@media screen and (max-width: 768px) {
  .logo {
    width: 150px; /* Justerer logoets størrelse for mindre skærme */
  }
}
</style>
