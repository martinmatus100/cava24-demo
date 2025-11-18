<script>
  const onPostularBodega = () => {
    const el = document.getElementById("contacto-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const onRegistrarmeComprador = () => {
    const el = document.getElementById("contacto-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  import "./CTAFinal.css";
</script>

<section class="section-cta-final">
  <div class="section-cta-final__inner">
    <h2 class="section-cta-final__title">Sumate al nuevo ecosistema del vino argentino.</h2>
    <p class="section-cta-final__text">
      Esta demo de Cava24 fue pensada para validar el potencial de una plataforma que
      una a bodegas, logística y compradores profesionales en una misma red.
    </p>

    <div class="section-cta-final__actions">
      <button class="section-cta-final__button section-cta-final__button--light" on:click={onPostularBodega}>
        Postular mi bodega
      </button>
      <button class="section-cta-final__button section-cta-final__button--outline" on:click={onRegistrarmeComprador}>
        Registrarme como comprador
      </button>
    </div>

    <p class="section-cta-final__footnote">
      Demo creada para validación del proyecto Plataforma B2B de Vinos · Cava24
    </p>
  </div>
</section>
