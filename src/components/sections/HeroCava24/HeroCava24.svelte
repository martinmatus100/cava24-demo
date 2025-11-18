<script>
  // Más adelante podemos usar estos eventos para scrollear a secciones específicas.
  const onSoyBodegaClick = () => {
    const el = document.getElementById("bodegas-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const onSoyCompradorClick = () => {
    const el = document.getElementById("compradores-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

import { onMount } from "svelte";
import "./HeroCava24.css";

  let y = 0;

  onMount(() => {
    const handleScroll = () => {
      y = window.scrollY * 0.25;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<section class="hero" style="background-position: center calc(50% + {y}px)">
  <div class="hero__content">
    <p class="hero__kicker">Plataforma B2B de vinos · Demo Cava24</p>

    <h1 class="hero__title">
      Unimos el origen y el destino<br />
      del vino argentino.
    </h1>

    <p class="hero__subtitle">
      Sin intermediarios. Con identidad, transparencia y conexión entre bodegas boutique
      y compradores profesionales.
    </p>

    <div class="hero__actions">
      <button class="hero__button hero__button--primary" on:click={onSoyBodegaClick}>
        Soy bodega
      </button>
      <button class="hero__button hero__button--secondary" on:click={onSoyCompradorClick}>
        Soy comprador
      </button>
    </div>

    <p class="hero__hint">
      Scroll para descubrir cómo funciona la plataforma
    </p>
  </div>

  <div class="hero__scroll-indicator">
    <span class="hero__scroll-indicator-body"></span>
  </div>
</section>
