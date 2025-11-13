<section class="panel-section">
  <div class="inner">
    <h2>Panel simple, diseñado para bodegas reales</h2>
    <p>
      Gestioná vinos, seguí pedidos, coordiná logística y entendé qué buscan los compradores.
      Todo en una interfaz pensada con y para bodegas.
    </p>

    <div class="mockup">
      <img src="/images/panel-bodega-mockup.png" alt="Mockup panel bodega" />
    </div>
  </div>
</section>

<style>
  .panel-section {
    padding: 5rem 2rem;
    background: linear-gradient(
      135deg,
      rgba(106,31,51,0.07),
      rgba(227,205,187,0.5)
    );
  }

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .inner h2 {
    font-size: clamp(2rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
  }

  .inner p {
    max-width: 600px;
    margin: 0 auto 2.5rem auto;
    opacity: 0.85;
  }

  .mockup {
    margin: 0 auto;
    max-width: 900px;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.28);
  }

  .mockup img {
    width: 100%;
    display: block;
  }

  @media (max-width: 600px) {
  .mockup {
    border-radius: 1rem;
  }
}
</style>
