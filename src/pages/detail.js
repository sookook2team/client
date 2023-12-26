import { useParams } from "react-router-dom";

const Detail = () => {
    const { postId } = useParams();
    return (
        <div>
            detail: { postId }
        </div>
    )
}

export default Detail;