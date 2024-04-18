<template>
  <header>
    <Carousel />
  </header>

  <div class="button-container">
    <button @click="selectCategory('photo')" :class="{ active: selectedCategory === 'photo' }">FOTOGRAFI</button>
    <button @click="selectCategory('graphic')" :class="{ active: selectedCategory === 'graphic' }">GRAFISK DESIGN</button>
    <button @click="selectCategory('print')" :class="{ active: selectedCategory === 'print' }">PRINT</button>
  </div>

  <transition name="fade" mode="out-in">
    <div class="card-container" :style="{ gridTemplateColumns: gridColumns }" :key="selectedCategory">
      <div v-for="(row, rowIndex) in categoryRows" :key="rowIndex" class="card-row">
        <div v-for="(portfolioItem, colIndex) in row" :key="colIndex" class="card">
          <img :src="portfolioItem.image" alt="" class="portfolio-images" @click="openImageViewer(portfolioItem)">
          <div class="overlay" @click="openImageViewer(portfolioItem)"></div>
        </div>
      </div>
    </div>
  </transition>

  <div v-if="selectedImage" class="image-overlay" @click="closeImageViewer"></div>

  <div v-if="selectedImage" class="image-viewer" @click="closeImageViewer">
    <img :src="selectedImage.image" class="selected-image">
    <button class="prev-button" @click.stop="navigatePortfolio(-1)">&#10094;</button>
    <button class="next-button" @click.stop="navigatePortfolio(1)">&#10095;</button>
    <button class="close-button" @click="closeImageViewer">&times;</button>
  </div>

  <Footer />
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'; 
import { getPortfolioItems } from "@/modules/getPortfolio.js";
import Footer from "@/components/Footer.vue"; 
import Carousel from "@/components/Carousel.vue";
import { useRouter } from 'vue-router';

const { portfolioItems } = getPortfolioItems(); // Henter portfolioItems fra getPortfolio.js
const router = useRouter();
let selectedCategory = ref('');

const filteredPortfolioItems = computed(() => { // Filtrere portfolioItems efter valgt kategori
  if (selectedCategory.value === '') {
    return portfolioItems.value;
  } else {
    return portfolioItems.value.filter(portfolioItem => portfolioItem.category === selectedCategory.value);
  }
});

const categoryRowsData = { // Bestemmer antal rækker i gridet
  photo: [[4], [3], [3], [3], [3], [3], [3], [3], [4]],
  graphic: [[3], [2], [2], [3], [3], [3]],
  print: [[3], [2], [4], [2], [2], [2]]
};

const categoryRows = computed(() => { // Bestemmer antal rækker i gridet
  if (selectedCategory.value === '') return [];

  return categoryRowsData[selectedCategory.value].map(row => filteredPortfolioItems.value.splice(0, row[0]));
});

const gridColumns = computed(() => { // Bestemmer antal kolonner i gridet
  switch (selectedCategory.value) {
    case 'photo':
    case 'graphic':
    case 'print':
      return 'auto';
    default:
      return 'repeat(auto-fill, minmax(280px, 1fr))';
  }
});

const selectedImage = ref(null); // Billede der er valgt i billedviseren
let currentIndex = null;

const openImageViewer = (image) => { // Åbner billedviseren
  selectedImage.value = image;
  currentIndex = filteredPortfolioItems.value.findIndex(item => item === image);
};

const closeImageViewer = () => {
  selectedImage.value = null;
};

const navigatePortfolio = (direction) => { // Navigere mellem billeder i portfolio
  if (selectedImage.value && portfolioItems.value.length > 1) {
    const currentIndexInFiltered = portfolioItems.value.findIndex(item => item === selectedImage.value);
    if (direction === -1 && currentIndexInFiltered > 0) {
      currentIndex = currentIndexInFiltered - 1;
    } else if (direction === 1 && currentIndexInFiltered < portfolioItems.value.length - 1) {
      currentIndex = currentIndexInFiltered + 1;
    }
    selectedImage.value = portfolioItems.value[currentIndex];
  }
};

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) { // Lytter efter piletasterne for at navigere mellem billeder
  if (selectedImage.value) {
    if (event.key === 'ArrowLeft') {
      navigatePortfolio(-1);
    } else if (event.key === 'ArrowRight') {
      navigatePortfolio(1);
    }
  }
}

const selectCategory = (category) => { // Vælger kategori
  selectedCategory.value = category;
  router.push({ query: { category } });
};

// Lyt efter ændringer i query parameteren for den valgte kategori
router.afterEach((to) => {
  if (to.query.category) {
    selectedCategory.value = to.query.category;
  }
});

onMounted(() => {
  if (!router.currentRoute.value.query.category) {
    selectedCategory.value = 'photo'; //gør så Fotografi er valgt som default
  }
});

// Lyt til ændringer i query-parametrene
watch(() => router.currentRoute.value.query.selectedcategory, (newValue) => {
  selectedCategory.value = newValue;
});
</script>

<style lang="scss">

.header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  margin-top: 0;
  padding: 0;
}

.card-container {
  display: grid;
  grid-gap: 10px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
}

.card-row {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
}

.card {
  position: relative;
  margin-right: 10px;
  grid-column: span 2 / span 11;
  cursor: pointer;
}

.portfolio-images {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #444d4552;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 1;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 100px;
}

button {
  margin-right: 50px;
  background-color: transparent;
  border: none;
  padding: 0;
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: bold;
  color: inherit;
}

button:hover {
  text-decoration: underline;
  color: #48584C;
  transition: ease-in-out 0.2s;
}

.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.717);
  z-index: 9998;
}

.image-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.selected-image {
  max-width: 90%;
  max-height: 90%;
}

.prev-button,
.next-button,
.close-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.prev-button {
  left: 20px;
}

.next-button {
  right: 20px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}





@media (max-width: 667px) {
  .card-container {
    padding: 0 1rem;
  }

  .button-container {
    margin-top: -100px;
    z-index: 34535;
  }

  button {
    margin-right: 20px;
    font-size: 12px;
    z-index: 3453599;
  }

  .card {
    grid-column: span 1 / span 1;
  }
}
</style>