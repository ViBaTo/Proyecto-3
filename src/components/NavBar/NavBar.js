import './NavBar.css'

const NavBar = () => {
  const nav = document.createElement('nav')
  nav.className = 'navbar'

  nav.innerHTML = `
    <div class="navbar-left">
      <button class="navbar-button">Inicio</button>
      <button class="navbar-button">Hoy</button>
      <button class="navbar-button">Crear</button>
    </div>
    <div class="navbar-center">
      <input type="text" placeholder="Search" class="navbar-search"/>
    </div>
    <div class="navbar-right">
      <button class="navbar-icon">🔔</button>
      <button class="navbar-icon">📧</button>
      <button class="navbar-icon">👤</button>
    </div>
  `

  return nav
}

export default NavBar
