<section class="filters">
  <div class="inner">
    <div class="filter-group">
      <label>Región</label>
      <select>
        <option>Todas</option>
        <option>Mendoza</option>
        <option>Patagonia</option>
        <option>Salta</option>
        <option>San Juan</option>
      </select>
    </div>

    <div class="filter-group">
      <label>Varietal</label>
      <select>
        <option>Todos</option>
        <option>Malbec</option>
        <option>Cabernet Sauvignon</option>
        <option>Blend</option>
        <option>Torrontés</option>
      </select>
    </div>

    <div class="filter-group">
      <label>Precio</label>
      <select>
        <option>Cualquiera</option>
        <option>$2.000 – $5.000</option>
        <option>$5.000 – $10.000</option>
        <option>$10.000+</option>
      </select>
    </div>
  </div>
</section>

<style>
  .filters {
    background: #f5ece3;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .filter-group {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }

  label {
    margin-bottom: 0.3rem;
    text-transform: uppercase;
    letter-spacing: 0.14rem;
    font-size: 0.7rem;
    opacity: 0.7;
  }

  select {
    padding: 0.6rem 0.8rem;
    border-radius: 0.6rem;
    border: 1px solid rgba(0,0,0,0.25);
    background: #fff;
    font-size: 0.9rem;
  }
</style>
