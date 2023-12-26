import styled from "styled-components";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import {useState} from "react";
import {tab} from "@testing-library/user-event/dist/tab";

const dummy = {
    name: '김선우',
    profile: '/assets/profile.svg'
}
const MyPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [myPost, setMyPost] = useState([]);
    const [likePost, setLikePost] = useState([]);
    console.log(tabIndex);
    return (
        <Container>
            <Header />
            <ProfileContainer>
                <ProfileWrap>
                    <img width={60} height={60} src={dummy.profile} alt="" />
                    <span>{dummy.name}</span>
                </ProfileWrap>
            </ProfileContainer>
            <TabContainer>
                <Tab isSelected={tabIndex === 0} onClick={() => setTabIndex(0)}>내가 쓴 글</Tab>
                <Tab isSelected={tabIndex === 1} onClick={() => setTabIndex(1)}>좋아요한 글</Tab>
            </TabContainer>
            {
                tabIndex === 0 ? myPost.length > 0 ?
                    <PostContainer>

                    </PostContainer>
                    :
                    <ImageContainer>
                        <img src="/assets/empty_mine.svg" alt=""/>
                    </ImageContainer>
                    :
                    tabIndex === 1 && likePost.length > 0 ?
                    <PostContainer>

                    </PostContainer>
                    :
                    <ImageContainer>
                        <img src="/assets/empty_like.svg" alt=""/>
                    </ImageContainer>
            }
            <Footer />
        </Container>
    )
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: 60px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 30px;
`;
const Tab = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-bottom: ${(props) => (props.isSelected ? '2px solid #000000' : '2px solid #e6e6e6')};
`;
const PostContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 300px);
  width: 100%;
`;