import styled from 'styled-components'

export const FirstLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0;
  top: 0;
  left: 0;
  padding: 0;
  height: 66px;
  border-bottom: 1px solid rgba(207, 216, 220, 0.5);
`

export const Logo = styled.img`
  padding-top: 5px;
  display: block;
  margin-left: 5px;
  @media screen and (min-width: 993px) {
    display: none;
  }
`

export const LetterLogo = styled.img`
  padding-top: 5px;
  display: block;
  margin-left: 5px;
  @media screen and (max-width: 993px) {
    display: none;
  }
`

export const ButtonLogin = styled.button`
  width: 50%;
  display: flex;
  flex-direction: flex-end;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 20px;
  margin-right: 12px;
  padding: 5px 10px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #13c1ac;
  color: #13c1ac;
  cursor: pointer;
  @media screen and (max-width: 993px) {
  }
`

export const LoadProductButton = styled.button`
  display: flex;
  width: 20%;
  flex-direction: flex-end;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 12px;
  padding: 5px 10px;
  height: 40px;
  background-color: #13c1ac;
  border: 1px solid #13c1ac;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  @media screen and (max-width: 993px) {
    display: none;
  }
`
