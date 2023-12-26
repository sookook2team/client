import styled from "styled-components";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

const MyPage = () => {
    return (
        <Container>
            <Header />
            MyPage
            <Footer />
        </Container>
    )
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;