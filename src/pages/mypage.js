import styled from "styled-components";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {getLikePost, getPost} from "../components/actions/post-action";
import {ImageContainer} from "./feed";

const dummy = {
    name: '김선우',
    profile: '/assets/profile.svg'
}
export function convertToS3URL(inputString) {
    // 대상 문자열 패턴을 정규표현식으로 정의합니다.
    const pattern = /https:\/\/sookookbucket\/test/g;

    // 대상 문자열에서 패턴을 검색하고 변환합니다.
    const result = inputString.replace(pattern, 'https://sookookbucket.s3.ap-northeast-2.amazonaws.com');

    return result;
}

const MyPage = () => {
    const navigate = useNavigate();
    const [tabIndex, setTabIndex] = useState(0);
    const [likePost, setLikePost] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [myPost, setMyPost] = useState([]);
    const [username, setUsername] = useState('');
    const fetchData = async () => {
        try {
            return await getPost(cookies.token);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        (async function() {
            if (!cookies.token) {
                navigate('/');
            } else {
                const response = await fetchData();
                if (response.length) {
                    setUsername(response[0].username);
                    setMyPost(response.reverse());
                }
                const res = await getLikePost(cookies.token);
                if (res.length) {
                    setLikePost(res.reverse());
                }
            }
        })();
    }, [])
    return (
        <Container>
            <Header />
            <ProfileContainer>
                <ProfileWrap>
                    <img width={60} height={60} src={dummy.profile} alt="" />
                    <span>{username}</span>
                </ProfileWrap>
            </ProfileContainer>
            <TabContainer>
                <Tab isSelected={tabIndex === 0} onClick={() => setTabIndex(0)}>내가 쓴 글</Tab>
                <Tab isSelected={tabIndex === 1} onClick={() => setTabIndex(1)}>좋아요한 글</Tab>
            </TabContainer>
            {
                tabIndex === 0 && myPost.length > 0 &&
                <ImageContainer>
                    { myPost.map((e, index) => {
                        return (
                            <img onClick={() => navigate(`/detail/${e.id}`)}  key={index} width="100%" height="100%" src={convertToS3URL(e.files[0].url)} alt=""/>
                        )
                    }) }
                </ImageContainer>
            }
            {
                tabIndex === 0 && myPost.length <= 0 &&
                <EmptyContainer>
                    <img src="/assets/empty_mine.svg" alt=""/>
                </EmptyContainer>
            }
            {
                tabIndex === 1 && likePost.length > 0 &&
                <ImageContainer>
                    { likePost.map((e, index) => {
                        return (
                            <img onClick={() => navigate(`/detail/${e.id}`)}  key={index} width="100%" height="100%" src={convertToS3URL(e.files[0].url)} alt=""/>
                        )
                    }) }
                </ImageContainer>
            }
            {
                tabIndex === 1 && likePost.length <= 0 &&
                <EmptyContainer>
                    <img src="/assets/empty_like.svg" alt=""/>
                </EmptyContainer>
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
  margin-bottom: 2px;
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

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 300px);
  width: 100%;
`;