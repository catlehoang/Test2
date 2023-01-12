import { config } from 'lib/axios';
import axios from 'axios';

const axiosInstance = axios.create(config);

export const getDetail = async () => {
	return await axiosInstance.get('order_detail.json?key=3446ea90').then((res) => {
		return res;
	});
};
