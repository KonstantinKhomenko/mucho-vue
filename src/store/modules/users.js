import axios from "@/plugins/axios";

const users = {
  namespaced: true,
  state: {
    user: null,
    usersList: [],
    userId: 0,
  },

  getters: {
    userInfo: ({ user }) => user,
    usersList: ({ usersList }) => usersList,
    userId: ({ userId }) => userId,
  },

  actions: {
    async fetchUserByName({ commit }, userName) {
      try {
        const response = await axios.get(`users/${userName}`);

        commit("RECORD_USER", response);
      } catch (error) {
        console.log(error);
      }
    },

    infoCurrentUser({ commit }, currentId) {
      commit("USER_ID", currentId);
    },

    async fetchUsersList({ commit }) {
      try {
        const response = await axios.get(`users?since=0`);
        const usersArr = response.filter((el, i) => i <= 19);
        commit("USERS_LIST", usersArr);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mutations: {
    RECORD_USER(state, user) {
      state.user = user;
    },

    USERS_LIST(state, list) {
      state.usersList = list;
    },

    USER_ID(state, id) {
      state.userId = id;
    },
  },
};

export default users;
