import { action, computed, observable } from "mobx";

import { getRepos, getUserData } from "../services/githubapi";

class UserStore {
	@observable error = null;
	@observable isFetching = false;
	@observable user = "";
	@observable orgs = [];
	@observable repo = [];

	@action async getUser(user) {
		this.isFetching = true;
		this.error = null;
		try {
			const response = await getUserData(user);
			this.user = response.user;
			this.orgs = response.orgs;
			this.isFetching = false;
		} catch (error) {
			this.error = error;
			this.isFetching = false;
		}
	}
	@action async getUserRep(user) {
		this.isFetching = true;
		this.error = null;
		try {
			const response = await getRepos(user);
			this.repo = response;
			this.isFetching = false;
		} catch (error) {
			this.error = error;
			this.isFetching = false;
		}
	}
	@action async getUserInfo(user) {
		this.isFetching = true;
		this.error = null;

		try {
			if (!user) {
				throw new Error("User is required!");
			}
			const response = await this.getUser(user);
			if (!this.error && !this.user) {
				throw new Error("User not found!");
			}
			this.getUserRep(user);
		} catch (error) {
			this.error = error;
			this.isFetching = false;
		}
	}

	@action logout() {
		this.user = "";
		this.orgs = [];
		this.repo = [];
	}
}

export default UserStore;
