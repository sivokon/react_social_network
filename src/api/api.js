import * as axios from 'axios';

const samuraiJsApiInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "909e8075-ec8d-42ca-b97f-8694f6381a31"
  }
});

export const usersApi = {
  retrieveUsers(page = 1, pageSize = 4) {
    return samuraiJsApiInstance.get(`/users?page=${page}&count=${pageSize}`)
      .then(response => response.data);
  }
}

export const profileApi = {
  retrieveProfileByUserId(userId) {
    return samuraiJsApiInstance.get(`/profile/${userId}`)
      .then(response => response.data);
  }
}

export const authApi = {
  retrieveCurrentLoggedInUserInfo() {
    return samuraiJsApiInstance.get("/auth/me")
      .then(response => response.data);
  }
}

export const followApi = {
  followUser(userId) {
    return samuraiJsApiInstance.post(`/follow/${userId}`)
      .then(response => response.data);
  },

  unfollowUser(userId) {
    return samuraiJsApiInstance.delete(`/follow/${userId}`)
      .then(response => response);
  }
}