<script>
  import { fadeSlide } from "../../lib/animations.js";
</script>

<section class="section-b2b" id="comofunciona" use:fadeSlide>
  <div class="section-inner">
    <h2>¿Qué es la plataforma B2B de vinos?</h2>

    <p class="section-lead">
      Cava24 conecta bodegas con identidad propia con compradores profesionales en todo el país,
      simplificando la venta directa y la logística, con foco en datos y rentabilidad.
    </p>

    <div class="b2b-grid">
      <article class="b2b-card">
        <div class="emoji">🍇</div>
        <h3>Para bodegas</h3>
        <p>Venta directa, mejor margen y control total sobre catálogo, precios y disponibilidad.</p>
        <ul>
          <li>Gestión simple de vinos y líneas.</li>
          <li>Dashboard con datos de consumo.</li>
          <li>Más rentabilidad, menos intermediarios.</li>
        </ul>
      </article>

      <article class="b2b-card">
        <div class="emoji">🍷</div>
        <h3>Para compradores</h3>
        <p>Acceso a más bodegas, más etiquetas y acuerdos directos con productores.</p>
        <ul>
          <li>Variedad curada de bodegas boutique.</li>
          <li>Precios competitivos y transparentes.</li>
          <li>Compras directas, sin fricción.</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<style>
  .section-b2b {
    padding: 5rem 2rem;
    background: #f8ede3;
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

  .b2b-grid {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .b2b-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .b2b-card {
    background: #fff;
    border-radius: 1.5rem;
    padding: 2rem 1.75rem;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
    position: relative;
    overflow: hidden;
  }

  .b2b-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(106, 31, 51, 0.12), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .b2b-card:hover::before {
    opacity: 1;
  }

  .emoji {
    font-size: 2.4rem;
    margin-bottom: 0.75rem;
  }

  .b2b-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .b2b-card p {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
    opacity: 0.95;
  }

  .b2b-card ul {
    padding-left: 1.1rem;
    margin: 0;
    list-style: disc;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .b2b-card li + li {
    margin-top: 0.3rem;
  }
</style>
