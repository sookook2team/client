import styled from "styled-components";
import {useState} from "react";

const DatePicker = (props) => {
    const { year, month, onClickHandler } = props;
    const monthArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const [currentYear, setCurrentYear] = useState(year);
    const [currentMonth, setCurrentMonth] = useState(month);
    const moveYear = (type) => {
        if (type === "next") {
            if (currentYear !== 2023) setCurrentYear(currentYear + 1);
        } else {
            if (currentYear !== 1970) setCurrentYear(currentYear - 1);
        }
    }
    const monthClickHandler = (e) => {
        setCurrentMonth(e);
        onClickHandler(currentYear, e);
    }
    return (
        <DatePickerContainer>
            <YearRow>
                { currentYear }년
                <ButtonContainer>
                    <img style={{ cursor: "pointer" }} width={24} height={24} src="/assets/prev.svg" alt="" onClick={() => moveYear('prev')}/>
                    <img style={{ cursor: "pointer" }} width={24} height={24} src="/assets/next.svg" alt="" onClick={() => moveYear('next')}/>
                </ButtonContainer>
            </YearRow>
            <MonthGrid>
                {monthArray.map((e, index) => (
                    <MonthItem onClick={() => monthClickHandler(e)} key={index} isSelected={currentMonth === Number(e)}>{e}월</MonthItem>
                ))}
            </MonthGrid>
        </DatePickerContainer>
    )
}

export default DatePicker;

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 320px;
  height: 100%;
  margin-bottom: 90px;
  margin-top: 30px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  z-index: 2;
  background-color: #ffffff;
`;

const YearRow = styled.div`
  display: flex;
  width: 100%;
  height: 34px;
  border-bottom: 1px solid #e5e5e5;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;


const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 10px;
  width: 100%;
  height: 100%;
`;
const MonthItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#99CCFF' : '#ffffff')};
  color: ${(props) => (props.isSelected ? '#13316D' : '#000000')};
  &:hover {
    background-color: #99CCFF;
    color: #13316D;
  }
`;