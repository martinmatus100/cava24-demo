<script>
  import { revealOnScroll } from "../../lib/onScroll.js";
</script>
<section class="cta-compradores reveal" use:revealOnScroll>
  <div class="inner">
    <h2>¿Querés registrarte como comprador profesional?</h2>

    <p>
      Unite a la red de vinotecas, restaurantes y distribuidores que están conectándose
      directamente con bodegas boutique de todo el país.
    </p>

    <a href="#contacto-section" class="cta-btn">
      Registrarme como comprador
    </a>
  </div>
</section>

<style>
  .cta-compradores {
    padding: 4rem 2rem;
    background: var(--cava-burgundy-light, #a34e5d);
    color: #fff;
    text-align: center;
  }

  .inner {
    max-width: 800px;
    margin: 0 auto;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
  }

  p {
    opacity: 0.9;
    margin-bottom: 2rem;
  }

  .cta-btn {
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    background: var(--cava-yellow);
    color: #4b0e1c;
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 20px 45px rgba(0,0,0,0.4);
    transition: transform 0.2s ease, filter 0.2s ease;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
  }
</style>
