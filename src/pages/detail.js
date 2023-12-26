import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/main";
import {
  BackButton,
  BackButtonContainer,
  BackButtonWrap,
} from "../components/register";
import styled from "styled-components";
import Footer from "../components/common/footer";

const Detail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const onClickBtn = () => {
    navigate(-1);
  };

  const dummyData = {
    profile: "/assets/dummyprofile.png",
    title: "제 2회 코코톤 참여",
    name: "한정현",
    photo: "/assets/dummyphoto.png",
    view: "235K",
    liked: 87,
    comment: 8,
  };

  return (
    <Container>
      <BackButtonContainer>
        <BackButtonWrap onClick={onClickBtn}>
          <BackButton />
        </BackButtonWrap>
      </BackButtonContainer>
      <ArticleWrap>
        <ProfileHeader>
          <ProfileImage
            src={dummyData.profile}
            alt='Profile'
          />
          <ProfileInfo>
            <ProfileTitle>{dummyData.title}</ProfileTitle>
            <ProfileName>{dummyData.name}</ProfileName>
          </ProfileInfo>
        </ProfileHeader>
        <Dayphoto
          src={dummyData.photo}
          alt='photo'
        />
        <ReactionBox>
          <ReactionItem>
            <img
              src='/assets/view.svg'
              alt=''
            />
            <ReactionsCount>{dummyData.view}</ReactionsCount>
          </ReactionItem>
          <ReactionItem>
            <img
              src='/assets/heart.svg'
              alt=''
            />
            <ReactionsCount>{dummyData.liked}</ReactionsCount>
          </ReactionItem>
          <ReactionItem>
            <img
              src='/assets/reply.svg'
              alt=''
            />
            <ReactionsCount>{dummyData.comment}</ReactionsCount>
          </ReactionItem>
        </ReactionBox>
      </ArticleWrap>
      <Addpost>
        <img
          src='/assets/addpost.svg'
          alt=''
        />
      </Addpost>
      {/* <div>detail: {postId}</div> */}
      <Footer />
    </Container>
  );
};

export default Detail;

const ArticleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  box-sizing: border-box;
`;

const ProfileHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 10px;
  height: 80px;
`;

const ProfileImage = styled.img`
  position: relative;
  display: flex;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin-right: 10px;
  border: 1px solid black;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 15px;
  margin-left: 20px;
  gap: 3px;
`;

const ProfileTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ProfileName = styled.div`
  font-size: 14px;
  color: gray;
`;

const Dayphoto = styled.img`
  width: 100%;
  height: auto;
`;

const ReactionBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ReactionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReactionsCount = styled.p`
  color: gray;
  font-size: smaller;
  margin: 0px;
`;

const Addpost = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  margin-left: 330px;
  bottom: 60px;
`;

const Article = styled.div``;
