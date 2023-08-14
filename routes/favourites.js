const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addRecipe, deleteRecipe, getFavouriteRecipes } = require("../mysql/queries");

router.post("/", async (req, res) => {
    //add recipe to favourites
    const recipeId = Number(req.body.recipeId);

    //check that id is a number
    if (Number.isNaN(recipeId)) {
        res.send({ status: 0, reason: "invalid id" });
        return;
    }

    try {
        //add recipe to the database
        await asyncMySQL(
            addRecipe(recipeId, req.validatedUserId)
        );
        res.send({ status: 1 });
    } catch (error) {
        console.log(error);
        res.send({ status: 0, reason: "error while processing the request" });
    }
});

router.delete("/:id", async (req, res) => {
    console.log(req.params.id, req.validatedUserId);
    const id = Number(req.params.id);

    //check that id is a number
    if (Number.isNaN(id)) {
        res.send({ status: 0, reason: "invalid id" });
        return;
    }

    const result = await asyncMySQL(deleteRecipe(id, req.validatedUserId))
    console.log(result, deleteRecipe(id, req.validatedUserId));
    if (result.affectedRows > 0) {
        res.send({ status: 1 });

    } else {
        res.send({ status: 0, reason: "delete failed" });
    }
});

router.get("/", async (req, res) => {

    const results = await asyncMySQL(getFavouriteRecipes(req.validatedUserId));

    res.send({ status: 1, results });

});


module.exports = router;