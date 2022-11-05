function render(data) {
  document.querySelector('title').innerHTML = data.head.title
  
  renderHeader(data)
}

function renderHeader(data) {
  renderLogo(data.header.logo)
  renderDiscord(data.header.discord)
  renderNavigation(data.header.navigation)
  renderLayers(data.layers)
}

function renderLogo(logo) {
  document.querySelector('.header .logo').innerHTML = `
    <img src="${logo.img}" alt="">
    <p class="text">${logo.text}</p>
  `
}
function renderDiscord(discord) {
  document.querySelector('.header .discord').innerHTML = `
    <a href="${discord.href}">
      <img src="${discord.img}" alt="">
    </a>
  `
}

function renderNavigation(nav) {
  const navBlock = document.querySelector('.header .navigation')
  nav.forEach(elm => {
    navBlock.innerHTML += `
      <a href="${elm.href}">
        <div class="navigation__item">
          ${elm.title}
        </div>
      </a>
    `
  })
}

function renderLayers(layers) {
  layers.forEach(elm => {
    const DOM = document.querySelector('.layers')
    const layer = `
      <div class="layer">
        <div class="left">
          ${elm.title && `
            <div class="title">
              ${elm.title}
            </div>
          `}
          <a href="${elm.btn.href}">
            ${elm.btn.title && `
              <button class="btn">
                ${elm.btn.title}
              </button>
            `}
          </a>
        </div>
        <div class="right">
          <img src="${elm.img}" alt="" class="image">
        </div>
      </div>
    `
    DOM.innerHTML += layer
  })
}

export default render