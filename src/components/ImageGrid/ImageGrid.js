import './ImageGrid.css'

const ImageGrid = async () => {
  const container = document.createElement('div')
  container.className = 'image-grid'

  // Aquí coloca tu clave de acceso de Unsplash
  const accessKey = 'hKcqEMNTRP16Qa1vkXZO5C6GmKOxL5zYXTHTGi6b-4U'

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=${accessKey}&per_page=12`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const images = await response.json()

    images.forEach((image) => {
      const img = document.createElement('img')
      img.src = image.urls.small
      img.alt = image.alt_description || 'Unsplash Image'
      img.className = 'grid-image'
      container.appendChild(img)
    })
  } catch (error) {
    console.error('Failed to fetch images:', error)
    const errorMessage = document.createElement('p')
    errorMessage.textContent = 'Failed to load images.'
    container.appendChild(errorMessage)
  }

  return container
}

export default ImageGrid
