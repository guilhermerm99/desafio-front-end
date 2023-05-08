import React from 'react'
import {useNavigate} from 'react-router-dom';
import Button from '../../../../src/components/Button/index';
import useAuth from '../../../../src/hooks/useAuth';
import * as C from './styles';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
  Sair
      </Button>
    </C.Container>
  );
};

export default Home;