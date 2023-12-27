import React, {useState} from "react";
import { Button, Container } from "./main";
import styled from "styled-components";
import { BackButton, BackButtonContainer, BackButtonWrap } from "./register";
import { useNavigate } from "react-router-dom";
import {loginUser} from "./actions/user-action";
import {useCookies} from "react-cookie";

export default function LoginComponent() {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const onClickBtn = () => {
    navigate(-1);
  };

  const login = async () => {
      const response = await loginUser(email, password);
      setCookie('token', response);
      navigate('/home');
  }

  return (
    <Container>
      <BackButtonContainer>
        <BackButtonWrap onClick={onClickBtn}>
          <BackButton />
        </BackButtonWrap>
      </BackButtonContainer>
      <img
        src='/assets/background_logo.svg'
        alt=''
      />
      <form
        action='submit'
        id='Loginform'
      >
        <InputButton
          type='email'
          placeholder='이메일'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputButton
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <Button onClick={login} type='submit'>로그인</Button>
    </Container>
  );
}

export const InputButton = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  display: flex;
  margin: 30px;
  width: 295px;
  height: 22px;
  padding: 5px 0;
`;
