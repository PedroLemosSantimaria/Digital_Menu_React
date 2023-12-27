// api.js
import axios from 'axios'

export const buscarMenuItems = async () => {
  try {
    const response = await axios.get(
      'http://app.realizasoftware.com.br:8089/testes_api_restaurante/api/produtos_v3/KJ3!SKK@aLHSclsadJ1GHCPK9za33'
    )
    return JSON.parse(response.data)
  } catch (error) {
    console.error('Erro ao carregar os itens do menu:', error)
    throw error
  }
}

export const buscarGrupoSubgrupo = async () => {
  try {
    const response = await axios.get(
      'http://app.realizasoftware.com.br:8089/testes_api_restaurante/api/grupos_subgrupos_v4/KJ3!SKK@aLHSclsadJ1GHCPK9za33/332/332'
    )
    return JSON.parse(response.data)
  } catch (error) {
    console.error('Erro ao carregar os itens do menu:', error)
    throw error
  }
}
