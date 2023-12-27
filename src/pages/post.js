import styled from "styled-components";
import Header from "../components/common/header";
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import DatePicker from "../components/util/datepicker";
import {useDropzone} from "react-dropzone";
import axios from "axios";
import {useCookies} from "react-cookie";
const Post = () => {
    const param = useParams();
    const [currentYear, setCurrentYear] = useState(param.date.slice(0, 4))
    const [currentMonth, setCurrentMonth] = useState(param.date.slice(4))
    const [openModal, setOpenModal] = useState(false);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();
    const onDrop = (acceptedFiles) => {
        const newImages = acceptedFiles.slice(0, 5);
        setImages(newImages);
    };
    const handleUpload = async () => {
        try {
            const formData = new FormData();
            images.forEach((image) => {
                formData.append('files', image);
            });
            formData.append('title', title);
            formData.append('content', content);
            formData.append('memberId', cookies.token);
            formData.append('hashtags', '헤커톤')
            if (currentMonth.length === 1) {
                formData.append('date', `${currentYear}-0${currentMonth}-01`);
            } else {
                formData.append('date', `${currentYear}-${currentMonth}-01`);
            }

            await axios.post('http://10.223.117.135:8080/article/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate(`/feed/${param.date}`);
        } catch (error) {
            // 업로드 실패 시의 처리
            console.error('Upload failed:', error);
        }
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
            <Header postHandler={handleUpload} />
            <DateContainer onClick={() => setOpenModal(true)}>
                {currentYear}년 {currentMonth}월
                <img src="/assets/calendar.svg" alt="" />
            </DateContainer>
            <TitleInput placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} value={title} />
            <ContentInput placeholder="내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} value={content} />
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

