import React from 'react'
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import * as C from './styles';
import {Link, useNavigate} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import voxel from '../../../components/Img/voxel1.png'

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [emailConf, setEmailConf] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError ] = React.useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      setError('Preencha todos os campos');
      return;
    } else if (email !== emailConf) {
      setError('Os emails não coincidem');
      return;
    } else if (!emailRegex.test(email)) {
      return "E-mail inválido";
    }
  
    const res = signup(email, senha);
  
    if (res) {
      setError(res);
      return;
    }
  
    alert('Usuário cadastrado com sucesso!');
    navigate('/');
  };

  return (
    <C.Container>
      <C.Content>
      <img src={voxel}/>
        <Input
        type="email"
        placehoder="Digite seu email"
        value={email}
        onChange={(e)=>[setEmail(e.target.value), setError('')]}
        />
        <Input
        type="email"
        placehoder="Confirme seu email"
        value={emailConf}
        onChange={(e)=>[setEmailConf(e.target.value), setError('')]}
        />
        <Input
        type="password"
        placehoder="Digite sua senha"
        value={senha}
        onChange={(e)=>[setSenha(e.target.value), setError('')]}
        />
        {error && <C.labelError>{error}</C.labelError>}
        <Button Text="INSCREVER-SE" onClick={handleSignup}/>
        <C.LabelSignup>Já possui uma conta? <C.Strong>
          <Link to="/login">&nbsp;Entrar</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>

  )
};

export default Signup;