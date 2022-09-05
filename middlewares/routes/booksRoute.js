const { Router } = require("express")
const {getBooks} = require("../controlers/booksbookscontrollers")

const route = Route()

Router.route("/book").get(getBooks)

module.exports=router