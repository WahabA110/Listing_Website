$(document).ready(function () {
  $(".reply-form").hide();

  $(".reply-btn").on("click", onReply);

  $(".cancel").on("click", () => {
    $(".reply-form").hide();
  });

})

function onReply() {

  const div = $(this).closest("div");

  const input = div.find("input");

  const toId = input.val();

  const toInput = $("form").find(".toInput")

  toInput.val(toId)


  $(".reply-form").show();

}

// $(document).ready(function () {
//   const replyBtn = $(".all-messages-container").children(".reply-btn");
//   const cancelBtn = $(".all-messages-container").children(".reply-form").children("form").children(".cancel");

//   replyBtn.on("click", () => {
//     $(".reply-form").show();
//     replyBtn.hide();
//   });

//   cancelBtn.on("click", () => {
//     $(".reply-form").hide();
//     replyBtn.show();
//   });
// });
