import Header from "../components/common/header";
import Footer from "../components/common/footer";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {getMonthPost} from "../components/actions/post-action";
import {useCookies} from "react-cookie";
import {useNavigate, useParams} from "react-router-dom";
import {convertToS3URL} from "./mypage";

const feedData = ['/assets/test_thumbnail.png', '/assets/test_thumbnail.png', '/assets/test_thumbnail.png', '/assets/test_thumbnail.png', '/assets/test_thumbnail.png'];
const Feed = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [post, setPost] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const fetchData = async () => {
        try {
            const fixMonth = param.date.slice(4);
            if (fixMonth.length === 1) {
                return await getMonthPost(param.date.slice(0, 4), `0${fixMonth}`);
            } else {
                return await getMonthPost(param.date.slice(0, 4), fixMonth);
            }
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
                setPost(response.reverse());
            }
        })();
    }, [])
    return (
        <Container>
            <Header />
            {
                post.length > 0 ?
                    <ImageContainer>
                        {post.map((e) => {
                            return (
                                <img onClick={() => navigate(`/detail/${e.id}`)} width="100%" height="100%" src={convertToS3URL(e.files[0].url)} alt=""/>
                            )
                        })}
                    </ImageContainer>
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

export const ImageContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  padding: 0 5px;
`;

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 80px);
  box-sizing: border-box;
`;