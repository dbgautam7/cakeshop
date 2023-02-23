const express = require("express");
const router = express.Router();
const favouriteControllers = require("../controllers/favouriteControllers")

router.post('/products/favourites',favouriteControllers.PostFavourite)

router.get('/products/favourites',favouriteControllers.GetFavourite)

router.delete('/products/favourites/:productId',favouriteControllers.RemoveFavourite)


module.exports = router;