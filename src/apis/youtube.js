import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD9h31t_5OnNE2rEzmiB_Vrxgh0oAkMRI8'
    }
})
