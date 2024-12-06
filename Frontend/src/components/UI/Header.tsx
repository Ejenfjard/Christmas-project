
import styled from 'styled-components';
import CartIcon from '../UI/CartIcon'; 



const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
      <span className='textLogo'>Santa Paws</span>
      <br />
      <span className='textSlogan'>Bringing Joy to Every Wagging Tail!</span>
      </Logo>
      <CartIcon/>
    </HeaderContainer>
  );
};

export default Header;


const HeaderContainer = styled.header`
   display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; 
  gap: 10px;
  border-bottom: 2px solid lightgray;
  

  

    /* För surfplattor (min-width: 768px) */
    @media (min-width: 768px) {
    height: 120px; 
    
  }

  /* För desktop (min-width: 1200px) */
  @media (min-width: 1200px) {
    height: 120px; 
    
  }
`;

const Logo = styled.div`
  
  margin-left: 10px; 
  

    /* För surfplattor (min-width: 768px) */
    @media (min-width: 768px) {
    display: flex; 
    flex-direction: row; 
    
    margin-left: 30px; 

    
  }

  /* För desktop (min-width: 1200px) */
  @media (min-width: 1200px) {
    font-size: 50px;
    margin-left: 50px;
  }

  .textLogo {
    font-size: 30px;
  font-family: "Codystar", sans-serif;
  font-weight: bold;
  color: #333;

    /* För surfplattor (min-width: 768px) */
    @media (min-width: 768px) {
    font-size: 40px;
    
  }

  /* För desktop (min-width: 1200px) */
  @media (min-width: 1200px) {
    font-size: 50px;
    
  }
  }

  .textSlogan {
  font-size: 13px;
  font-family: "Codystar", sans-serif;
  font-weight: bold;
  color: red;
  margin-left: 40px; 

  /* För surfplattor (min-width: 768px) */
  @media (min-width: 768px) {
    font-size: 25px;
    margin-top: 15px;
  }

  /* För desktop (min-width: 1200px) */
  @media (min-width: 1200px) {
    font-size: 30px;
    margin-top: 15px;
  }
  
  }
`;

 