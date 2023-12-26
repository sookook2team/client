import styled from 'styled-components';
const Layout = ({children}) => {
    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #99ccff;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
`;