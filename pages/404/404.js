async function Alert(message) {
  const Alert = Container({
    class: "alert-view",
    id: "alert-view",
    child: Container({
      class: "alert-box",
      children: [
        Text(message, {
          margin: "10px 0",
          class: "alert-message",
        }),
        Container({
          class: "alert-button-container",
          child: Text("OK", {margin: "5px 0px", class: "alert-button", id: "alert-button"}),
        })
      ]
    }),
  });

  Render(ID("alert-dom"), [Alert]);
  document.getElementById("alert-button").onclick = () => {
    HandleAlertHide()
  }

  await new Promise(resolve => setTimeout(resolve, 0))
  document.getElementById("alert-view").style.opacity = "1";
}