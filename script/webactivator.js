let isActive = false;
let removeDelay = 80;
let appendDelay = 230;

let dump = false;
const cursor = setInterval(() => {
  ID("cursor").style.opacity = dump? 0 : 1;
  dump = !dump;
}, 500);


// NAME ANIMATION
var counter = 0, index = 1;
async function remove() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  async function clear() {
    while(ID("name").innerText != "") {
      ID("name").innerText = ID("name").innerText.slice(0, -1);
      await new Promise(resolve => setTimeout(resolve, 80));
    }
    await new Promise(resolve => setTimeout(resolve, 400))
  }
  async function append() {
    while(ID("name").innerText != myname[index]) {
      ID("name").innerText = ID("name").innerText + myname[index].charAt(counter)
      counter++;
      await new Promise(resolve => setTimeout(resolve, 150))
    }
    index = index == 1 ? 0 : 1
    if(counter == myname[0].length) counter = 0;
    await new Promise(resolve => setTimeout(resolve, index == 0 ? 500 : 2000))
  }
  while(true) {
    await clear();
    await append();
  }
}
remove()

const gbcl = ID("top-gr-bg-cl");
var gbclstop = false;
if(!__DEVMODE) setInterval(() => {
  var gbclPosLeft = gbcl.getBoundingClientRect().left;
  if(!gbclstop) {
    gbcl.style.left = (gbcl.getBoundingClientRect().left + 3)+"px";
    if(gbcl.getBoundingClientRect().left > screen.width / 2) gbclstop = true;
  } else {
    gbcl.style.left = (gbcl.getBoundingClientRect().left - 3)+"px";
    if(gbcl.getBoundingClientRect().left < 0) gbclstop = false;
  }
}, 100)

let delay = async () => new Promise(resolve => setTimeout(resolve, 2000))
const lbcl = ID("left-lg-bg-cl");
let tgl = true;
setInterval(() => {
  if(tgl) () => lbcl.style.opacity = 0.05;
  else () => lbcl.style.opacity = 0.15;
}, 4000)


// Navbar toggler
let onToggle = false;
function hideNavbar() {
  onToggle = false;
  ID("navbar-view").style.right = "-180px";
  ID("navbar-view").style.zIndex = 0;
  ID("navbar-container").style.zIndex = 1;
  const navbarclose = ID("navbar-side-onclick");
  if(navbarclose != null) navbarclose.remove();
}

ID("burger-button").onclick = () => {
  onToggle = AnimationStatus(onToggle,
    () => hideNavbar(),
    () => {
      ID("navbar-view").style.right = 0,
      ID("navbar-view").style.zIndex = 1,
      ID("navbar-container").style.zIndex = 2,
      Render(body, [Container({
        id: "navbar-side-onclick",
        position: Position.fixed,
        inset: 0,
        zIndex: "0",
        actions: {
          click: () => {
            onToggle = false;
            hideNavbar();
          }
        }
      })])
    }
  );
  isNavbarActive = !isNavbarActive;
}


const blurview = Container({
  position: Position.fixed,
  backdropFilter: Blur(2),
  inset: 0,
  opacity: "0",
  transition: ".7s",
  zIndex: "-1",
})

Render(body, [blurview])

const profpic = ID("profile-picture");
profpic.style.transition = ".7s"

profpic.onmouseover = async () => {
  blurview.style.zIndex = "0";
  blurview.style.opacity = "1";
  ID("profile-name").style.transform = "scale(0.8)";
  ID("profile-bio").style.transform = "scale(0.8)";
  profpic.style.zIndex = "1";
  profpic.style.width = "200px";
  profpic.style.height = "200px";
}

profpic.onmouseout = () => {
  ID("profile-name").style.transform = "scale(1)";
  ID("profile-bio").style.transform = "scale(1)";
  blurview.style.opacity = "0";
  blurview.style.zIndex = "-1";
  profpic.style.zIndex = "0";
  profpic.style.width = "130px";
  profpic.style.height = "130px";
}

document.documentElement.style.setProperty('--animate-duration', '2s');
const imageBox = document.querySelectorAll(".box-skill");
const delayPerEachView = 150;
if(screen.height < 900) {
  document.addEventListener("scroll", async () => {
    const clientHeight = document.documentElement.clientHeight;
    ID("skill-header").classList.add("animate__animated", "animate__bounceIn");
    ID("skill-header").style.opacity = 1;
    await new Promise(resolve => setTimeout(resolve, delayPerEachView));
    for(var i=0; i<imageBox.length; i++) {
      const imgPosY = imageBox[i].getBoundingClientRect().y;
      const imgPosHeight = imageBox[i].getBoundingClientRect().height;

      if(clientHeight > imgPosY + (imgPosHeight * 2/3)) {
        // imageBox[i].style.transition = "1s";
        imageBox[i].classList.add("animate__animated", "animate__flipInX");
        imageBox[i].style.opacity = 1;
      }
      await new Promise(resolve => setTimeout(resolve, delayPerEachView))
    }
  })
} else { 
  async function run() {
    await new Promise(resolve => setTimeout(resolve, 100))
    for(var i=0; i<imageBox.length; i++) {  
      imageBox[i].classList.add("animate__animated", "animate__flipInX");
      imageBox[i].style.opacity = 1;
      await new Promise(resolve => setTimeout(resolve, delayPerEachView))
    }
  }
  run()
}

