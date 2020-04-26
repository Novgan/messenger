import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ecb33706-e3a9-4671-beb9-5899cdab2d14"
    },

});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return  instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return  instance.delete(`follow/${userId}`);
    },
    getProfile(userId){
        return  instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMy = false) {
        return instance.post(`auth/login`, {email, password, rememberMy});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}
