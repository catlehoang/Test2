import { config } from 'lib/axios'
import axios from 'axios';

const axiosInstance = axios.create(config);

export const getList = async () => {
    return await axiosInstance.get('material_api.json?key=3446ea90').then((res) => {
		return res.data;
	});
};