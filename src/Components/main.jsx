import React, {useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Signup1() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const onClickBtn = (type) => {
      navigate(`/${type}`)
  }
  useEffect(() => {
      if (cookies.token) {
          navigate('/home');
      }
  }, [])

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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
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

const SignupIntro = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 180px;
  margin-left: 80px;
  line-height: 30px;
`;