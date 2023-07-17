const { body, validationResult } = require("express-validator");

const tituloValidator = body("titulo").isString().isLength({ max: 50 });

const createNoticiasValidation = [
  body("id").isNumeric(),
  tituloValidator,
  body("img").isURL().withMessage("La imagen debe ser una URL valida"),
  body("noticia").isString(),
  body("resumen").isString().isLength({
    max: 150,
  }),
  body("categoria").isIn(["economía", "tecnología", "policiales"]),
  body("autor").isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(errors.array());
      return;
    }
    next();
  },
];

const updateNoticiaValidation = [tituloValidator.optional()];

module.exports = {
  createNoticiasValidation,
  updateNoticiaValidation,
};
