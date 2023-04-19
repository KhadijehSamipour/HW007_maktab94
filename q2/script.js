function elemCreator(elementType, callback) {
  element = document.createElement(elementType);
  document.body.appendChild(element);
  callback(element);
}
function callback(element) {
  element.style.backgroundColor = "red";
  console.log(element);
}

elemCreator("lable", callback);
