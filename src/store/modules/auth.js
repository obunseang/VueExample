import apiCall from "utils/api";
import { USER_REQUEST } from "actions/user";
import {
	AUTH_REQUEST,
	AUTH_ERROR,
	AUTH_SUCCESS,
	AUTH_LOGOUT
} from "actions/auth";

const USER_KEY_TOKEN = "USER-TOKEN"

const state = {
	status: "",
	hasLoadedOnce: false,
	token: localStorage.getItem(USER_KEY_TOKEN) || ""
};

const getters = {
	isAuthenticated: state => !!state.token,
	authStatus: state => state.status
};

const actions = {
	[AUTH_REQUEST]: ({ commit, dispatch }, user) => {
		return new Promise((resolve, reject) => {
			commit(AUTH_REQUEST);
			apiCall({ url: "auth", data: user, method: "POST" })
			.then(resp => {
				localStorage.setItem(USER_KEY_TOKEN, resp.token);
				// Here set the header of your ajax library to the token value.
				// example with axios
				// axios.defaults.headers.common['Authorization'] = resp.token
				commit(AUTH_SUCCESS, resp);
				dispatch(USER_REQUEST);
				resolve(resp);
			})
			.catch(err => {
				commit(AUTH_ERROR, err);
				localStorage.removeItem(USER_KEY_TOKEN);
				reject(err);
			});
		});
	},
	[AUTH_LOGOUT]: ({ commit }) => {
		return new Promise(resolve => {
			commit(AUTH_LOGOUT);
			localStorage.removeItem(USER_KEY_TOKEN);
			resolve();
		});
	}
};

const mutations = {
	[AUTH_REQUEST]: state => {
		state.status = "loading";
	},
	[AUTH_SUCCESS]: (state, resp) => {
		state.status = "success";
		state.token = resp.token;
		state.hasLoadedOnce = true;
	},
	[AUTH_ERROR]: state => {
		state.status = "error";
		state.hasLoadedOnce = true;
	},
	[AUTH_LOGOUT]: state => {
		state.token = "";
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
