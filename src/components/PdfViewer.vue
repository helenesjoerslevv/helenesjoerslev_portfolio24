<template>
    <div class="row-cv">
      <div class="col pdf">
        <embed :src="pdfPath" type="application/pdf" width="100%" height="600px" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pdfPath: require('@/assets/about/CV.pdf') // Brug require for at hente den korrekte sti til din PDF-fil
      };
    }
  };
  </script>
  
  <style scoped>
  /* Tilføj eventuelle styles her, hvis det er nødvendigt */
  </style>
  