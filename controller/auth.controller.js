class authController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async getUsers(req, res) {
        res.json('work');
    }
}

module.exports = new authController();