import styled from "styled-components";
import Header from "../components/common/header";
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import {useParams} from "react-router-dom";
import DatePicker from "../components/util/datepicker";
import {useDropzone} from "react-dropzone";
const Post = () => {
    const param = useParams();
    const [currentYear, setCurrentYear] = useState(param.date.slice(0, 4))
    const [currentMonth, setCurrentMonth] = useState(param.date.slice(4))
    const [openModal, setOpenModal] = useState(false);
    const [images, setImages] = useState([]);
    const onDrop = (acceptedFiles) => {
        const newImages = acceptedFiles.slice(0, 5);
        setImages(newImages);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        multiple: true,
    });

    const onClickHandler = (year, month) => {
        setCurrentYear(year);
        setCurrentMonth(month);
        setOpenModal(!openModal)
    }
    return (
        <Container>
            <Header />
            <DateContainer onClick={() => setOpenModal(true)}>
                {currentYear}년 {currentMonth}월
                <img src="/assets/calendar.svg" alt="" />
            </DateContainer>
            <TitleInput placeholder="제목을 입력해주세요." />
            <ContentInput placeholder="내용을 입력해주세요." />
            <ImagePreviewContainer>
                {images.map((image, index) => (
                    <ImagePreview key={index} src={URL.createObjectURL(image)} alt={`uploaded-image-${index}`} />
                ))}
            </ImagePreviewContainer>
            <DropzoneWrap>
                <DropzoneContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                </DropzoneContainer>
            </DropzoneWrap>
            {
                openModal &&
                <Modal>
                    <DatePicker year={currentYear} month={currentMonth} onClickHandler={onClickHandler} />
                </Modal>
            }
        </Container>
    )
}

export default Post;


const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 80px);
  box-sizing: border-box;
  border-bottom: 1px solid #E6E6E6;
  background-color: #fff;
  margin: 20px 40px 0;
  cursor: pointer;
  font-weight: 600;
`;

const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const TitleInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #E6E6E6;
  width: calc(100% - 80px);
  height: 30px;
  margin: 20px 40px 0;
  font-size: 16px;
  padding: 10px 0;
  font-weight: 400;
`;

const ContentInput = styled.textarea`
  border: none;
  outline: none;
  width: calc(100% - 80px);
  height: 100%;
  max-height: 250px;
  margin: 0 40px;
  font-size: 16px;
  resize: none;
  padding: 18px 0;
  font-weight: 400;
`;
const DropzoneWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 0;
  border-top: 1px solid #E6E6E6;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;
const DropzoneContainer = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: url("/assets/camera.svg");
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  width: calc(100% - 80px);
  margin: 0 40px;
  box-sizing: border-box;
  overflow-x: auto;
  position: absolute;
  bottom: 80px;
`;

const ImagePreview = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 0 10px 10px 0;
  border: 2px solid #e6e6e6e6;
`;

