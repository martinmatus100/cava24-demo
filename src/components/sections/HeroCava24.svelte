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
  <div class="hero-overlay"></div>

  <div class="hero-content">
    <p class="hero-kicker">Plataforma B2B de vinos · Demo Cava24</p>

    <h1>
      Unimos el origen y el destino<br />
      del vino argentino.
    </h1>

    <p class="hero-subtitle">
      Sin intermediarios. Con identidad, transparencia y conexión entre bodegas boutique
      y compradores profesionales.
    </p>

    <div class="hero-actions">
      <button class="btn btn-primary" on:click={onSoyBodegaClick}>
        Soy bodega
      </button>
      <button class="btn btn-secondary" on:click={onSoyCompradorClick}>
        Soy comprador
      </button>
    </div>

    <p class="hero-hint">
      Scroll para descubrir cómo funciona la plataforma
    </p>
  </div>

  <div class="scroll-indicator">
    <span></span>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    /* Parallax básico */
    background-image: url("/images/hero-vinedos.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent),
                linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75));
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 780px;
    text-align: center;
    padding-top: 5rem; /* margen extra por header fijo */
  }

  .hero-kicker {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.8rem;
    opacity: 0.9;
    margin-bottom: 0.8rem;
  }

  h1 {
    font-size: clamp(2.4rem, 4vw, 3.4rem);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.05rem;
    max-width: 620px;
    margin: 0 auto 2rem auto;
    opacity: 0.95;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .btn {
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease,
      color 0.2s ease, border-color 0.2s ease;
  }

  .btn-primary {
    background: var(--cava-burgundy-deep, #6a1f33);
    color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(6px);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.16);
    transform: translateY(-2px);
  }

  .hero-hint {
    font-size: 0.85rem;
    opacity: 0.85;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .scroll-indicator span {
    display: block;
    width: 24px;
    height: 40px;
    border-radius: 999px;
    border: 2px solid rgba(255,255,255,0.8);
    position: relative;
  }

  .scroll-indicator span::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.9);
    animation: scroll-dot 1.4s infinite ease-in-out;
  }

  @keyframes scroll-dot {
    0% {
      opacity: 0;
      transform: translate(-50%, 0);
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-50%, 14px);
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 0 1.5rem;
      background-attachment: scroll; /* por performance en mobile */
    }

    .hero-content {
      padding-top: 4.5rem;
    }
  }
</style>
