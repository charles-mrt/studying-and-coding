
const content = document.querySelector("main #content");

const CardProduct = (totalProducts) => {

  let renderProduct = "";

  for (let i = 0; i < totalProducts; i++) {

    renderProduct += `
      
      <div class="product">
        <img src="./src/assets/image/products/monitor-odyssey.png" alt="monitor">

        <h2>montor samsung 55"</h2>

        <p>
          Monitor Samsung Odyssey ARK 55 Pol.
          VA Curvo, UHD 4K, 1ms, 165Hz,
          FreeSync Premium, HDMI/DP, LS55BG970NLXZD
        </p>

        <p class="product-value">

          <span>
            em até 12x de
            <strong>R$ 458,25</strong>
          </span>

          <span>
            ou no pix
            <strong>R$ 458,25</strong>
          </span>
        </p>

        <a class="product-button">
          <span>oferta termina</span>
          <span>02:24:00</span>
        </a>

    </div>
    `;
  }

  return content.innerHTML = renderProduct;
}

CardProduct(8);