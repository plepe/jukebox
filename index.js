window.onload = () => {
  fetch('data/playlist.json')
    .then(req => req.json())
    .then(data => {
      const list = document.getElementById('list')

      data.forEach(entry => {
        const button = document.createElement('button')
        button.appendChild(document.createTextNode(entry.title))
        list.appendChild(button)

        button.onclick = () => activate(entry)
      })
    })
}

function activate (entry) {
  const audio = document.getElementsByTagName('audio')[0]
  audio.src = 'data/' + entry.file
  audio.play()
}
