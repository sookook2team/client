import styled from "styled-components";
import Header from "../components/common/header";
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import {useParams} from "react-router-dom";
import DatePicker from "../components/util/datepicker";
const Post = () => {
    const param = useParams();
    const [currentYear, setCurrentYear] = useState(param.date.slice(0, 4))
    const [currentMonth, setCurrentMonth] = useState(param.date.slice(4))
    console.log(currentYear);
    console.log(currentMonth);
    console.log('!');
    const onClickHandler = (year, month) => {
        setCurrentYear(year);
        setCurrentMonth(month);
    }
    return (
        <Container>
            <Header />
            <DatePicker year={currentYear} month={currentMonth} onClickHandler={onClickHandler}/>
        </Container>
    )
}

export default Post;


const Container = styled.div`
  width: 100%;
  height: 100%;
`;