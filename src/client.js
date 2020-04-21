import { encode } from 'plantuml-encoder'

import(process.env.UML_FILE_PATH).then(res => {
  const encoded = encode(res.default)
  const img = document.createElement('img')
  img.setAttribute('src', `http://localhost:${process.env.UML_PORT}/png/${encoded}`)
  document.body.appendChild(img)
})
