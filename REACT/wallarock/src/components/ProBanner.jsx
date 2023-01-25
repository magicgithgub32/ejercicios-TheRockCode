import {
  BannerImage,
  BannerPro,
  BannerProSubTitle,
  BannerProTitle,
  BannerTop,
  BannerWrapper,
  MoreInfoButton
} from '../ui/Banner'

const ProBanner = () => {
  return (
    <BannerWrapper>
      <BannerTop>
        <BannerImage src="https://es.wallapop.com/images/home/walla_toy.svg" />
        <BannerImage src="https://es.wallapop.com/images/home/walla_chair.svg" />
        <BannerImage src="https://es.wallapop.com/images/home/walla_drill.svg" />
      </BannerTop>
      <BannerPro>
        <BannerProTitle>WallaRock PRO</BannerProTitle>
        <BannerProSubTitle>¿Tienes un negocio y quieres empezar a vender online?</BannerProSubTitle>
        <MoreInfoButton>Más info</MoreInfoButton>
      </BannerPro>
    </BannerWrapper>
  )
}

export default ProBanner
