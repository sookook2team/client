import axios from 'axios';

export const getPost = async (memberId) => {
    const response = await axios.get('http://10.223.117.135:8080/article/my', {
        params: {
            memberId: String(memberId),
        },
    });
    return response.data;
}

export const getMonthPost = async (year, month) => {
    const response = await axios.get('http://10.223.117.135:8080/article', {
        params: {
            month,
            year
        },
    });
    return response.data;
}

export const getPostById = async (postId, userId) => {
    const response = await axios.get('http://10.223.117.135:8080/article/detail',
        {
            params: {
                postId: String(postId),
                memberId: String(userId)
            }
        });
    return response.data;
}

export const like = async (postId, userId) => {
    const formData = new FormData();
    formData.append('postId', String(postId));
    formData.append('memberId', String(userId));
    const response = await axios.post('http://10.223.117.135:8080/article/like', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    console.log(response);
    return response;
}

export const getLikePost = async (userId) => {
    const formData = new FormData();
    formData.append('memberId', String(userId));
    const response = await axios.get('http://10.223.117.135:8080/article/my/like', {
        params: {
            memberId: String(userId)
        }
    });
    return response.data;
}