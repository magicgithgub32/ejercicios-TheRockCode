import styled from 'styled-components'

export const FirstLineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
`

export const ButtonLogin = styled.button`
  width: 100%;
  display: flex;
  flex-direction: flex-end;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 20px;
  margin-right: 0px;
  padding: 5px 5px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #13c1ac;
  color: #13c1ac;
  cursor: pointer;
`
