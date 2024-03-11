const mainController = {
    homePage: function (req, res) {
        res.render('home')
    },

    bioPage: function (req, res) {
        res.render('biographie')
            },

    underConstruction: function (req, res) {
        res.render('underConstruction')
    },
}
export default mainController;