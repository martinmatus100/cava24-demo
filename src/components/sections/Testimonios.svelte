<section class="section-testimonials">
  <div class="section-inner">
    <h2>Lo que imaginamos junto a las bodegas y compradores</h2>

    <div class="testimonials-grid">
      <article class="testimonial-card">
        <p class="quote">
          “Por primera vez sentimos que podemos decidir cómo y dónde se vende nuestro vino.”
        </p>
        <p class="meta">Bodega boutique · Región Cuyo</p>
      </article>

      <article class="testimonial-card">
        <p class="quote">
          “Podemos ofrecer vinos únicos a precios justos, con una relación directa con las bodegas.”
        </p>
        <p class="meta">Vinoteca independiente · Buenos Aires</p>
      </article>

      <article class="testimonial-card placeholder">
        <p class="quote">
          Placeholder para futuros casos reales de la red Cava24.
        </p>
        <p class="meta">Caso piloto · Próximas iteraciones</p>
      </article>
    </div>
  </div>
</section>

<style>
  .section-testimonials {
    padding: 5rem 2rem;
    background: #f9f2ea;
  }

  .section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: clamp(2rem, 3vw, 2.5rem);
    margin-bottom: 2.5rem;
  }

  .testimonials-grid {
    display: grid;
    gap: 1.8rem;
  }

  @media (min-width: 900px) {
    .testimonials-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .testimonial-card {
    background: #fff;
    border-radius: 1.4rem;
    padding: 1.8rem 1.6rem;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
  }

  .testimonial-card::before {
    content: "“";
    position: absolute;
    top: -30px;
    left: -5px;
    font-size: 6rem;
    color: rgba(106, 31, 51, 0.08);
  }

  .quote {
    font-size: 0.98rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .meta {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: 0.7;
    position: relative;
    z-index: 1;
  }

  .placeholder {
    border: 1px dashed rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.9);
  }
</style>
