<script>
  const productos = [
    { nombre: "Malbec Reserva · 2021", region: "Mendoza", img: "/cava24-demo/images/vino1.png" },
    { nombre: "Blend de Los Andes · 2020", region: "Uco", img: "/cava24-demo/images/vino2.png" },
    { nombre: "Cabernet Gran Corte · 2022", region: "Patagonia", img: "/cava24-demo/images/vino3.png" },
    { nombre: "Malbec Single Vineyard · 2021", region: "Mendoza", img: "/cava24-demo/images/vino4.png" },
    { nombre: "Torrontés de Altura · 2023", region: "Salta", img: "/cava24-demo/images/vino5.png" },
    { nombre: "Cabernet Reserva · 2020", region: "San Juan", img: "/cava24-demo/images/vino6.png" },
  ];

  import "./GrillaCompradores.css";
</script>

<section class="grilla-compradores">
  <div class="grilla-compradores__inner">
    <h2 class="grilla-compradores__title">Explorá etiquetas de bodegas boutique</h2>

    <div class="grilla-compradores__grid">
      {#each productos as p}
        <article class="grilla-compradores__card">
          <img class="grilla-compradores__card-image" src={p.img} alt={p.nombre} />
          <h3 class="grilla-compradores__card-title">{p.nombre}</h3>
          <p class="grilla-compradores__card-region">{p.region}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
