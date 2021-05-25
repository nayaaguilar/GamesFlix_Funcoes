function adicionarGames() {
    var campoTrailer = document.querySelector('#video')
    var trailerGame = campoTrailer.value
    if (validaVideo(trailerGame)) {
      listarTrailerNaTela(validaVideo(trailerGame))
    } else {
      document.getElementById('erro').innerText = "Ops! você inseriu um endereço inválido do YouTube";
    }
    campoTrailer.value = ""
  }
  
  function validaVideo(url) {
    var v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    return (url.match(v)) ? url.match(v)[1] : false
  }
  
  function listarTrailerNaTela(codVideo) {
    var listaGameTrailer = document.querySelector('#listaGameTrailer')
    var elementoGame = "<div class='gameTrailer'><iframe src='https://www.youtube.com/embed/" + codVideo + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"
    listaGameTrailer.innerHTML += elementoGame
  }
  
  function limparCampo() {
    var listaGameTrailer = document.querySelector('#listaGameTrailer')
    listaGameTrailer.innerHTML = ""
    
  }
  