import styled from 'styled-components';
import {useParams, useLocation, useNavigate} from "react-router-dom";

const Header = () => {
    const param = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.split("/")[1];
    return (
        <Container>
            { path === 'feed' &&
                <>
                    <FeedHeader>
                        <ButtonContainer onClick={() => navigate(-1)}>
                            <img src="/assets/back.svg" alt="back" />
                        </ButtonContainer>
                        {param.date.slice(0, 4)}년 {param.date.slice(4)}월의 그 날
                    </FeedHeader>
                    <ButtonContainer onClick={() => navigate(`/post/${param.date}`)}>
                        <img src="/assets/add_post.svg" alt="" />
                    </ButtonContainer>
                </>
            }
            { path === 'post' &&
                <>
                    <ButtonContainer onClick={() => navigate(-1)}>
                        <img src="/assets/back.svg" alt="back" />
                    </ButtonContainer>
                    <PostContainer>
                        <PostSpan isCancel onClick={() => navigate(-1)}>취소</PostSpan>
                        <PostSpan>등록</PostSpan>
                    </PostContainer>
                </>
            }
            { path === 'mypage' && <img src="/assets/header_logo.svg" alt="logo"/> }
            {
                path === 'setting' &&
                <FeedHeader>설정</FeedHeader>
            }
            {
                path === 'detail' &&
                <ButtonContainer onClick={() => navigate(-1)}>
                    <img src="/assets/back.svg" alt="back" />
                </ButtonContainer>            }
        </Container>
    );
};

export default Header;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 14px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  justify-content: space-between;
`;

const FeedHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #13316D;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  gap: 22px;
`;
const PostSpan = styled.span`
  cursor: pointer;
  color: ${(props) => (props.isCancel ? '#717171' : '#13316D')};
`;