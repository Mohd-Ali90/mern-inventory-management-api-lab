const router = require("express").Router();
const { standardLimiter } = require('../middleware/rateLimiter')
const productController = require('../controllers/products.controllers')
const validateObjectId = require('../middleware/validateObjectId')

router.post("/", productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/:productId", standardLimiter, validateObjectId, productController.getProductById)

router.put("/:productId" , productController.updateProduct)

router.delete("/:productId" , productController.deleteProduct)

module.exports = router