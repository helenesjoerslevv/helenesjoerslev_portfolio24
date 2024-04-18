<template>
  <div class="slider">
    <div class="list">
      <div class="item">
        <img src="../assets/bg-1.jpg" alt="">
        <div class="overlay">
          <div class="header">
            <img src="../assets/v1.0.png" alt="" class="logo">
            <div class="heading-container">
              <h1>FOTOGRAFI</h1>
              <div class="divider"></div>
            </div>
          </div>
          <div class="text-wrapper">
            <p class="normal">PORTRÆT <br><br> ARKITEKTUR <br><br> FASHION <br><br> PRODUKT <br><br></p>
            <p class="beskrivelse">En af mine største lidenskaber er fotografering. Kunsten at fange øjeblikke og skabe visuelle fortællinger gennem fotografi er noget, jeg altid har elsket. Gennem min tidligere uddannelse som reklame- og portrætfotograf har jeg udforsket de fleste aspekter af fotografiets verden og udviklet en dyb forståelse for lys, komposition og fortælling.</p>
          </div>
        </div> 
      </div>
      <div class="item">
        <img src="../assets/bg-2.jpg" alt="">
        <div class="overlay">
          <div class="header">
            <img src="../assets/v1.0.png" alt="" class="logo">
            <div class="heading-container">
              <h1>GRAFISK DESIGN</h1>
              <div class="divider1"></div>
            </div>
          </div>
          <div class="text-wrapper">
            <p class="normal">EMBALLAGE DESIGN</p>
            <p class="beskrivelse">Emballagedesign handler om at skabe det ydre udseende af et produkt, hvilket kan omfatte alt fra formen på emballagen til farver, skrifter, billeder og grafik. Det handler om at fange forbrugerens opmærksomhed i en travl detailhandelsmiljø samtidig med at afspejle produktets kvalitet og brandværdier. <br><br> 
              Jeg finder emballagedesign spændende på grund af dets fokus på visuel kommunikation og kreativ problemløsning. Det handler om at ramme den rette balance mellem form og funktion, æstetik og praktiske overvejelser for at skabe emballage, der ikke kun ser fantastisk ud, men også opfylder forbrugernes behov og forventninger.</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/bg-3.jpg" alt="">
        <div class="overlay">
          <div class="header">
            <img src="../assets/v2.0.png" alt="" class="logo">
            <div class="heading-container">
              <h1 class="black">PRINT</h1>
              <div class="divider3"></div>
            </div>
          </div>
          <div class="text-wrapper">
            <p class="normal1">PLAKATER <br><br> VISITKORT</p>
            <p class="beskrivelse1">Jeg er fascineret af at skabe visuelle oplevelser, der kommunikerer beskeder på en engagerende og æstetisk tiltalende måde. Igennem min rejse som multimediedesignstuderende har jeg udviklet en bred vifte af færdigheder og erfaringer inden for grafisk design, og jeg glæder mig til at dele mine kreative projekter med dig.</p>
          </div>
        </div> 
      </div>
      <div class="item">
        <img src="../assets/bg-4.jpg" alt="">
        <div class="overlay">
          <div class="header">
            <img src="../assets/v2.0.png" alt="" class="logo">
            <div class="heading-container">
              <h1 class="black">BAG GLASSET</h1>
              <div class="divider4"></div>
            </div>
          </div>
          <div class="text-wrapper">
            <p class="normal1">OMKRING <br><br> VIDEO CV <br><br> CV PDF</p>
            <p class="beskrivelse1">Træd ind i mit kreative univers, hvor design og fotografi forenes for at fortælle en historie. Opdag passionen bag mine visuelle designs og udforsk den inspirerende rejse, der formede mig som fotograf og gjorde at jeg valgte at dykke endnu dybere ned i mediebranchen som multimediedesigner.</p>
            <button class="read-more"><a href="/about">Læs mere her</a></button>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="../assets/bg-5.jpg" alt="">
        <div class="overlay">
          <div class="header">
            <img src="../assets/v2.0.png" alt="" class="logo">
            <div class="heading-container">
              <h1 class="black">KONTAKT</h1>
              <div class="divider5"></div>
            </div>
          </div>
          <div class="text-wrapper">
            <p class="normal1">KOM I KONTAKT</p>
            <p class="beskrivelse1">Har du et projekt i tankerne, eller vil du bare sige hej? Tøv ikke med at kontakte mig! Kontaktsiden er din indgang til samarbejde. Uanset om du er interesseret i at drøfte et potentielt projekt, har spørgsmål til mit arbejde, eller bare gerne vil forbinde, så er jeg her for at lytte. Så send en besked, og lad os omsætte dine ideer til virkelighed.</p>
            <button class="read-more"><a href="/contact">LAD OS CONNECTE</a></button>
          </div>
        </div>
      </div>

    </div>
    <ul class="dots">
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      refreshInterval: null,
      active: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const slider = document.querySelector('.slider .list');
      const items = document.querySelectorAll('.slider .list .item');
      const dots = document.querySelectorAll('.slider .dots li');

      this.next = () => {
        this.active = this.active + 1 <= items.length - 1 ? this.active + 1 : 0;
        this.reloadSlider(slider, items, dots, this.active);
      };

      this.refreshInterval = setInterval(() => this.next(), 7000);

      dots.forEach((li, key) => {
        li.addEventListener('click', () => {
          this.active = key;
          this.reloadSlider(slider, items, dots, this.active);
        });
      });

      window.onresize = () => this.reloadSlider(slider, items, dots, this.active);
    });
  },
  methods: {
    reloadSlider(slider, items, dots, active) {
      slider.style.left = -items[active].offsetLeft + 'px';

      let lastActiveDot = document.querySelector('.slider .dots li.active');
      lastActiveDot.classList.remove('active');
      dots[active].classList.add('active');
    },
  },
};
</script>


