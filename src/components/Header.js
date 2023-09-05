import styled from 'styled-components';

function Header(){
  return(
    <Nav>
      <Logo src="images/logo.svg"/>
      <NavMenu>
        <a>
          <img src="images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Profile src='images/developper.jpg'/>
    </Nav>
  )
}

export default Header;

const Profile = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;
`

const NavMenu = styled.div`
flex: 1;
margin-left: 25px;
display: flex;
align-items: center;
@media screen and (max-width: 720px){
  margin-left: 2px;
}
a{
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 7px;
  @media screen and (max-width: 720px){
    padding: 0 2px;
  }
  img{
    height: 15px;
  }
 
  span{
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    @media screen and (max-width: 720px){
      letter-spacing: 0;
      font-size: 10px
    }

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      apacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
  } 
  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
}
`

const Logo = styled.img`
width: 50px;
@media screen and (max-width: 720px){
  width: 35px;
}

`

const Nav = styled.nav`
display: flex;
align-items: center;
padding: 0 30px;
 height: 60px;
 background-color: #090b13;
 @media screen and (max-width: 720px){
  padding: 0 10px;
  height: 45px;
}
`