import Header from "../components/common/header";
import Footer from "../components/common/footer";
import styled from "styled-components";

const Main = () => {
    return (
        <Container>
            <Header />
                Main
            <Footer />
        </Container>
    )
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;