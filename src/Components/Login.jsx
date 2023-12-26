import React, { useState } from "react";
import { Button, Container, Logo } from "./signup_1";
import styled from "styled-components";
import { BackButton } from "./signup_2";
import { useNavigate } from "react-router-dom";

export const InputButton = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  display: flex;
  margin: 30px;
  width: 295px;
  height: 22px;
`;

export default function Login() {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };

  return (
    <Container>
      <BackButton onClick={onClickBtn} />
      <Logo />
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
