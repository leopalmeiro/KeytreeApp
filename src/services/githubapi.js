import axios from "axios";

const BASE_URL = "https://api.github.com";

export { getRepos, getUserData };

/* 
Method for retrieve all repository of user
@input username : User Identification
@return array of object
*/
function getRepos(username) {
	const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
	return axios.get(url).then(response => response.data);
}

/* 
Method for retrieve all information of user and organization
@input username : User Identification
@return array of object
*/
function getUserData(username) {
	return axios
		.all([
			axios.get(`${BASE_URL}/users/${username}`),
			axios.get(`${BASE_URL}/users/${username}/orgs`)
		])
		.then(([user, orgs]) => ({
			user: user.data,
			orgs: orgs.data
		}));
}
