import React from "react";
import styled from "styled-components";
import logoImage from "../Img/logo.png";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
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
  width: 250px;
  height: 148px;
  background-image: url(${logoImage});
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

export default function Signup1() {
  const navigate = useNavigate();

  const onClickLog = () => {
    navigate(`/Login`);
  };

  const onClickJoin = () => {
    navigate(`/signup_2`);
  };

  return (
    <Container>
      <Logo />
      <SignupIntro>
        그 날 그 날 있었던 우리의 추억.
        <br />
        같이 떠나보실래요?
      </SignupIntro>
      <Button onClick={onClickLog}>로그인</Button>
      <Button onClick={onClickJoin}>회원가입</Button>
    </Container>
  );
}
