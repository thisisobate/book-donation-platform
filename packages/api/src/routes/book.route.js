const router = require("express").Router();
const BookCtrl = require("../controllers/book.controller");
const upload = require("../middlewares/multer.middleware")

router.post("/", BookCtrl.create);
router.get("/", BookCtrl.getAll);
router.get("/:bookId", BookCtrl.getOne);
router.put("/:bookId", upload("image"), BookCtrl.update);
router.delete("/:bookId", BookCtrl.delete);


module.exports = router