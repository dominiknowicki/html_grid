let view = this;

$(document).ready(function() {
  $("form").on("submit", function(form) {
    form.preventDefault();
    let fullname = $("#main-form-input-fullname").val();
    let fullnameError = fullname.validateFullname();
    if (fullnameError === null) {
      view.onSubmitSuccess(fullname);
    } else {
      view.onSubmitError(fullnameError);
    }
  });
});

function onSubmitSuccess(fullname) {
  $("h1").text(fullname);
}

function onSubmitError(fullnameError) {
  console.log("fullname is not valid: " + fullnameError);
  let input = $("#main-form-input-fullname");
  input.val("");
}

// TODO: consider validating form or using jQuery validation:
String.prototype.validateFullname = function() {
  if (this.toString().replace(" ", "").length < 3) {
    return "Wprowadź min. 2 znaki";
  }
  return null;
}