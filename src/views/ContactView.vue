<template>
  <header>
    <Nav />
  </header>

  <div class="row-cover">
    <img src="../assets/about/contact_cover.jpg" alt="">
    <div class="text-overlay">
      <h1>KONTAKT</h1>
      <h2>Forbind med kreativiteten</h2>
    </div>
  </div>

  <div class="row-contact">
    <div class="col formular">
      <h2>EMAIL MIG</h2>
      <div class="contact-formular">
        <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
          <div class="row">
            <label class="required" for="name">Navn:</label><br />
            <input id="name" class="input" name="name" type="text" value="" size="30" placeholder="Fornavn og efternavn..."><br />
            <span id="name_validation" class="error_message"></span>
          </div>
          <div class="row">
            <label class="required" for="email">Email:</label><br />
            <input id="email" class="input" name="email" type="text" value="" size="30" placeholder="Skriv din email her.."><br />
            <span id="email_validation" class="error_message"></span>
          </div>
          <div class="row">
            <label class="required" for="subject">Emne:</label><br />
            <input id="subject" class="input" name="subject" type="text" value="" size="30" placeholder="Hvad drejer din henvendelse sig om?"><br />
            <span id="subject_validation" class="error_message"></span>
          </div>
          <div class="row">
            <label class="required" for="message">Besked:</label><br />
            <textarea id="message" class="input" name="message" rows="7" cols="30" placeholder="Beskriv hvad det er jeg kan hjælpe dig med.."></textarea><br />
            <span id="message_validation" class="error_message"></span>
          </div>
    
          <input id="submit_button" type="submit" value="Send" />
        </form>
      </div>
    </div>

    <div class="col kontakt">
      <h1>KONTAKT MIG</h1>
      <div class="divider"></div>
      <div class="row">
        <img src="../assets/about/location.svg" alt="" width="50px" height="auto">
        <h4>Adresse:</h4>
        <p>6715 Esbjerg N, Danmark</p>
      </div>

      <div class="row">
        <img src="../assets/about/telefon.svg" alt="" width="50px" height="auto">
        <h4>Telefon:</h4>
        <p>+45 22 11 44 71</p>
      </div>

      <div class="row">
        <img src="../assets/about/email.svg" alt="" width="50px" height="auto">
        <h4>Email:</h4>
        <a href="mailto:helene.sjoerslevv@gmail.com">
        <p>Helene.sjoerslevv@gmail.com</p>
      </a>
      </div>

      <div class="row">
        <img src="../assets/about/web.svg" alt="" width="50px" height="auto">
        <h4>Hjemmeside:</h4>
        <a href="www.sjoerslevstudios.com">
        <p>www.sjoerslevstudios.com</p>
      </a>
      </div>
    </div>
  </div>


  <div class="row-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144548.5941013025!2d8.298674128108638!3d55.522409144342056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b20a619e30ce9%3A0xdde847ab4e4ae9d1!2sEsbjerg!5e0!3m2!1sda!2sdk!4v1713259466175!5m2!1sda!2sdk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  <Footer />
</template>

<script>
import Nav from '../components/Nav.vue';
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Nav,
    Footer
  },
  methods: { // Metode til at gøre formularen funktionel
    submitForm() {
      const form = document.getElementById('contact_form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        try {
          const response = await fetch('URL', {
            method: 'POST',
            body: formData
          });

          if (response.ok) {
            alert('Formularen blev indsendt med succes!');
          } else {
            throw new Error('Der opstod en fejl ved indsendelse af formularen.');
          }
        } catch (error) {
          console.error('Fejl:', error);
          alert('Der opstod en fejl ved indsendelse af formularen. Prøv igen senere.');
        }
      });
    }
  },
  mounted() { // Kører submitForm metoden ved mount
    this.submitForm();
  }
}
</script>

<style scoped>
.row-cover {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.row-cover img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.text-overlay {
  font-family: "Frank Ruhl Libre", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  color: #444D45;
}

.text-overlay h1 {
  font-size: 3rem;
  letter-spacing: 4px;
  margin-bottom: 0;
  font-weight: 600;
}

.text-overlay h2 {
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-top: 0;
  font-style: italic;
}

.row-contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; 
  padding: 0 3rem;
  width: 100%;
  margin-top: 100px;
}

.col.formular {
  background: rgb(145,165,149);
  background: linear-gradient(90deg, rgba(145,165,149,1) 0%, rgba(68,77,69,1) 100%);
  height: 90vh;
}

.formular h2 {
  font-family: "Frank Ruhl Libre", sans-serif;
  font-size: 30px;
  margin-top: 30px;
  margin-left: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #fff;
  text-align: left;
}

#contact_form {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 40px;
}
  
.row label {
  color: #FFFFFF;
  font-size: 18px;
  margin-left: 10px;
  font-family: "frank Ruhl Libre", sans-serif;
  font-weight: 500;
}

input[type=text], textarea {
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: calc(100% - 20px); 
  border: none;
  background-color: transparent;
  resize: none;
  border-bottom: 2px solid #f8f8f8; 
  box-shadow: none; 
  color: #f8f8f8;
  font-family: "Lato", sans-serif;
}

::placeholder {
  color: #f8f8f8ab;
}

input[type=text] {
  height: 25px;
}

input[type=submit] {
  background-color: #f8f8f8;
  color: #444D45;
  border-radius: 5px;
  width: 120px;
  height: 30px;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 600;
  margin-left: 10px;
  box-shadow: 5px 5px 5px #3e4444;
  font-family: "frank Ruhl Libre", sans-serif;
}

input[type=submit]:hover {
  background-color: #444D45;
  color: #f8f8f8;
  cursor: pointer;
}

.col.kontakt {
  width: 100%;
  margin-bottom: 100px;
}

.col.kontakt h1 {
  font-family: "Frank Ruhl Libre", sans-serif;
  font-size: 30px;
  margin-top: 30px;
  margin-left: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #444D45;
  text-align: left;
}

.divider {
  border-top: #3e4444 2px solid;
  width: 90px;
  margin-left: 30px;
  margin-top: 0;
}

.col.kontakt .row {
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  margin-top: 40px;
  margin-left: 30px;
}

h4 {
  margin-left: 1.5rem;
  font-weight: 600;
}

p {
  margin-left: 5px;
  font-weight: 300;
}

.row-map {
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(100%);
}


@media (max-width: 768px) {
  .row-contact {
    grid-template-columns: 1fr; 
    padding: 0 1rem; 
  }

  .col.kontakt {
    margin-bottom: 50px; 
  }

  .text-overlay h2 {
    font-size: 20px;
  }
}
</style>
