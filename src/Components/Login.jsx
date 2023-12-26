import React from "react";
import { Button, Container } from "./main";
import styled from "styled-components";
import {BackButton, BackButtonContainer, BackButtonWrap} from "./register";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };

  return (
    <Container>
      <BackButtonContainer>
          <BackButtonWrap onClick={onClickBtn}>
              <BackButton />
          </BackButtonWrap>
      </BackButtonContainer>
      <img src="/assets/background_logo.svg" alt="" />
      <form
        action='submit'
        id='Loginform'
      >
        <InputButton
          type='email'
          placeholder='이메일'
        />
        <InputButton
          type='password'
          placeholder='비밀번호'
        />
      </form>
      <Button>로그인</Button>
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
`;