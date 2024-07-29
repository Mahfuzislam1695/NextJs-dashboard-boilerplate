import axios from "axios";

//? Environment Check

let url = "http://103.219.160.253:5454/drug-website";

//? Get product details

export const getProductDetails = async () => {
	try {
		const response = await axios.get(`${url}/api/SpecilizedProducts`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