ID("about-me-button").onclick = () => {
  ontoggle = false;
  scrollToElement("profile-view", 0);
  hideNavbar();
} 
ID("skill-button").onclick = () => {
  ontoggle = false;
  scrollToElement("skill-view", 70);
  hideNavbar();
}
ID("school-button").onclick = () => {
  ontoggle = false;
  scrollToElement("school-view", 160);
  hideNavbar();
}
async function HandleAlertHide() {
  document.getElementById("alert-view").style.opacity = 0;
  await new Promise(resolve => setTimeout(resolve, 300))
  document.getElementById("alert-view").remove()
}
ID("myprojects-button").onclick = async () => {
  ontoggle = false;
  scrollToElement("projects-view", 50);
  hideNavbar();
}
ID("contact-button").onclick = () => {
  ontoggle = false;
  hideNavbar();
  window.location = "pages/contact/public";
}

ID("albums-button").onclick = () => {
  ontoggle = false;
  hideNavbar();
  
  const HandleInput = (ID, placeholder)  => {
    const box = TextField({
      id: ID,
      width: "80%", 
      textHint: placeholder, 
      padding: 5, 
      backgroundColor: "transparent",
      color: Colors.lightgray,
      fontFamily: "Poppins",
      borderRadius: "5px", 
      border: "1px solid grey",
      outline: "none",
      transition: ".3s",
      class: "input",
    });
    return box;
  }

  const button_submit = Button({
    context: "Submit",
    borderColor: Colors.grey,
    color: Colors.grey,
    id: "submit-button",
    transition: ".1s",
  });

  const alertbox = Container({
    width: "80%",
    maxWidth: 300,
    backdropFilter: Blur(20),
    position: Position.fixed,
    backgroundColor: Colors.rgba(0, 0, 0, 0.1),
    boxShadow: `0px 0px 3px ${Colors.rgba(255, 255, 255, 1)}`,
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Poppins",
    borderRadius: "5px",
    padding: 15,
    transition: ".3s",
    opacity: "0",
    children: [
      Container({
        child: Text("Verify Who are you", {textAlign: TextAlign.center, color: Colors.white}),
      }),
      Container({
        display: Display.flex,
        flexDirection: Direction.column,
        justifyContent: JustifyContent.spaceAround,
        alignItems: AlignItems.center,
        height: 100,
        children: [
          HandleInput("username-input", "Name"),
          HandleInput("password-input", "Password"),
        ]
      }),
      Container({
        display: Display.flex,
        justifyContent: JustifyContent.center,
        alignItems: AlignItems.center,
        height: "auto",
        child: button_submit,
        transition: ".5s",
      })
    ]
  })

  button_submit.onclick = () => {
    const usInput = ID("username-input").value;
    const pwInput = ID("password-input").value;

    if(usInput && pwInput) {
      if(usInput == "qrnd" && pwInput == "180507") {
        Alert("Login success");
      } else {
        Alert("Invalid!");
      }
    }
    else Alert("Please fill the input first");
  }

  function handleSubmitOnHover() {
    button_submit.onmouseover = () => {
      button_submit.style.color = Colors.white;
      button_submit.style.border = " 1px solid white";
      button_submit.style.boxShadow = "0px 0px 5px white";
    }
    button_submit.onmouseout = () => {
      button_submit.style.color = Colors.gray;
      button_submit.style.border = " 1px solid gray";
      button_submit.style.boxShadow = "none";
    }
  } 
  handleSubmitOnHover();

  const verify = async () => {
    const _Back = Container({
      position: Position.fixed,
      inset: 0,
      backgroundColor: Colors.rgba(0, 0, 0, 0.6),
      transition: ".3s",
      opacity: "0",
    });

    _Back.onclick = async () => {
      _Back.style.opacity = "0";
      alertbox.style.opacity = "0";
      await new Promise(resolve => setTimeout(resolve, 300));
      _Back.remove();
      alertbox.remove();
    }

    Render(body, [_Back, alertbox]);

    await new Promise(resolve => setTimeout(resolve, 0));
    _Back.style.opacity = "1";
    alertbox.style.opacity = "1";
  };
  verify();
}

function scrollToElement(element ,offset) {
  var elementPos = document.getElementById(element).getBoundingClientRect().top;
  var offsetPos = elementPos + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPos,
    behavior: "smooth"
  })
} 