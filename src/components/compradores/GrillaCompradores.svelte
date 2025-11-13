<script>
  const productos = [
    { nombre: "Malbec Reserva · 2021", region: "Mendoza", img: "/images/vino1.png" },
    { nombre: "Blend de Los Andes · 2020", region: "Uco", img: "/images/vino2.png" },
    { nombre: "Cabernet Gran Corte · 2022", region: "Patagonia", img: "/images/vino3.png" },
    { nombre: "Malbec Single Vineyard · 2021", region: "Mendoza", img: "/images/vino4.png" },
    { nombre: "Torrontés de Altura · 2023", region: "Salta", img: "/images/vino5.png" },
    { nombre: "Cabernet Reserva · 2020", region: "San Juan", img: "/images/vino6.png" },
  ];
</script>

<section class="grilla">
  <div class="inner">
    <h2>Explorá etiquetas de bodegas boutique</h2>

    <div class="grid">
      {#each productos as p}
        <article class="card">
          <img src={p.img} alt={p.nombre} />
          <h3>{p.nombre}</h3>
          <p class="region">{p.region}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .grilla {
    padding: 4rem 2rem;
    background: #fff;
  }

  .inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .inner h2 {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
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

  .card {
    background: #f8f3ee;
    border-radius: 1.5rem;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 16px 40px rgba(0,0,0,0.07);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 60px rgba(0,0,0,0.15);
  }

  .card img {
    height: 200px;
    object-fit: contain;
    margin-bottom: 1.2rem;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    color: var(--cava-wine-dark);
  }

  .region {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  @media (max-width: 600px) {
  .card img {
    height: 160px;
  }
}
</style>
