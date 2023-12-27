import styled from "styled-components";
import Footer from "../components/common/footer";
import {useNavigate} from "react-router-dom";
import DatePicker from "../components/util/datepicker";
import {useEffect} from "react";
import {useCookies} from "react-cookie";
import {useRecoilState} from "recoil";
import {dateState} from "../components/recoil";

const Home = () => {
    const navigate = useNavigate();
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth();
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [date, setDate] = useRecoilState(dateState);

    const onClickMonth = (year, month) => {
        setDate(String(year) + String(month));
        navigate(`/feed/${year}${month}`);
    }
    useEffect(() => {
        if (!cookies.token) {
            navigate('/');
        } else {
            if (date) {
                navigate(`/feed/${date}`);
            }
        }
    }, [])
    return (
        <Container>
            <Content>
                <img src="/assets/background_logo.svg" alt="" />
                <Title>추억을 공유하고 싶은 시간을 선택하세요</Title>
                <DatePicker year={nowYear} month={nowMonth + 1} onClickHandler={onClickMonth}/>
            </Content>
            <Footer />
        </Container>
    )
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
  box-sizing: border-box;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #13316D;
  text-align: center;
  word-break: break-word;
`;
