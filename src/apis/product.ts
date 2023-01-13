import { config } from 'lib/axios'
import axios from 'axios';

const axiosInstance = axios.create(config);

export const getList = async () => {
    return await axiosInstance.get('product_cat.json?key=db4eee30').then((res) => {
		return res.data;
	});
};
//product.json?key=3446ea90
//product_cat.json?key=db4eee30