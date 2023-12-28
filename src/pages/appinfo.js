import styled from "styled-components";
import Header from "../components/common/header";

const AppInfo = () => {
    return (
        <Container>
            <Header />
            <img width="100%" src="/assets/dummyphoto.png" alt="" />
        </Container>
    )
}

export default AppInfo;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;