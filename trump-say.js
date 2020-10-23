;(function () {
  const colors = [
    '#CC3333',
    '#FF33FF',
    '#003333',
    '#FF0033',
    '#00CC66',
    '#000000',
    '#996666',
  ]
  const words = [
    'C h i n a ?',
    'China .',
    'CHINA!!!',
    'Nobody knows China better than me !',
    'Your fire!',
    'M A G A !',
  ]
  window.addEventListener('click', ev => {
    const el = document.createElement('div')
    el.innerText = words[Math.floor(Math.random() * words.length)]
    el.style.transition = 'all 1s'
    el.style.opacity = 1
    el.style.position = 'fixed'
    el.style.left = ev.x + 'px'
    el.style.top = ev.y + 'px'
    el.style.cursor = 'default'
    el.style.userSelect = 'none'
    el.style.color = colors[Math.floor(Math.random() * colors.length)]
    document.body.append(el)
    setTimeout(() => {
      el.style.top = ev.y - 50 + 'px'
      el.style.opacity = 0
    })

    setTimeout(() => document.body.removeChild(el), 1100)
  })
})()
