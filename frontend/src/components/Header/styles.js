import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  padding: 0 30px;
  background: #fff;
  box-shadow: rgba(79, 79, 79, 0.1) 0px 0.4rem 2rem 0px;
  color: #444b54;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Pathway Gothic One', sans-serif;
  }

  a {
    color: #444b54;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    fill: red;
    stroke: red;
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
  justify-content: flex-end;
  background-color: #fff;
  margin: 0 15px;

  div {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 15px;
    border: ${props => props.open ? '1px solid #cecece' : 'none'};
    width: ${props => props.open ? '100%' : '35px'};
    transition: .5s width;
    max-width: 500px;
  }

  input {
    width: 100%;
    padding: 0;
    border: none;
    -webkit-appearance: none;
    font-size: 14px;
  }

  svg {
    color: #888;
    cursor: pointer;
  }
`

export const Login = styled.a`
  color: #444b54;
  font-size: 16px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`

export const MenuIcon = styled.div`
  width: 25px;
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
    height: 3px;
    width: 100%;
    background: #444b54;
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
      top: 12px;
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
      top: ${props => props.open ? '29px' : '28px'};
    }
  }
`

export const Menu = styled.ul`
  transition: .5s right;
  z-index: 1;
  position: fixed;
  right: ${props => props.show ? 0 : '-100%'};
  top: 50px;
  list-style: none;
  background-color: #fff;
  color: black;
  padding: 10px;
  border-radius: 5px 0 0 5px;
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
