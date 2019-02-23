module.exports = function warmup(temperature) {
  let translator = temperature * 9/5 + 32;
  return translator;
};