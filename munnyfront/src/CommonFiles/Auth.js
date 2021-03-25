class Auth {
    constructor() {
        this.uauthenticated = false
        this.bauthenticated = false
    }
    ulogin(cb) {
        this.uauthenticated = true
        cb()
    }
    ulogout(cb) {
        this.uauthenticated = false
        localStorage.setItem('MFFUserId','null');
        cb()
    }
    blogin(cb) {
        this.bauthenticated = true
        cb()
    }
    blogout(cb) {
        this.bauthenticated = false
        localStorage.setItem('MFFBusinessId','null');
        cb()
    }
    isUAuthenticated() {
        return this.uauthenticated;
    }
    isBAuthenticated() {
        return this.bauthenticated;
    }
}
export default new Auth()