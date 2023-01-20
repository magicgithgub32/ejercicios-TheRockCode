import styled from 'styled-components'

export const InputUI = styled.input`
  border-radius: 24px;
`

export const Input = () => {
  return <InputUI text="text" placeholder="🔎 Buscar en Todas las Categorías" size="50" />
}
