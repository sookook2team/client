import styled from "styled-components";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

const Setting = () => {
    return (
        <Container>
            <Header />
            Setting
            <Footer />
        </Container>
    )
}

export default Setting;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;