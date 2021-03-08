module.exports.index = (req, res) => res.render("features/index");

module.exports.encrypt = (req, res) => {
  var values = req.body;
  var code = req.body.plaintext.toUpperCase();
  res.render("features/index", {
    values: values,
    code: code,
  });
};
