const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
    console.log(req.query.name);
    res.send("user list");
});

router.get("/new", (req, res) => {
    res.render("users/new")
    console.log("new user form");
});

router.post("/", (req, res) => {
const isValid = false;
if(isValid){
    console.log(req.body.firstName);
    res.redirect(`/users/${users.length -1}`)
}else{
    console.log("error");
    res.render("users/new", {firstName:req.body.firstName});
}
});

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);
        let userId = req.params.id;
        res.send(` get User  with user  ${userId}`);
    })
    .put((req, res) => {
        let userId = req.params.id;
        res.send(` update User  with user  ${userId}`);
    })
    .delete((req, res) => {
        let userId = req.params.id;
        res.send(` delete User  with user  ${userId}`);
    });

const users = [{ name: "Kyle" }, { name: "sujan" }];
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next();
});

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;
