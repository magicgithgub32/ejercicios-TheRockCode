import { Logo, ButtonLogin, FirstLineWrapper, LoadProductButton, LetterLogo } from '../ui/FirstLine'

const Header = () => {
  return (
    <FirstLineWrapper>
      <Logo src="https://es.wallapop.com/images/logos/mini-logo-wallapop-home-v2.svg" alt="Logo" />
      <LetterLogo src="https://es.wallapop.com/images/logos/logo-wallapop-home-v2.svg" alt="Logo" />
      <ButtonLogin>Regístrate o inicia sesión</ButtonLogin>
      <LoadProductButton>✙ Subir producto</LoadProductButton>
    </FirstLineWrapper>
  )
}

export default Header
