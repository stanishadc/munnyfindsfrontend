class Auth {
    constructor() {
        this.Uauthenticated = false
        this.Bauthenticated = false
    }
    ulogin(cb) {
        this.Uauthenticated = true
        cb()
    }
    uulogin(cb) {
        this.Uauthenticated = true
    }
    ulogout(cb) {        
        localStorage.removeItem("MFFUserId");
        localStorage.removeItem("MFFBusinessUserId");
        localStorage.removeItem("MFFBusinessId");
        this.Uauthenticated = false;
        this.Bauthenticated = false;
        cb()
    }
    blogin(cb) {
        this.Bauthenticated = true
        cb()
    }
    bblogin(cb) {
        this.Bauthenticated = true
    }
    blogout(cb) {
        localStorage.removeItem("MFFUserId");
        localStorage.removeItem("MFFBusinessUserId");
        localStorage.removeItem("MFFBusinessId");
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