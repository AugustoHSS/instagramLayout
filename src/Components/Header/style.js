import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 54px;
  padding: 0 15% 0 15%;

  border-bottom: 1px solid #DBDBDB;
  background: #FFF;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ion-icon {
    font-size: 25px;
    min-width: 25px;
  }
  @media screen and (max-width: 935px) {
    padding: 0 5% 0 5%;
  }

  @media screen and (max-width: 614px) {
    #non-mobile{
      display: none;
    }
  }
`;

const SearchBar = styled.input`
  width: 215px;
  height: 26px;
  border: 1px solid #DBDBDB;
  border-radius: 5px;

  color: #979797;
  text-align: center;
  font-size: 12px;

  @media screen and (max-width: 614px) {
    display: none;
  }

`
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;

  @media screen and (max-width: 935px) {
    width: 20%;
  }
  @media screen and (max-width: 614px) {
    width: 4%;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  ion-icon {
    border-right: 1px solid #DBDBDB;
    padding-right: 6px;
  }
  img{
    padding: 4px 0 0 4px;
  }
  @media screen and (max-width: 935px) {
    width: 20%;
  }
  @media screen and (max-width: 614px) {
    width: 60%;
    ion-icon {
      border-right: 0;
      padding-right: 0px;
  }
  }

`


export { HeaderContainer,SearchBar,IconsContainer,LogoContainer };
