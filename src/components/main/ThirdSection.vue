<template>
  <section id="third-section" :style="{ backgroundImage: 'url(' + require('@/assets/main/editado/footer.png') + ')' }">
    <form action="#" @submit.prevent="postLead" name="assine">
      <span>Quero receber uma oferta especial!</span>
      <div class="inputs">
        <input type="text" name="name" id="name" placeholder="Nome" autocomplete="off" required v-model="payload.name">
        <input type="email" name="email" id="email" placeholder="Email" autocomplete="off" required v-model="payload.email">
        <input type="text" name="telefone" id="telefone" placeholder="(99) 99999-9999 " autocomplete="off" required v-model="payload.tel">
        <select required>
          <option value="">--- Selecione sua cidade ---</option>
          <option value="Arniqueiras">Arniqueiras</option>
          <option value="Ceilândia">Ceilândia</option>
          <option value="Gama">Gama</option>
          <option value="Jardim_Botânico">Jardim Botânico</option>
          <option value="Lago_Norte">Lago Norte</option>
          <option value="Lago_Sul">Lago Sul</option>
          <option value="Núcleo_Bandeirante">Núcleo Bandeirante</option>
          <option value="Paranoá">Paranoá</option>
          <option value="Park_Way">Park Way</option>
          <option value="Guará">Guará</option>
          <option value="Recanto_da_Emas">Recanto da Emas</option>
          <option value="Riacho_Fundo_I">Riacho Fundo I</option>
          <option value="Riacho_Fundo_II">Riacho Fundo II</option>
          <option value="SAAN">SAAN</option>
          <option value="Samambaia">Samambaia</option>
          <option value="Santa_Maria">Santa Maria</option>
          <option value="SIA">SIA</option>
          <option value="Sobradinho_I">Sobradinho I</option>
          <option value="Sobradinho_II">Sobradinho II</option>
          <option value="SOF_Sul">SOF Sul</option>
          <option value="Taguatinga">Taguatinga</option>
          <option value="Taquari">Taquari</option>
          <option value="Varjão">Varjão</option>
          <option value="Vicente_Pires">Vicente Pires</option>
        </select>
      </div>
      <input type="submit" value="ENVIAR">
    </form>
    <div id="footer">
      <div id="info">
        <h1>Conheça outras ofertas em nossas redes</h1>
        <div id="socials">
          <a href="https://www.instagram.com/agetelecom/" target="_blank">
            <img :src="require('@/assets/main/img/INSTAGRAM.png')" alt="">
          </a>
          <a href="https://www.facebook.com/AgeTelecom/" target="_blank">
            <img :src="require('@/assets/main/img/FACEBOOK.png')" alt="">
          </a>
<!--          <a href="#" target="_blank">-->
<!--            <img :src="require('@/assets/main/img/YOUTUBE.png')" alt="">-->
<!--          </a>-->
          <a href="https://api.whatsapp.com/send/?phone=556140404040" target="_blank">
            <img :src="require('@/assets/main/img/WHATS.png')" alt="">
          </a>
        </div>
        <p>
          Permanência mínima de 12 meses. Multa fidelidade de R$950,00 (pro rata), podendo também ser
          adquirido sem permanência mínima nos termos do regulamento. Pagamento em débito em conta disponível nos
          bancos Santander e Caixa Econômica Federal. Para correntistas dos demais bancos, os meios de pagamento
          disponíveis são apenas boleto e cartão de crédito (bandeiras Mastercard, Visa, Cielo, American Express,
          Elo, Diners Club, Agiplan, Banes Card, Hipercard, JCB, Credz). Sem taxa de instalação. Equipamentos em
          locação. Não é possível realizar downgrade nos 3 primeiros meses. Consulte disponibilidade dos serviços,
          valores, regulamento de ofertas, contrato de permanência e mais informações em:
          <a href="https://www.agetelecom.com.br">https://www.agetelecom.com.br</a>.
        </p>
      </div>
      <div id="logo">
        <a href="https://agetelecom.com.br">
          <img :src="require('@/assets/main/img/ASSINATURA.png')" alt="">
        </a>
      </div>
    </div>
  </section>
</template>

<script>

import axios from "axios";

export default {
  name: "ThirdSection",
  data () {
    return {
      payload: {
        name: '',
        email: '',
        tel: ''
      },
      msg: null,
      plan: ''
    }
  },
  methods: {
    postLead: function () {
      axios({
        url: 'https://v1.ageportal.agetelecom.com.br/api/assine/leads',
        method: 'post',
        data: this.payload
      }).then((res) => {
        this.payload.name = ''
        this.payload.email = ''
        this.payload.tel = ''
        alert(res.data.msg)
      })
    },
    postCliques: function (plan) {
      this.plan = plan
      axios({
        url: 'https://v1.ageportal.agetelecom.com.br/api/assine/cliques',
        method: 'post',
        data: {
          plan: this.plan
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">


#third-section {
  width: 100vw;
  padding: 2vh 0 5vh 0;

  background-size: contain;
  background-repeat: repeat;

  display: flex;
  align-items: center;
  flex-direction: column;
  form {

    width: 270px;
    padding: 2vh 30px 4vh 30px;
    border-radius: 7px;

    background-color: #07133A;

    display: flex;
    flex-direction: column;
    gap: 1.5vh;

    position: relative;
    top: -5vh;

    span {
      color: #fff;
      font-size: 1.6rem;
      padding: 0 25px;
      font-weight: 700;
      text-align: center;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 1.5vh;

      input[type=text], input[type=email], select {
        padding: 10px 15px;
        border-radius: 3px;
        font-size: 1.4rem;
        outline: none;
        border: #fff 1px solid;
      }
    }

    input[type=submit] {
      height: 45px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #EF3A29;
      background-color: #EF3A29;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      transition: .2s ease-in-out;

      &:hover {
        background-color: #fff;
        color: #EF3A29;
        border-color: #fff;
      }
    }
  }

  #footer {
    width: 100%;
    padding: 0 5%;

    display: flex;
    justify-content: space-between;
    gap: 1vh;

    #info {
      display: flex;
      flex-direction: column;
      gap: 1vh;

      max-width: 50%;

      h1 {
        width: 100%;
        color: #fff;
        font-size: 1.4rem;
      }

      #socials {
        display: flex;
        gap: 1vw;

        a {
          img {
            width: 30px;
            height: auto;
          }
        }
      }

      p {
        font-size: .6rem;
        text-align: justify;
        color: #fff;

        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }

    #logo {
      width: 50%;
      display: flex;
      align-items: flex-end;
      img {
        width: 150px;
        height: auto;
      }
    }

  }
}

@media (min-width: 600px) {
  #third-section {
    form {
      width: 350px;
    }

    #footer {
      #logo {
        a {
          img {
            width: 200px;
          }
        }
      }
    }
  }
}

@media (min-width: 800px) {
  #third-section {
    form {
      width: 400px;
    }

    #footer {
      #info {
        h1 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1rem;
        }

        #socials {
          a {
            img {
              width: 35px;
            }
          }
        }
      }

      #logo {
        a {
          img {
            width: 350px;
          }
        }
      }
    }
  }
}

@media (min-width: 1150px) {
  #third-section {

    #footer {
      #logo {
        justify-content: center;
        a {
          img {
            width: 450px;
          }
        }
      }
    }
  }
}

</style>