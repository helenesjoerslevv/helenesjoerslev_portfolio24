<template>
  <header>
    <Nav />
  </header>

  <div class="row-intro">
    <div class="col portrait">
      <img src="../assets/about/IMG_2918.jpg" alt="" class="portrait-image">
    </div>
    <div class="col intro">
      <div class="content">
        <h1>BAG GLASSET</h1>
        <h3 class="ml11">
          <span class="text-wrapper">
            <span class="line line1"></span>
            <span class="letters" style="visibility: hidden;">Lille spejl på væggen der, hvem er det, der bag glasset sidder?</span>
          </span>
        </h3>
        <div class="divider"></div>
        <p>Jeg hedder Helene Sjørslev, og jeg er en 26-årig fotograf fra Esbjerg. Siden 2013 har jeg haft en passion for fotografi, og jeg har udviklet mine færdigheder som reklame- og portrætfotograf på Medieskolen Danmark. Selvom jeg har base i Esbjerg og Vestjylland, ser jeg hele Danmark som min arbejdsplads og rejser ofte rundt for at fange øjeblikke både i erhvervs- og privatlivet.
          <br><br>Udover min erfaring inden for fotografi, er jeg i øjeblikket igang med en uddannelse i multimediedesign, hvilket kun forstærker min interesse for grafisk design. Jeg elsker at bringe kreativitet ind i alt fra emballagedesign til plakater og visitkort – kort sagt, enhver form for visuel kommunikation.
          <br> <br>Med gåpåmod og en rygsæk fuld af erfaring er ingen opgave for lille eller for stor til mig at tackle. Jeg er altid klar på at tage en udfordring op og skabe noget unikt, som både jeg og mine kunder kan være stolte af.
        </p>
      </div>
    </div>
  </div>

  <div class="row-video">
      <iframe id="video1" src="https://www.youtube.com/embed/x79zZqULBVk?autoplay=0&quality=hd1080" frameborder="0" allowfullscreen scrolling="auto"></iframe>
  </div>

  <div class="row-cv">
  <div class="col pdf">
    <a :href="pdfPath" target="_blank">
      <div class="cv-image-wrapper">
        <img src="../assets/about/CV.jpg" alt="CV Preview" class="cv-image">
      </div>
    </a>
  </div>
  <div class="col info">
    <div class="content-1">
      <h2>HVAD JEG KAN TILBYDE</h2>
      <br>
      <h1>UDFORSK MIN KARRIEREVEJ</h1>
      <div class="divider1"></div>
      <p>Siden jeg startede min karriere, har jeg haft fornøjelsen af at kaste mig ud i en masse forskellige projekter og udfordringer. Jeg elsker at lære nyt og vokse både professionelt og personligt, og min rejse, so far, har været fyldt med masser af sjove og lærerige oplevelser. <br>
      <br>Efter at have taget mine første skridt ind i arbejdslivet og fået gang i min karriere, har jeg samlet en god portion erfaring inden for forskellige brancher - alt fra restauration, detail og medie. Jeg har haft muligheden for at arbejde med alt fra booking, planlægning, kundeservice, rengøring, foto, etc. og har virkelig nydt hvert øjeblik af det.
    <br><br>Så hvis du har lyst til at lære mig bedre at kende og se, hvad jeg har at byde på, så er mit CV det helt rigtige sted at starte. Jeg er sikker på, at du vil finde masser af spændende ting derinde, og hvem ved, måske er der endda mulighed for at skabe noget fantastisk sammen!</p>
    </div>
  </div>
</div>

  <Footer />

</template>

<script>
import Nav from '../components/Nav.vue';
import pdfFile from '@/assets/about/CV.pdf';
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      pdfPath: pdfFile 
    };
  },

  components: {
    Nav,
    Footer
  },


mounted() {
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.style.visibility = 'visible'; 

    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 1000
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 1000,
      delay: 100
    })
    .add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 200,
      offset: '-=775',
      delay: function(el, i) {
        return 20 * (i+1); 
      }
    });
  }
}

</script>

<style>
.row-intro {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); 

}

.portrait-image {
  width: 100%; 
  height: 600px; 
  object-fit: cover;
  object-position: center;
}

.portrait {
  display: flex;
  align-items: center; 
}

.intro {
  background-color: #91A595;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; 
}

.content {
  width: 80%;
  font-family: "Frank Ruhl Libre", serif;
  color: #f8f8f8;
  font-size: 16px; 
}

.content h1 {
  font-size: 40px;
  font-weight: 700;
  color: #fff;
}

.divider {
  width: 100%;
  border-bottom: #f8f8f8 1px solid;
  margin-top: 20px;
}

.content p {
  font-size: 16px;
  margin-top: 20px;
}

.ml11 {
  font-weight: 700;
  font-size: 18px;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #fff;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
  opacity: 0;
  font-style: italic; 
  font-weight: 500;
}

.row-video {
  width: 100%; 
  height: 100%; 
  overflow: hidden; 
}

iframe {
  width: 100%; 
  height: 100vh; 
  margin-top: 100px
}

.row-cv {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 2rem; 
  margin-right: 3rem;
  margin-top: 100px;
  margin-bottom: 50px
}

.cv-image-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%; 
  height: 600px; 
  margin-left: 3rem;
  box-shadow: #444d45b9 0px 0px 10px; 
}

.cv-image-wrapper:hover .cv-image {
  transform: scale(1.1);
}

.info {
  font-family: "Frank Ruhl Libre", serif;
  display: flex;
  justify-content: center;
}

.content-1 {
  width: 80%;
  text-align: left;
  color: #444D45;
  align-items: flex-start; 
}

.content-1 h1 {
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 2px;
}

.content-1 h2 {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: -20px;
}

.divider1 {
  width: 100%;
  border-bottom: #444D45 1px solid;
  margin-top: 20px;
}

.content-1 p {
  font-size: 16px;
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .row-intro {
    grid-template-columns: 1fr; /* Start med en kolonne på mindre skærme */
  }
  
  .content {
    font-size: 14px; 
  }
  
  .row-cv {
    grid-template-columns: 1fr;
  }

}

@media screen and (min-width: 1600px) {
  .row-intro {
    grid-template-columns: 1fr 1fr; 
    min-width: 1600px !important; 
    min-height: 600px !important; 
  }
}

@media screen and (max-width: 667px) {
  .ml11 {
    font-size: 16px;
  }

  .cv-image-wrapper {
    width: 500px;
  }
}

</style>
