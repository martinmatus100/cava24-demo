<script>
  const onPostularBodega = () => {
    const el = document.getElementById("contacto-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const onRegistrarmeComprador = () => {
    const el = document.getElementById("contacto-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
</script>

<section class="section-cta-final">
  <div class="cta-inner">
    <h2>Sumate al nuevo ecosistema del vino argentino.</h2>
    <p>
      Esta demo de Cava24 fue pensada para validar el potencial de una plataforma que
      una a bodegas, logística y compradores profesionales en una misma red.
    </p>

    <div class="cta-actions">
      <button class="btn btn-light" on:click={onPostularBodega}>
        Postular mi bodega
      </button>
      <button class="btn btn-outline" on:click={onRegistrarmeComprador}>
        Registrarme como comprador
      </button>
    </div>

    <p class="footnote">
      Demo creada para validación del proyecto Plataforma B2B de Vinos · Cava24
    </p>
  </div>
</section>

<style>
  .section-cta-final {
    padding: 5rem 2rem 4rem 2rem;
    background: linear-gradient(
      180deg,
      #6a1f33,
      #8d3947 40%,
      #a34e5d 80%,
      #6a1f33
    );
    color: #fff;
  }

  .cta-inner {
    max-width: 780px;
    margin: 0 auto;
    text-align: center;
  }

  .cta-inner h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    margin-bottom: 1rem;
  }

  .cta-inner p {
    font-size: 0.98rem;
    max-width: 640px;
    margin: 0.5rem auto 0 auto;
    opacity: 0.92;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0 1.5rem 0;
  }

  .btn {
    padding: 0.9rem 1.9rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease,
      color 0.2s ease, border-color 0.2s ease;
  }

  .btn-light {
    background: #f8ede3;
    color: #6a1f33;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  }

  .btn-light:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.4);
  }

  .btn-outline {
    background: transparent;
    color: #ffe8df;
    border: 1px solid rgba(255, 232, 223, 0.8);
  }

  .btn-outline:hover {
    background: rgba(255, 232, 223, 0.12);
    transform: translateY(-2px);
  }

  .footnote {
    font-size: 0.8rem;
    opacity: 0.75;
    margin-top: 1rem;
  }
</style>
