import axios from 'axios';

axios.create({
	baseURL: 'localhost:3000'
});

export default axios;
