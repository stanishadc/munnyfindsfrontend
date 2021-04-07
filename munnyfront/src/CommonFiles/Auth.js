class Auth {
    constructor() {
        this.Uauthenticated = false
        this.Bauthenticated = false
    }
    ulogin(cb) {
        this.Uauthenticated = true
        cb()
    }
    ulogout(cb) {        
        localStorage.setItem('MFFUserId',null);
        localStorage.setItem('MFFBusinessId',null);
        this.Uauthenticated = false;
        this.Bauthenticated = false;
        cb()
    }
    blogin(cb) {
        this.Bauthenticated = true
        cb()
    }
    blogout(cb) {
        localStorage.setItem('MFFUserId',null);
        localStorage.setItem('MFFBusinessId',null);
        this.Uauthenticated = false;
        this.Bauthenticated = false;
    }
    isUAuthenticated() {
        return this.Uauthenticated;
    }
    isBAuthenticated() {
        return this.Bauthenticated;
    }
}
export default new Auth()