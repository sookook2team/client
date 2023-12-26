import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    const navigate = useNavigate();
    const handleClick = (pathname) => {
        navigate(`/${pathname}`);
    };
    return (
        <Container>
            <ImageContainer onClick={() => handleClick('home')}>
                <img src="/assets/home.svg" alt="" />
            </ImageContainer>
            <ImageContainer onClick={() => handleClick('mypage')}>
                <img src="/assets/mypage.svg" alt="" />
            </ImageContainer>
            <ImageContainer onClick={() => handleClick('setting')}>
                <img src="/assets/setting.svg" alt="" />
            </ImageContainer>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  box-shadow: 0 -5px 15px 0 rgba(0, 0, 0, 0.1);
`;
const ImageContainer = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

