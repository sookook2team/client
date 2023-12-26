import styled from "styled-components";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

const Setting = () => {
    return (
        <Container>
            <Header />
                <ListContainer>
                    <List>
                        <span>앱 정보</span>
                        <img src="/assets/next.svg" alt="" />
                    </List>
                    <List>
                        <span>회원탈퇴</span>
                        <img src="/assets/next.svg" alt="" />
                    </List>
                    <List>
                        <span>로그아웃</span>
                        <img src="/assets/next.svg" alt="" />
                    </List>
                </ListContainer>
            <Footer />
        </Container>
    )
}

export default Setting;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  box-sizing: border-box;
`;

const List = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  > span {
    font-size: 18px;
    font-weight: 700;
  }
`;

