<template>
  <section id="third-section" :style="{ backgroundImage: 'url(' + require('@/assets/main/img/bg_footer.png') + ')' }">
    <form action="#" name="assine">
      <span>Quero ter internet 100% FIBRA</span>
      <div class="inputs">
        <input type="text" name="name" id="name" placeholder="Nome" autocomplete="off" required>
        <input type="text" name="email" id="email" placeholder="Email" autocomplete="off">
        <input type="text" name="telefone" id="telefone" placeholder="Telefone" autocomplete="off" required>
      </div>
      <input type="submit" value="ENVIAR">
    </form>
    <div id="footer">
      <div id="info">
        <h1>Conheça outras ofertas em nossas redes</h1>
        <div id="socials">
          <a href="#">
            <img :src="require('@/assets/main/img/INSTAGRAM.png')" alt="">
          </a>
          <a href="#">
            <img :src="require('@/assets/main/img/FACEBOOK.png')" alt="">
          </a>
          <a href="#">
            <img :src="require('@/assets/main/img/YOUTUBE.png')" alt="">
          </a>
          <a href="#">
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
        <img :src="require('@/assets/main/img/ASSINATURA.png')" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThirdSection"
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

    width: 250px;
    padding: 2vh 5vw 4vh 5vw;
    border-radius: 5px;

    background-color: #07133A;

    display: flex;
    flex-direction: column;
    gap: 3vh;

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
      gap: 2vh;

      input[type=text] {
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 1.4rem;
        outline: none;
        border: #fff 1px solid;
      }
    }

    input[type=submit] {
      height: 5vh;
      border-radius: 5px;
      outline: none;
      border: 1px solid #EF3A29;
      background-color: #EF3A29;
      color: #fff;
      font-weight: 800;
    }
  }

  #footer {
    width: 100%;
    padding: 0 5%;

    display: flex;
    justify-content: space-between;
    gap: 2vh;

    #info {
      display: flex;
      flex-direction: column;
      gap: 2vh;

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
            width: 7vw;
            height: auto;
          }
        }
      }

      p {
        font-size: .4rem;
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
        width: 100%;
        height: auto;
      }
    }

  }
}

</style>