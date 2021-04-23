window.onload = () => {
  fetch('data/playlist.json')
    .then(req => req.json())
    .then(data => {
      const list = document.getElementById('list')

      data.forEach(entry => {
        const button = document.createElement('button')
        button.appendChild(document.createTextNode(entry.title))
        list.appendChild(button)

        entry.button = button
        button.onclick = () => activate(entry)
      })
    })
}

function activate (entry) {
  const list = document.getElementById('list')
  Array.from(list.children).forEach(button => button.classList.remove('active'))

  const audio = document.getElementsByTagName('audio')[0]
  audio.src = 'data/' + entry.file
  audio.play()

  entry.button.classList.add('active')
}
