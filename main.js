$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#tarefa").val();
    const novoItem = $("<li></li>");

    novoItem.text(novaTarefa);
    novoItem.on("click", function () {
      if ($(this).css("text-decoration-line") === "line-through") {
        $(this).css("text-decoration-line", "none");
      } else {
        $(this).css("text-decoration-line", "line-through");
      }
    });

    $(".lista-tarefas").append(novoItem);

    $("#tarefa").val("");
  });
});
