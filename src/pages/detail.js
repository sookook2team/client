import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {getPostById, like} from "../components/actions/post-action";
import {convertToS3URL} from "./mypage";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ posts }) => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <Slider {...settings}>
        {posts.map((post, index) => (
            <img
                key={index}
                src={convertToS3URL(post.url)}
                alt={`Image ${index + 1}`}
                width="100%"
              />
        ))}
      </Slider>
  );
};
const Detail = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const param = useParams();
  const [isLike, setIsLike] = useState(false);
  const dummyData = {
    profile: "/assets/profile.svg",
    title: "제 2회 코코톤 참여",
    name: "한정현",
    photo: "/assets/dummyphoto.png",
    view: "0",
    liked: 87,
    comment: 0,
    content: "안녕하세요~!~!~1"
  };
  const getCurrentMonth = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
    return `${year}${month < 10 ? '0' : ''}${month}`;
  };
  const fetchData = async () => {
    try {
      return await getPostById(param.postId, cookies.token);
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
        setPost(response);
      }
    })();
  }, [isLike])
  const likeHandler = async () => {
    await like(post.id, cookies.token);
    setIsLike(!isLike);
  }
  return (
    <Container>
      <Header />
      {
        post && <ArticleWrap>
            <ProfileHeader>
              <ProfileImage
                  src={dummyData.profile}
                  alt='Profile'
              />
              <ProfileInfo>
                <ProfileTitle>{post.title}</ProfileTitle>
                <ProfileName>{post.username}</ProfileName>
              </ProfileInfo>
            </ProfileHeader>
            <ImageSlider posts={post.files} />
            <ReactionBox>
              <ViewItem>
                <img
                    src='/assets/view.svg'
                    alt=''
                />
                <ReactionsCount>{dummyData.view}</ReactionsCount>
              </ViewItem>
              <ReactionItem onClick={likeHandler}>
                { post.hasLike ?
                    <img
                        src="/assets/red_like.svg"
                        alt=""
                    />
                :
                    <img
                        src='/assets/heart.svg'
                        alt=''
                    />
                }

                <ReactionsCount>{post.likes}</ReactionsCount>
              </ReactionItem>
              <ReactionItem>
                <img
                    src='/assets/reply.svg'
                    alt=''
                />
                <ReactionsCount>{dummyData.comment}</ReactionsCount>
              </ReactionItem>
            </ReactionBox>
            <Content>
              {post.content}
            </Content>
          </ArticleWrap>
      }
      <AddPost onClick={() => navigate(`/post/${getCurrentMonth()}`)}>
        <img
          src='/assets/addpost.svg'
          alt=''
        />
      </AddPost>
      <Footer />
    </Container>
  );
};

export default Detail;

const ArticleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 160px);
  overflow-y: scroll;
  box-sizing: border-box;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80px;
  margin: 10px 0;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 70%;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  position: relative;
  margin-left: 12px;
  gap: 3px;
  justify-content: center;
`;

const ProfileTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const ProfileName = styled.div`
  font-size: 14px;
  color: gray;
`;

const DayPhoto = styled.div`
  width: 100%;
  padding-top: 100%;
  background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
  background-size: cover;
  background-repeat: no-repeat;
`;

const ReactionBox = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
  margin-top: 10px;
`;

const ViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ReactionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ReactionsCount = styled.p`
  color: gray;
  font-size: smaller;
  margin: 0;
`;

const AddPost = styled.div`
  position: absolute;
  display: flex;
  cursor: pointer;
  bottom: 100px;
  right: 20px;
`;

const Content = styled.div`
  margin-top: 14px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 40px;
  font-weight: 500;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;