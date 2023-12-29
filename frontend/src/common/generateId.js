export function generateID() {
  var symbols = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var id = "";
  while (id.length < 12) {
      var randomIndex = Math.floor(Math.random() * symbols.length);
      id += symbols.charAt(randomIndex);
  }
  return id;
}