<style scoped lang="scss">

.slider {
  width: 100%;
  height: 100vh;
  padding: 0; 
  position: relative;
  overflow: hidden;

  .list {
    position: absolute;
    width: max-content;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    transition: 1s;
  }

  .item {
    position: relative;
    width: 100vw; 
    height: 100%;
    overflow: hidden;
  }

  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.159);
    backdrop-filter: blur(8px);
    z-index: 998;
    opacity: 1 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    flex-direction: column;
    justify-content: center; 
    align-items: flex-start; 
    margin-bottom: 20px;
    font-family: "Lato", sans-serif;
  }

  .header .logo {
    width: 300px; 
    height: auto;
    object-fit: cover;
    margin-right: 10px; 
    margin-top: 20px;
  }

  .heading-container {
    display: flex;
    align-items: center;
    margin-top: 10px; 
  }

  h1 {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    margin-left: 20px;
    font-size: 20px; 
    color: #f8f8f8; 
    font-weight: 400;
    letter-spacing: 4px;
  }

  .black {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    margin-left: 20px;
    font-size: 20px; 
    color: black; 
    font-weight: 400;
    letter-spacing: 4px;
  }

  .divider {
    position: absolute;
    height: 70px;
    margin-top: 270px;
    margin-left: 33px;
    width: 1px; 
    background-color: #f8f8f8; 
  }

  .divider1 {
    position: absolute;
    height: 70px;
    margin-top: 340px;
    margin-left: 33px;
    width: 1px; 
    background-color: #f8f8f8;
  }

  .divider3 {
    position: absolute;
    height: 70px;
    margin-top: 190px;
    margin-left: 33px;
    width: 1px; 
    background-color: black; 
  }

  .divider4 {
    position: absolute;
    height: 70px;
    margin-top: 290px;
    margin-left: 33px;
    width: 1px; 
    background-color: black;
  }
  .divider5 {
    position: absolute;
    height: 70px;
    margin-top: 220px;
    margin-left: 33px;
    width: 1px; 
    background-color: black; 
  }

  .text-wrapper {
    position: absolute;
    top: 50%; 
    left: 80%; 
    width: 100%;
    transform: translate(-50%, -50%); 
  }

  .normal {
    width: 50%; 
    text-align: left;
    font-size: 16px; 
    color: #f8f8f8; 
    font-weight: 500;
    margin-top: 0; 
  }

  .beskrivelse {
    width: 50%; 
    text-align: left;
    font-size: 14px; 
    color: #f8f8f8; 
    font-weight: 500;
    margin-top: 50px; 
  }

  .normal1 {
    width: 50%; 
    text-align: left;
    font-size: 16px; 
    color: black; 
    font-weight: 500;
    margin-top: 0; 
  }

  .beskrivelse1 {
    width: 50%; 
    text-align: left;
    font-size: 14px; 
    color: black; 
    font-weight: 500;
    margin-top: 50px; 
  }

  .read-more {
    border: 2px solid black; 
    margin-top: 50px;
    padding: 10px 20px; 
    background-color: transparent; 
    color: black; 
    font-weight: bold;
    text-transform: uppercase; 
    cursor: pointer; 
    transition: background-color 0.3s, color 0.3s; 
  }

  .read-more:hover {
    background-color: #f8f8f8; 
    border: 2px solid #f8f8f8;
    color: #48584C;
    font-weight: bold;
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    color: white;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    z-index: 999;

    li {
      list-style: none;
      width: 10px;
      height: 10px;
      background-color: #fff;
      margin: 10px;
      border-radius: 20px; 
      transition: 0.5s;
    }

    li.active {
      width: 30px;
    }
  }






  @media (max-width: 667px) {
  .slider {
    height: 500px; 
    width: 100vw; 
  }

  .item {
    width: 100%; 
    height: 500px; 
  }

  .item img {
    object-position: center;
  }

  .overlay {
    width: 30%; 
  }

  .text-wrapper {
    position: static; 
    width: 80%;
    text-align: center; 
    margin-top: 3rem; 
    margin-left: 80%; 
  }

  .normal,
  .beskrivelse,
  .normal1,
  .beskrivelse1 {
    width: 100%; 
    font-size: 9px; 
    margin-left: 3px;
    margin-top: -70px;
  }

  .beskrivelse, .beskrivelse1 {
    margin-top: 30px; 
  }

  .divider, .divider1, .divider3, .divider4, .divider5 {
    display: none; 
  }

  .header {
    margin-bottom: 10px; 
  }

  h1,
  .black {
    margin-left: 30px; 
    margin-top: 0px; 
    font-size: 11px; 
    writing-mode: horizontal-tb;
    transform: rotate(0deg);
    font-weight: bold;
  }

  .dots {
    bottom: 20px; 
   
  }

  .dots li {
    width: 8px; 
    height: 8px;
    margin: 5px; 
    margin-top: -170px;
  }

  .dots li.active {
    width: 20px;
  }

  .read-more {
    margin-top: 30px;
    width: 160px;
    height: auto;
    font-size: 10px;
  }

}
}



</style>
