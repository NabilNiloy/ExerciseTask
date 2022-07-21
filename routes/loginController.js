//js

// for the register page
const registerView = (req, res) => {
    res.render("register", {

    });
}

//for view
 const loginView = (req, res) => {
    res.render("login", {

    });
 }

 module.exports = {
    registerView,
    loginView
 };