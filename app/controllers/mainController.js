const mainController = {
    homePage: function (req, res) {
        res.render('home')
    },

    underConstruction: function (req, res) {
        res.render ('underConstruction')
    },
}
    export default mainController;