import React, { useState } from "react";
import { Button, Container, Logo } from "./signup_1";
import styled from "styled-components";
import bracket from "../Img/back.png";
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

export const BackButton = styled.div`
  background-image: url(${bracket});
  width: 10px;
  height: 16px;
  margin-right: 345px;
  cursor: pointer;
  margin-bottom: 756px;
  position: absolute;
`;

export const Checkbox = styled.input`
  margin-left: 30px;
  margin-bottom: 50px;
  background: url() no-repeat;
  background-size: cover;
  &checked {
    background: url() no-repeat;
    background-size: cover;
  }
`;

const Agreelabel = styled.label`
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

export default function Signup2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
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

  const chkValid = (event) => {
    if (!isValidEmail || !validPassword) {
      setError("입력값을 확인하세요.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail && validPassword) {
      const agreeBox = document.getElementById("agreebox");
      if (agreeBox.checked) {
        navigate("/");
      } else {
        setError("개인정보 활용에 동의해야 합니다.");
      }
    } else {
      setError("입력값을 확인하세요.");
    }
  };

  const onClickBtn = () => {
    navigate(-1);
  };

  return (
    <Container>
      <BackButton onClick={onClickBtn} />
      <Logo />
      <form
        action='submit'
        id='joinform'
      >
        <InputButton
          type='text'
          placeholder='이름'
        />
        <InputButton
          type='email'
          placeholder='이메일'
          onChange={handleEmailChange}
        />
        <InputButton
          type='password'
          placeholder='비밀번호'
          onChange={handlePasswordChange}
        />
        <InputButton
          type='password'
          placeholder='비밀번호 확인'
        />
        <Checkbox
          type='checkbox'
          id='agreebox'
        />
        <Agreelabel for='agreebox'>개인정보 활용에 동의하십니까?</Agreelabel>
      </form>
      {error && <Error>{error}</Error>}
      <Button onClick={handleSubmit}>회원가입완료</Button>
    </Container>
  );
}
