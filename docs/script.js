let textInput = $("#text_input");
const button_add = $("#add");

textInput.on("keypress", (e) => {
  if (e.which == 13 || e.keyCode == 13) {
    button_add.click();
  }
});

button_add.on("click", () => {
  var top = Math.round,
    r = Math.random,
    max = 255;
  var randomColor =
    `rgba(` +
    top(r() * max) +
    "," +
    top(r() * max) +
    "," +
    top(r() * max) +
    `,0.5)`;
  //   calculate random number form 1 to 3.
  let dataDivID = Math.floor(Math.random() * 3 + 1);

  if (textInput.val()) {
    let noteTemplate =
      `<div class="note" style="background:` +
      randomColor +
      `"><p class="text-note">` +
      textInput.val() +
      `</p><div class="close ripple" onclick="get_parent(this)"><ion-icon name="close-outline" role="img" class="md hydrated" aria-label="close outline"></ion-icon></div></div>`;

    if (dataDivID === 1 && $("#notes").attr("data-div_id", 1)) {
      $(".notes-col-1").prepend(noteTemplate);
    }
    if (dataDivID === 2 && $("#notes").attr("data-div_id", 2)) {
      $(".notes-col-2").prepend(noteTemplate);
    }
    if (dataDivID === 3 && $("#notes").attr("data-div_id", 3)) {
      $(".notes-col-3").prepend(noteTemplate);
    }
  } else {
    alert("Please enter some text.");
  }
});

function get_parent(closeElem) {
  $(closeElem).parent().remove();
}
