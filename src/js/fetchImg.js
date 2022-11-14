const URL = 'https://pixabay.com/api/';
const API_KEY = '30145762-bbea4d10537f12ddab0b4a39f';

async function fetchImage(query, page) {
    return fetch(
        `${URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error('Failed to find any images'));
        })
}

export default fetchImage;