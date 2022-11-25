
export function getUserInfo() {
    const userInfo = localStorage.getItem("USER_INFO");
    if (userInfo) {
        return JSON.parse(userInfo);
    }

    return null;
}

export function saveUserInfoToStore(userInfo) {
    if (userInfo) {
        localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
    }
}