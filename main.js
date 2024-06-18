import './style.css'
import NavBar from './src/components/NavBar/NavBar'
import ImageGrid from './src/components/ImageGrid/ImageGrid'

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app')

  const navBar = NavBar()
  app.appendChild(navBar)

  const imageGrid = await ImageGrid()
  app.appendChild(imageGrid)

  document
    .getElementById('search-input')
    .addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value
        const newImageGrid = await ImageGrid(query)
        app.replaceChild(newImageGrid, app.querySelector('.image-grid'))
      }
    })
})
