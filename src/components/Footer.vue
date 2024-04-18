<template>
    <footer class="footer">
      <div class="row">
        <div class="col">
          <a href="/"><img src="../assets/h_only_green.png" alt="" class="logo"></a>
        </div>
        <div class="col kontakt">
          <h1>Kontakt mig: <a href="mailto:helene.sjoerslevv@gmail.com">helene.sjoerslevv@gmail.com</a></h1>
          <p>© 2024 Helene Sjørslev. Alle rettigheder forbeholdes.</p>
        </div>
        <div class="col some">
          <a href="https://www.linkedin.com/in/helenesjoerslevv/"><img src="../assets/linkedin.svg" alt="" class="some"></a>
          <a href="https://www.instagram.com/sjoerslevstudios/"><img src="../assets/instagram.svg" alt="" class="some"></a>
          <a href="https://www.facebook.com/helenesjoerslevv"><img src="../assets/facebook.svg" alt="" class="some"></a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Component options here
  }
  </script>
  
  <style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  max-width: 100%; // Angiver den maksimale bredde for footeren
  height: 100px;
  padding: 1rem;
  top: 50px;
  border-top: #444D45 1px solid;
  background-color: #f8f8f8 !important; // Tilføj !important for at sikre, at denne regel får forrang
}
  
  .row {
    display: flex;
    align-items: center; /* Centrer indholdet vertikalt */
    margin-top: 10px;
  }
  
  .col {
    flex: 1;
  }
  
  .logo {
    width: 60px;
    height: auto;
    margin-left: 2rem;
  }
  
  .some {
    width: 40px;
    height: 40px;
    object-fit: fill;
    text-align: right;
    justify-content: flex-end;
    display: flex;
    margin-right: 1rem;
  }
  
  .kontakt {
    text-align: center;
    font-family: "Lato", sans-serif;
    color: #444D45;
  }

  h1 {
    font-size: 17px;
    font-weight: 400;
    color: #444D45;
  }

  .kontakt a {
    font-size: 17px;
    text-decoration: none;
    color: #444D45;
  }

  .kontakt a:hover {
    text-decoration: underline;
  }

  .kontakt p {
    font-size: 12px;
    font-style: italic;
  }
  
  @media only screen and (max-width: 667px) {
    .row {
      flex-direction: column; /* Stak kolonnerne vertikalt på mindre skærme */

      background-color: #f8f8f8;
    }

.some {
  width: 80px;
  margin-right: -25px;
}

  
  }
  </style>
  