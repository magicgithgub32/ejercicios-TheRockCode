import { Logo, ButtonLogin, FirstLineWrapper } from '../ui/FirstLine'

const Header = () => {
  return (
    <FirstLineWrapper>
      <Logo src="https://es.wallapop.com/images/logos/mini-logo-wallapop-home-v2.svg" alt="Logo" />
      <ButtonLogin>Regístrate o inicia sesión</ButtonLogin>
    </FirstLineWrapper>
  )
}

export default Header
