import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer 9bEyvv2CxU3CnBjAhi3_uuRE-RIKKiPDArtGII6ppmFPq5wt7yVS9xiLH3eSE7hv92nVrjWb1vBszaNScWiO52JS5CC7rj-w_KfqyNlp_IKbd7OPIAjnOuFaAXvJXnYx'
	}
});