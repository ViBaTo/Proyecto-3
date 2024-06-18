import './ImageGrid.css'

const ImageGrid = async (query = '') => {
  const container = document.createElement('div')
  container.className = 'image-grid'

  const api_key = 'hKcqEMNTRP16Qa1vkXZO5C6GmKOxL5zYXTHTGi6b-4U'

  const url = query
    ? `https://api.unsplash.com/search/photos/?client_id=${api_key}&query=${query}&per_page=12`
    : `https://api.unsplash.com/photos/?client_id=${api_key}&per_page=12`

  const response = await fetch(url)
  const data = await response.json()
  const images = query ? data.results : data

  if (images.length === 0) {
    const message = document.createElement('p')
    message.className = 'no-results'
    message.textContent = 'No se encontraron resultados'
    container.appendChild(message)
  } else {
    images.forEach((image) => {
      const imgDiv = document.createElement('div')
      imgDiv.className = 'image-item'

      const img = document.createElement('img')
      img.src = image.urls.small
      img.alt = image.alt_description || 'Unsplash Image'

      imgDiv.appendChild(img)
      container.appendChild(imgDiv)
    })
  }

  return container
}

export default ImageGrid
