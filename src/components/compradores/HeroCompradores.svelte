<section class="hero-compradores">
  <div class="hero-inner">
    <h1>Compras profesionales, directas de bodega.</h1>

    <p>
      Descubrí nuevas etiquetas, conectate con productores y obtené precios competitivos
      sin intermediarios.
    </p>
  </div>
</section>

<style>
  .hero-compradores {
    min-height: 45vh;
    background: linear-gradient(
      to bottom right,
      rgba(106,31,51,0.25),
      rgba(231,213,197,0.9)
    ),
    url("/images/hero-vinedos.jpg");
    background-size: cover;
    background-position: center;
    padding: 5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero-inner {
    max-width: 650px;
  }

  h1 {
    font-size: clamp(2rem, 3vw, 2.7rem);
    margin-bottom: 1rem;
    color: var(--cava-wine-dark);
  }

  p {
    font-size: 1rem;
    opacity: 0.85;
    max-width: 550px;
    margin: 0 auto;
  }
</style>
