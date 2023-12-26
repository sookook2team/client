import Header from "../components/common/header";
import Footer from "../components/common/footer";
import styled from "styled-components";

const feedData = [];
const Feed = () => {
    return (
        <Container>
            <Header />
            {
                feedData.length ?
                    <ImageContainer>feed</ImageContainer>
                    :
                    <EmptyContainer>
                        <img src="/assets/empty_feed.svg" alt="" />
                    </EmptyContainer>
            }
            <Footer />
        </Container>
    )
}

export default Feed;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  display: grid;
`;
const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 80px);
  box-sizing: border-box;
`;