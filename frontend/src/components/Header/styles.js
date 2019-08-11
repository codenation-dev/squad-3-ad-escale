import styled from 'styled-components'

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
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    max-width: 100px;
    max-height: 60px;
  }

  h1 {
    margin-left: 5px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      display: none;
    }
  }
`

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid #cecece;
  background-color: #fff;
  margin: 0 25px 0 15px;

  input {
    width: 100%;
    padding: 0;
    border: none;
    -webkit-appearance: none;
    font-size: 14px;
  }

  svg {
    color: #888;
  }
`

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  -webkit-appearance: none;
  cursor: pointer;
`

export const MenuIcon = styled.div`
  width: 30px;
  height: 45px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;

    &:nth-child(1) {
      -webkit-transform: rotate(${props => props.open ? '45deg' : '0'});
      -moz-transform: rotate(${props => props.open ? '45deg' : '0'});
      -o-transform: rotate(${props => props.open ? '45deg' : '0'});
      transform: rotate(${props => props.open ? '45deg' : '0'});
      top: 10px;
    }

    &:nth-child(2) {
      width: ${props => props.open ? '0%' : '100%'};
      opacity: ${props => props.open ? '0' : '1'};
      top: 20px;
    }

    &:nth-child(3) {
      -webkit-transform: rotate(${props => props.open ? '-45deg' : '0'});
      -moz-transform: rotate(${props => props.open ? '-45deg' : '0'});
      -o-transform: rotate(${props => props.open ? '-45deg' : '0'});
      transform: rotate(${props => props.open ? '-45deg' : '0'});
      top: ${props => props.open ? '32px' : '30px'};
    }
  }
`

export const Menu = styled.ul`
  transition: .5s opacity;
  opacity: ${props => props.show ? 1 : 0};
  z-index: ${props => props.show ? 1 : -1};
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
`
