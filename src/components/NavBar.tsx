import styled from 'styled-components';

const Navigation = styled.nav`

  background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
  background-color: #333;
  color: white;
  padding: 10px;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin: 0 10px;
  }
`;

const SearchContainer = styled.li`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: none;
  border-radius: 3px;
`;

const SearchButton = styled.button`
  background-color: #666;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Navigation>
      <ul>
        <li><a href="#">Jewellery</a></li>
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Women's Clothing</a></li>
        <li><a href="#">Men's clothing</a></li>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
          <SearchButton type="button">Search</SearchButton>
        </SearchContainer>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://icons.veryicon.com/png/o/miscellaneous/rongyiguang/menu-bar-shopping-cart.png"
           alt="Cart" style={{ width: '42px', height: '42px', marginRight: '35px' }} />
        </li>
      </ul>
    </Navigation>
  );
};

export default Navbar;
