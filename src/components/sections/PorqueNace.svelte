<section class="section-why">
  <div class="section-inner">
    <h2>¿Por qué nace esta plataforma?</h2>

    <p class="section-lead">
      El vino argentino tiene un origen fuerte, pero la conexión entre bodegas y puntos de venta
      sigue fragmentada. Cava24 aparece para ordenar y potenciar ese recorrido.
    </p>

    <div class="timeline">
      <div class="timeline-line"></div>

      <div class="timeline-item">
        <div class="dot"></div>
        <h3>El origen</h3>
        <p>Productores con identidad, historia y proyectos propios que quieren llegar más lejos.</p>
      </div>

      <div class="timeline-item">
        <div class="dot"></div>
        <h3>El punto medio</h3>
        <p>Logística federal y transparente, pensada para simplificar envíos y consolidar pedidos.</p>
      </div>

      <div class="timeline-item">
        <div class="dot"></div>
        <h3>El destino</h3>
        <p>Comercios, vinotecas y restaurantes con acceso directo a bodegas y nuevas etiquetas.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .section-why {
    padding: 5rem 2rem;
    background: var(--cava-beige, #e7d5c5);
  }

  .section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    margin-bottom: 1rem;
    text-align: center;
  }

  .section-lead {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 3rem auto;
    font-size: 1rem;
    opacity: 0.9;
  }

  .timeline {
    position: relative;
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 900px) {
    .timeline {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      align-items: flex-start;
    }
  }

  .timeline-line {
    position: absolute;
    left: 0;
    right: 0;
    top: 2.4rem;
    height: 3px;
    background: rgba(106, 31, 51, 0.2);
    z-index: 0;
    border-radius: 999px;
  }

  @media (max-width: 899px) {
    .timeline-line {
      display: none;
    }
  }

  .timeline-item {
    position: relative;
    text-align: center;
    padding: 1.5rem 1rem 0 1rem;
  }

  .dot {
    width: 16px;
    height: 16px;
    border-radius: 999px;
    background: var(--cava-burgundy-deep, #6a1f33);
    border: 3px solid #f8ede3;
    margin: 0 auto 0.6rem auto;
    position: relative;
    z-index: 1;
  }

  .timeline-item h3 {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
  }

  .timeline-item p {
    font-size: 0.95rem;
    opacity: 0.9;
    max-width: 280px;
    margin: 0 auto;
  }
</style>
