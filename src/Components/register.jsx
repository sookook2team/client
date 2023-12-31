import React, { useState } from "react";
import { Button, Container } from "./main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Signup2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordchk, setPasswordchk] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setValidEmail(emailRegExp.test(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    setValidPassword(passwordRegExp.test(newPassword));
  };

  const isSame = password === passwordchk;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail && validPassword && isSame) {
      const agreeBox = document.getElementById("agreebox");
      if (agreeBox.checked) {
        navigate("/home");
      } else {
        setError("개인정보 활용에 동의해야 합니다.");
      }
    } else if (!isSame) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("입력값을 확인하세요.");
    }
  };

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
      <img
        src='/assets/background_logo.svg'
        alt=''
      />
      <form
        action='목적지url'
        id='joinform'
        method=''
      >
        <InputButton
          type='text'
          placeholder='이름'
        />
        <InputButton
          type='email'
          placeholder='이메일'
          onChange={handleEmailChange}
          value={email}
        />
        <InputButton
          type='password'
          placeholder='비밀번호'
          onChange={handlePasswordChange}
          value={password}
        />

        <InputButton
          type='password'
          placeholder='비밀번호 확인'
          onChange={(event) => setPasswordchk(event.target.value)}
          value={passwordchk}
        />

        <Checkbox
          type='checkbox'
          id='agreebox'
        />
        <AgreeLabel for='agreebox'>개인정보 활용에 동의하십니까?</AgreeLabel>
      </form>
      {error && <Error>{error}</Error>}
      <Button onClick={handleSubmit}>회원가입완료</Button>
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

export const BackButtonContainer = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  top: 0;
`;

export const BackButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const BackButton = styled.div`
  background-image: url("/assets/back.svg");
  width: 10px;
  height: 16px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-left: 30px;
  margin-bottom: 50px;
  background: no-repeat;
  background-size: cover;
  &checked {
    background: no-repeat;
    background-size: cover;
  }
`;

const AgreeLabel = styled.label`
  font-size: smaller;
  margin-left: 5px;
  color: #7a7a7a;
`;

const Error = styled.p`
  font-size: smaller;
  text-align: center;
  color: red;
  margin-top: 360px;
  position: absolute;
`;
