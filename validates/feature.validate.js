module.exports.checkInput = function (req, res, next) {
  var errors = [];
  if (!req.body.plaintext) {
    errors.push("Bản rõ không được để trống");
  }
  if (errors.length > 0) {
    res.render("features/index", {
      errors: errors,
      values: req.body,
    });
    return;
  }
  // console.log(errors);
  // console.log(req.body);
  next();
};
