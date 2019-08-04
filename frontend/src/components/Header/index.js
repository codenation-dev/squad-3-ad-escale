import React from 'react';
import { Link, withRouter } from "react-router-dom";

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>Farejando</h1>
      </Link>
    </Container>
  );
}

export default withRouter(Header);