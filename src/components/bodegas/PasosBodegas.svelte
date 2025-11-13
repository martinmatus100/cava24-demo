<section class="pasos">
  <div class="inner">
    <h2>Tu bodega en 3 pasos</h2>

    <div class="grid">
      <div class="step">
        <div class="icon">📄</div>
        <h3>Cargá tus vinos</h3>
        <p>Subí tus líneas, etiquetas, precios y disponibilidad en minutos.</p>
      </div>

      <div class="step">
        <div class="icon">📦</div>
        <h3>Recibí pedidos directos</h3>
        <p>Los compradores profesionales te contactan y compran sin intermediarios.</p>
      </div>

      <div class="step">
        <div class="icon">📊</div>
        <h3>Accedé a datos del mercado</h3>
        <p>Conocé demanda, precios, rotación, zonas calientes y más.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .pasos {
    padding: 5rem 2rem;
    background: #f5ece3;
  }

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .inner h2 {
    font-size: clamp(2rem, 3vw, 2.5rem);
    margin-bottom: 2.5rem;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 900px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .step {
    background: #fff;
    padding: 2rem 1.6rem;
    border-radius: 1.5rem;
    box-shadow: 0 10px 35px rgba(0,0,0,0.07);
  }

  .icon {
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
  }

  .step h3 {
    margin-bottom: 0.6rem;
    color: #4b0e1c;
  }

  .step p {
    font-size: 0.9rem;
    opacity: 0.85;
  }
</style>
