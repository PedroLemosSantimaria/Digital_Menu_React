// App.js
import React, { useState, useEffect } from 'react'
import './App.css'
import { buscarMenuItems, buscarGrupoSubgrupo } from './Api'
import { Link, useNavigate } from 'react-router-dom'

const Grupo = [] // Não está sendo utilizado, você pode removê-lo.

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [menuItems, setMenuItems] = useState([])
  const [filteredMenuItems, setFilteredMenuItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredMenuGrupo, setFilteredMenuGrupo] = useState([])
  const [selectedGrupo, setSelectedGrupo] = useState(null)
  const navigate = useNavigate()

  const preencheProduto = (name, value, image) => {
    navigate('/product', {
      state: { productName: name, productValue: value, productImage: image }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMenu = await buscarMenuItems()
        const arrayItens = dataMenu.map(item => ({
          id: item.id,
          name: item.Descricao,
          value: item.Preco,
          idGrupo: item.IDGrupoSubgrupo,
          image: 'https://www.realizasoftware.com.br/materiais/pizza.png'
        }))

        setMenuItems(arrayItens)
        setFilteredMenuItems(arrayItens)

        const dataGrupoSubgrupo = await buscarGrupoSubgrupo()
        const arrayGrupoSubgrupo = dataGrupoSubgrupo.map(grupo => ({
          id: grupo.ID,
          name: grupo.Descricao
        }))

        setFilteredMenuGrupo(arrayGrupoSubgrupo)

        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar os itens do menu:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleSearchClick = () => {
    const filteredItems = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredMenuItems(filteredItems)
  }

  const handleGrupoClick = idGrupo => {
    // Desseleciona se já estiver selecionado
    if (selectedGrupo === idGrupo) {
      setSelectedGrupo(null)
      setFilteredMenuItems(menuItems) // Volta a exibir todos os itens
    } else {
      setSelectedGrupo(idGrupo)
      // Filtra os itens pelo grupo selecionado
      const filteredItems = menuItems.filter(item => item.idGrupo === idGrupo)
      setFilteredMenuItems(filteredItems)
    }
  }

  return (
    <div className="app">
      <header>
        <div className="headerContent">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhSRR4Z-Ij5I_B5vdTJcO1t05_-kkYM3MnFvq1LpfDFziVymQBZUplFhiBsRxg94-kmg&amp;usqp=CAU"
            alt="Logo"
            className="logo"
          />
          <h1>CARDÁPIO</h1>
        </div>
      </header>
      <hr />

      <div className="grupoSubgrupos">
        {filteredMenuGrupo.map(grupo => (
          <button
            key={grupo.id}
            className={`grupoSub ${
              selectedGrupo === grupo.id ? 'selected' : ''
            }`}
            onClick={() => handleGrupoClick(grupo.id)}
          >
            {grupo.name}
          </button>
        ))}
      </div>

      <div className="Lupa">
        <input
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>
          <img
            src="https://www.pngmart.com/files/8/Search-Button-PNG-Transparent-Image.png"
            alt="Lupa"
          />
        </button>
      </div>

      <div className="menu">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div>
            {filteredMenuItems.map(item => (
              <a
                key={item.id}
                onClick={() => {
                  preencheProduto(item.name, item.value, item.image)
                }}
                className="menuLink custom-link"
              >
                <div className="menuItem">
                  <img src={item.image} alt={item.name} className="itemImage" />
                  <div className="itemDescription">
                    <p>{item.name}</p>
                    <p>R$: {item.value.toFixed(2)}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <button
        className="centerArrowUp"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/44/44674.png"
          alt="Seta para cima"
        />
      </button>
      <footer>Por ordem de Nunes e Lemos</footer>
    </div>
  )
}

export default App
