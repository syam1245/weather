const { check, validationResult } = require('express-validator');

const signinValidation = [
  check('email').isEmail().withMessage('Invalid email address'),
  check('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long and contain letters and numbers'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { signinValidation, handleValidationErrors };
