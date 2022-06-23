function handleLink(id) {
  if(id == "ig") {
    // window.location = "https://www.instagram.com/ryve.alns";
    alert("instagram")
  }
  else if(id == "email") alert("email");
  else if(id == "github") alert("github");
  else if(id == "profile") window.location = "../../../index.html"
  else PageNotFound();
}