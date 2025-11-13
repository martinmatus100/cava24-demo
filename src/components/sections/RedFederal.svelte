<script>
  // Acá podés agregar luego lógica para animar pins, etc.
</script>

<section class="section-red">
  <div class="section-inner">
    <div class="section-header">
      <h2>La red federal del vino argentino</h2>
      <p>
        Cava24 conecta bodegas fundadoras en las principales regiones productoras con
        destinos gastronómicos y comerciales en todo el país.
      </p>
    </div>

    <div class="map-wrapper">
      <div class="map-bg"></div>

      <div class="badge badge-mendoza">
        <span class="badge-title">Mendoza</span>
        <span class="badge-tag">Bodegas fundadoras</span>
      </div>

      <div class="badge badge-rosario">
        <span class="badge-title">Rosario</span>
        <span class="badge-tag">Hub logístico</span>
      </div>

      <div class="badge badge-resto">
        <span class="badge-title">Resto del país</span>
        <span class="badge-tag">Destinos conectados</span>
      </div>
    </div>
  </div>
</section>

<style>
  .section-red {
    padding: 5rem 2rem;
    background: linear-gradient(
      135deg,
      rgba(106, 31, 51, 0.06),
      rgba(227, 198, 173, 0.7)
    );
  }

  .section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 3rem auto;
  }

  .section-header h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    margin-bottom: 0.7rem;
  }

  .section-header p {
    font-size: 1rem;
    opacity: 0.9;
  }

  .map-wrapper {
    position: relative;
    border-radius: 1.8rem;
    overflow: hidden;
    min-height: 340px;
    background: radial-gradient(circle at 10% 20%, #f8ede3, #e1c4aa);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.14);
  }

  .map-bg {
    position: absolute;
    inset: 0;
    background-image: url("/images/mapa-red-federal.png");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.72;
    filter: saturate(1.1);
  }

  .badge {
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 999px;
    padding: 0.6rem 1.1rem;
    display: inline-flex;
    flex-direction: column;
    gap: 0.1rem;
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.18);
    font-size: 0.78rem;
    animation: float 6s ease-in-out infinite;
  }

  .badge-title {
    font-weight: 700;
    color: var(--cava-wine-dark, #4b0e1c);
  }

  .badge-tag {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.7rem;
    opacity: 0.7;
  }

  .badge-mendoza {
    left: 14%;
    top: 55%;
  }

  .badge-rosario {
    right: 20%;
    top: 40%;
    animation-delay: 0.8s;
  }

  .badge-resto {
    right: 12%;
    bottom: 20%;
    animation-delay: 1.4s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  @media (max-width: 768px) {
    .map-wrapper {
      background-attachment: scroll;
    }

    .badge {
      font-size: 0.7rem;
      padding: 0.5rem 0.9rem;
    }
  }
</style>
