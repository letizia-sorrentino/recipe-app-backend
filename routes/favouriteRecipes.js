const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addRecipe, deleteRecipe } = require("../mysql/queries");

router.post("/favourite-recipes", async (req, res) => {
    //add recipe to favourites
    const { title, image, imageType, userId } = req.body;

    //check the contents
    if (
        !title ||
        !image ||
        !imageType ||
        typeof title !== "string" ||
        typeof image !== "string" ||
        typeof imageType !== "string"
    ) {
        res.send({ status: 0, reason: "Incomplete or invalid request" });
        return;
    }

    try {
        await asyncMySQL(
            addRecipe(title, image, imageType, req.validatedUserId)
        );
        res.send({ status: 1 });
    } catch (error) {
        console.log(error);
        res.send({ status: 0, reason: "Duplicate entry" });
    }
});

router.delete("/:id", async (req, rest) => {
    const id = Number(req.params.id);

    //check that id is a number
    if (Number.isNaN(id)) {
        res.send({ status: 0, reason: "invalid id" });
        return;
    }

    const results = await asyncMySQL(deleteRecipe(id, req.validatedUserId))

    if (results.affectedRows > 0) {
        res.send({ status: 1 });

    } else {
        res.send({ status: 0, reason: "delete failed" });
    }

}


)

module.exports = router;