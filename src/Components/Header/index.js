import {HeaderContainer,SearchBar,IconsContainer,LogoContainer} from './style.js';
import logo from '../../img/logo.png'
export default function Header(){
  return(
      <HeaderContainer>
        <LogoContainer>
        <ion-icon name="logo-instagram"/>
        <img src={logo} alt="logo.png" />
        </LogoContainer>
        <SearchBar placeholder='Pesquisar'/>
        <IconsContainer>
          <ion-icon name="paper-plane-outline"/>
          <ion-icon name="compass-outline" id="non-mobile"/>
          <ion-icon name="heart-outline" id="non-mobile"/>
          <ion-icon name="person-outline" id="non-mobile"/>
        </IconsContainer>
      </HeaderContainer>

  )

}