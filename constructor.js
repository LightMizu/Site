import render from './js/render.js'

const data = {
  head: {
    title: 'KimetsuCraft'
  },
  header: {
    logo: {
      img: '/img/discord.svg',
      text: 'KimetsuCraft'
    },
    discord: {
      img: '/img/discord.svg',
      href: '/'
    },
    navigation: [
      {title: 'Главная', href: '/'},
      {title: 'Правила', href: '/'},
      {title: 'Как войти', href: '/'},
      {title: 'О нас', href: '/'}
    ]
  },
  layers: [
    {
      img: '/img/layer_1.png',
      title: 'Заходи мы тебя очень ждем',
      btn: {
        title: 'Начать играть',
        href: '/'
      }
    }
  ]
}

render(data)