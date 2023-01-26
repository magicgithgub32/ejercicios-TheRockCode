import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background-color: #385ef9;
  height: 334px;
  margin-bottom: 10px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  border-radius: 16px;
  visibility: inherit;
  width: 520px;
`

export const BannerTop = styled.div`
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  height: 100%;
`

export const BannerImage = styled.img`
  width: 88px;
  height: 81px;
  color: #253238;
  padding-top: 24px;
`
export const BannerPro = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 12px;
  margin: 24px 12px 12px 12px;
  border-radius: 12px;
`
export const BannerProTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #385ef9;
`
export const BannerProSubTitle = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #253238;
  margin-top: 12px;
`
export const MoreInfoButton = styled.button`
  height: 40px;
  background: #385ef9;
  border-radius: 21px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  margin-top: 8px;
`
