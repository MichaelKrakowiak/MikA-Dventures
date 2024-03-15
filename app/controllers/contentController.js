const contentController = {
    bioPage: function (req, res) {
        res.render('biographie')
            },

    career: function (req, res) {
        res.render('career')
    },
}
export default contentController;