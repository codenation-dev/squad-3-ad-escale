import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  padding: 0 30px;
  background: #7159c1;
  color: #FFF;
  display: flex;
  align-items: center;

  a {
    color: #FFF;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  margin: 0 25px;
  padding: 5px 15px;
  border-radius: 15px;
  -webkit-appearance: none;
  border: 1px solid #cecece;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const UserDiv = styled.div`
  border: 1px solid #fff;
  width: 52px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  right: 10px;
  top: 50px;
  list-style: none;
  background-color: #fff;
  color: black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  li {
    padding: 5px;
    color: #6d6d6d;
    cursor: pointer;

    a {
      color: #6d6d6d;
    }

    svg {
      margin-right: 10px;
    }
  }

  li:last-child {
    border-top: 1px solid #ddd;
  }
`;