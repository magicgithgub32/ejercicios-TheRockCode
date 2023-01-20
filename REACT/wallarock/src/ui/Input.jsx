import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const InputUI = styled.input`
  border-radius: 24px;
  justify-content: space-around;
`

// export const SearchIcon = styled.img`
//   left: 10px;
//   width: 28px;
//   height: 28px;
//   z-index: 1;
// `

export const ButtonUI = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  padding: 12px 24px;
  margin-left: 8px;
  background-color: #13c1ac;
  font-family: Wallie;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  border-radius: 24px;
  cursor: pointer;
`

export const Input = () => {
  const isDesktop = window.matchMedia('(min-width: 768px)').matches
  return (
    <InputWrapper>
      <InputUI text="text" placeholder="🔎 Buscar en Todas las Categorías" size="50" />
      <ButtonUI isDesktop={isDesktop}>Buscar</ButtonUI>
    </InputWrapper>
  )
}
