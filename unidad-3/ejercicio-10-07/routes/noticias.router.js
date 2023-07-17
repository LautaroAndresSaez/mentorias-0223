const { Router } = require("express");

const {
  createNoticiasValidation,
  updateNoticiaValidation,
} = require("../middlewares/noticias.middlewares");

const {
  create,
  findAll,
  deleteNoticia,
  updateNoticia,
} = require("../controllers/noticias.controller");

const router = Router();

router.post("/", createNoticiasValidation, create);
router.get("/", findAll);
router.delete("/:id", deleteNoticia);
router.put("/:id", updateNoticiaValidation, updateNoticia);

module.exports = router;
