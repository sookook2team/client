import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Signup1() {
  const navigate = useNavigate();

  const onClickBtn = (type) => {
      navigate(`/${type}`)
  }

  return (
    <Container>
      <img src="/assets/background_logo.svg" alt="" />
      <SignupIntro>
        그 날 그 날 있었던 우리의 추억.
        <br />
        같이 떠나보실래요?
      </SignupIntro>
      <Button onClick={() => onClickBtn('login')}>로그인</Button>
      <Button onClick={() => onClickBtn('register')}>회원가입</Button>
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Button = styled.button`
  background-color: #13316d;
  border-radius: 5px;
  cursor: pointer;
  margin: 7px;
  color: white;
  padding: 10px 15px;
  border: none;
  width: 295px;
  height: 60px;
`;

export const Logo = styled.div`
  background-image: url("/assets/background_logo.svg");
  background-size: cover;
  background-position: center;
  border: 0;
  outline: none;
`;

const SignupIntro = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 180px;
  margin-left: 80px;
  line-height: 30px;
`;