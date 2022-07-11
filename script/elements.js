const body = document.body;
body.style.margin = 0;
body.style.height = "100vh";
body.style.width = "100vw";
body.style.overflowX = "hidden";
body.style.backgroundColor = "#202020";

const myname = ["Arif", "Ryve"];
let isNavbarActive = false;

const background = Container({
  id: "background",
  children: [
    Container({
      class: "on-off-animation",
      size: Size(110, 110),
      borderRadius: Padding.insertAll(72, 25, 67, 12),
      backgroundColor: Colors.orange,
      opacity: "0.3",
      position: Position.absolute,
      top: "47%",
      left: "40%",
      transition: "3.5s",
    }),
    Container({
      id: "left-lg-bg-cl",
      size: Size(150, 130),
      borderRadius: Padding.insertAll(30, 100, 67, 12),
      backgroundColor: Colors.limegreen,
      opacity: "0.15",
      position: Position.absolute,
      top: "50%",
      transform: "translateX(-50%)",
      transition: "3.5s"
    }),
    Container({
      id: "top-gr-bg-cl",
      size: Size(150, 130),
      borderRadius: Padding.insertAll(30, 100, 67, 12),
      backgroundColor: Colors.limegreen,
      opacity: "0.3",
      position: Position.absolute,
    }),
    Container({
      class: "on-off-animation",
      size: Size(120, 120),
      borderRadius: Padding.insertAll(30, 100, 67, 12),
      backgroundColor: Colors.red,
      opacity: "0.3",
      right: -10,
      position: Position.absolute,
    }),
    Container({
      size: Size(90, 90),
      borderRadius: Padding.insertAll(72, 25, 67, 12),
      backgroundColor: Colors.darkblue,
      opacity: "0.2",
      position: Position.absolute,
      bottom: 0,
      right: 0,
    }),
    Container({
      position: Position.absolute,
      backdropFilter: Blur(80),
      top: "0px",
      left: "0px",
      width: "100vw",
      height: "100vh",
    })    
  ],
  position: Position.fixed,
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  zIndex: "-1",
  height: "100vh",
});

const ProfileView = Container({
  id: "profile-view",
  children: [
    Container({
      child: Image.Asset("https://avatars.githubusercontent.com/ryvexc", {
        id: "profile-picture",
        opacity: "0.95",
        // size: Size(130, 130),
        width: 130,
        height: 130,
        borderRadius: "100%",
        cursor: "pointer",
      }),
      display: Display.flex,
      justifyContent: JustifyContent.center,
    }),
    Container({
      id: "profile-name",
      transition: ".7s",
      display: Display.flex,
      alignItems: AlignItems.center,
      children: [
        Text(`Halo, saya `, {}),
        Text("Arif", {
          id: "name",
          marginLeft: "7px"
        }),
        Text("", {
          id: "cursor",
          transition: ".5s",
          margin: "3px 3px 0px 5px",
          width: "3px",
          height: "28px",
          backgroundColor: Colors.white,
        }),
        Text("." ,{
          color: Colors.white,
          fontWeight: "600",
          fontSize: 24,
          marginTop: 5,
        })
      ],
      fontFamily: "Poppins",
      color: Colors.white,
      fontWeight: "600",
      fontSize: 24,
      marginTop: 5,
    }),
    Container({
      id: "profile-bio",
      transition: ".7s",
      child: Text(
        "Saya adalah seorang pelajar kelas X di SMK PGRI 3, saya juga mempelajari bahasa pemrograman untuk mengisi waktu luang.", {
          fontFamily: "Manrope",
          color: Colors.white,
          fontWeight: "100",
          fontSize: 13,
          padding: Padding.insertAll(0, 25, 0),
          textAlign: TextAlign.center,
          marginTop: 5,
        }
      )
    })
  ],
  padding: "100px 0px 30px",
  display: Display.flex,
  flexDirection: Direction.column,
  alignItems: AlignItems.center,
  justifyContent: JustifyContent.center,
});

function generateSkillBox(id, imageSrc, title, message, link) {
  const _button = Button({
    class: "button-hover",
    context: "Details",
    borderRadius: "7px",
    border: "none",
  });
  const _box = Container({
    id: id,
    class: "box-skill",
    opacity: "0",
    transform: "scale(0.98)",
    margin: 5,
    children: [
      Image.Asset(imageSrc, {
        size: Size(70, 70),
        paddingTop: 15,
        paddingBottom: 2,
      }),
      Text(title, {cursor: "default"}),
      Text(message, {
        fontFamily: "Montserrat",
        fontWeight: "200",
        fontSize: 12,
        padding: 10,
        cursor: "default"
      }),
      _button,
    ],
  });

  _button.onclick = () => window.location = link;
  return _box;
}

const SkillView = Container({
  id: "skill-view",
  marginTop: 10,
  width: "100vw",
  fontFamily: "Poppins",
  display: Display.flex,
  flexDirection: Direction.column,
  justifyContent: JustifyContent.center,
  alignItems: AlignItems.center,
  color: Colors.white,
  children: [
    Container({
      id: "skill-header",
      transition: "1s",
      opacity: "0",
      children: [
        Text("Skill", {
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: "1px",
        }),
        Text("", {
          width: "130%",
          opacity: "0.4",
          height: "1px",
          borderRadius: "10px",
          backgroundColor: Colors.red
        }),
        Text("I'm a beginner", {
          paddingTop: 5,
          width: 200,
          textAlign: TextAlign.center,
          fontWeight: 200,
          fontSize: 14,
        })
      ],
      paddingBottom: 20,
      width: "100px",
      display: Display.flex,
      flexDirection: Direction.column,
      justifyContent: JustifyContent.center,
      alignItems: AlignItems.center,
    }),
    Container({
      id: "skill-view",
      class: "skill-slider",
      width: "100%",
      children: [
        Container({
          display: Display.flex,
          flexWrap: "wrap",
          alignContent: "flex-start",
          justifyContent: JustifyContent.center,
          children: [
            generateSkillBox("skill-1", "images/java.png", "Java", 
              "Java is a high-level programming language, It is a general-purpose programming language intended to let programmers write once, run anywhere. Commonly used as the server-side language",
              "https://www.wikipedia.org/wiki/Java"
            ),
            generateSkillBox("skill-2", "images/javascript.jpg", "JavaScript",
              "JavaScript is a text-based programming language, used both on the client-side and server-side that allows you to make web pages interactive",
              "https://www.wikipedia.org/wiki/JavaScript"
            ),
            generateSkillBox("skill-3", "images/C++.png", "C++",
              "C++ is a general-purpose programming language as an extension od the 'C Programming Language', or 'C With Classes', Modern C++ now has object-oriented, generic, and functional feautures in addition to facilities for low-memory manipulation",
              "https://www.wikipedia.org/wiki/C++"
            ),
            generateSkillBox("skill-4", "images/python.png", "Python", 
              "Python is a general-purpose programming language, commonly used for developing websites and software, task automation, data analysis, and data visualization",
              "https://www.wikipedia.org/wiki/Python_(programming_language)"
            ),
            generateSkillBox("skill-5", "images/dart.png", "Dart", 
              "Dart is a programming language that designed for client development, such as for web and mobile apps, It is developed by Google and can also be used to build server and desktop application",
              "https://www.wikipedia.org/wiki/Dart_(programming_language)"
            ),
            generateSkillBox("skill-6", "images/html5.png", "HTML", 
              "The HyperText Markup Langugage, or HTML is the standart markup language for documents designed to be displayed in a web browser",
              "https://www.wikipedia.org/wiki/Html"
            ),
          ],
        }),
      ],
    })
  ],
  marginBottom: 60,
});

function generateImageBox(imgSrc, title, message, link) {
  const detail_button = Button({
    class: "button-hover",
    context: "More",
    border: "none",
    marginTop: 15,
    id: "more-button-sch",
  })

  detail_button.onclick = () => {
    if(link != null) window.location = link;
    else Alert("There's no active site."); 
  }

  return Container({
    id: "image-box",
    display: Display.inlineBlock,
    justifyContent: JustifyContent.center,
    alignItems: AlignItems.center,
    textAlign: TextAlign.center,
    children: [
      Container({
        child: Image.Asset(imgSrc, {
          class: "school-image",
          borderRadius: "8px",
          width: "100%",
          height: "auto",
          transition: ".5s",
        }),
      }),
      Container({
        children: [
          Text(title, {
            fontSize: 18,
            paddingTop: 8,
          }),
          Text(message, {
            padding: Padding.insertAll(0, 20),
            fontFamily: "Montserrat",
            fontSize: 12,
          }),
          detail_button,
        ],
      })
    ],
    padding: 20,
    paddingBottom: 10,
    marginBottom: 20,
    boxShadow: `0px 0px 20px ${Colors.rgba(0, 0, 0, 0.2)}`, 
    maxWidth: "400px",
    width: "80%",
    borderRadius: "7px",
  });
}


const ProjectsView = Container({
  class: "gradient-projects-background",
  id: "projects-view",
  width: "100%",
  fontFamily: "Poppins",
  color: "white",
  paddingBottom: "45px",
  children: [
    Container({
      children: [
        Text("Projects", {
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: "1px",
        }),
        Text("", {
          width: "130%",
          opacity: "0.4",
          height: "3px",
          borderRadius: "10px",
          backgroundColor: Colors.magenta
        }),
        Text("Beberapa projects yang sudah saya push di github", {
          paddingTop: 5,
          width: "400px",
          textAlign: TextAlign.center,
          fontWeight: 200,
          fontSize: 14,
        }),
      ],
      opacity: "0",
      class: "on-screen-check",
      paddingTop: 40,
      paddingBottom: 25,
      width: "100px",
      display: Display.flex,
      flexDirection: Direction.column,
      justifyContent: JustifyContent.center,
      alignItems: AlignItems.center,
    }),
    Container({
      id: "project-box",
      width: "80%",
      display: Display.flex,
      justifyContent: JustifyContent.center,
      flexWrap: "wrap",
      child: Text("Loading...", {id:"loader"}),
    }),
  ]
});

function generateProjectsBox(repo_name, git_url, index_url, desc, main_language, pushed_at) {
  console.log(`
    name: ${repo_name}
    git: ${git_url}
    page: ${index_url}
    desc: ${desc}
    main_lang: ${main_language}
    pushed_at: ${pushed_at}
  `)

  function __generateButton(link, messageIfNotNull) {
    const __textAsButton = Text(link != null ? messageIfNotNull : "", {
      class: "button-hover",
      fontSize: 13,
    });

    __textAsButton.onclick = () => window.location = link;

    return __textAsButton;
  }

  const box = Container({
    class: "on-screen-check",
    width: "100%",
    maxWidth: "400px",
    padding: "15px",
    backgroundColor: "#202020a7",
    backdropFilter: Blur(20),
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
    margin: "10px",
    opacity: "0",
    children: [
      Container({
        children: [
          Text(repo_name, {
            fontSize: "18px",
            letterSpacing: "1px",
          }),
          Text(main_language, {
            fontSize: "16px",
            letterSpacing: "1px",
            fontWeight: "300",
          }),
        ],
        display: Display.flex,
        alignItes: AlignItems.center,
        justifyContent: JustifyContent.spaceBetween,
      }),
      Text(git_url.substring(6), {
        fontSize: "12px",
        fontFamily: "Montserrat",
        fontWeight: "200",
      }),
      Text(desc != null ? desc : "I forget to put description on it :(", {
        marginTop: "12px",
        fontWeight: "300",
        fontSize: "14px",
      }),
      Text(pushed_at.split("T")[0], {
        marginTop: "12px",
      }),
      Container({
        children: [
          __generateButton("https://"+git_url.substring(6), "See on github"),
          __generateButton("https://"+index_url.substring(6), "VIew page"),
        ],
        display: Display.flex,
        justifyContent: JustifyContent.spaceBetween,
        marginTop: "12px",
      })
    ]
  });

  return box;
}

fetch("https://api.github.com/users/ryvexc/repos")
.then((response) => response.json())
.then((repos) => {
  document.getElementById("loader").remove();
  console.log(repos);

  for(var i=0; i<repos.length; i++) {
    document.getElementById("project-box").appendChild(
      generateProjectsBox(repos[i].name, repos[i].git_url, repos[i].html_url, repos[i].description, repos[i].language, repos[i].pushed_at)
    );
  }

  var element = document.querySelectorAll(".on-screen-check");
  window.addEventListener('scroll', () => {  
    const clientHeight = document.documentElement.clientHeight;

    for(var i=0; i<element.length; i++) {
      const elPosY = element[i].getBoundingClientRect().y;
      const elHeight = element[i].getBoundingClientRect().height;

      if(clientHeight > elPosY + (elHeight * 2/3)) {
        element[i].classList.add("animate__animated", "animate__fadeInDown")
      }
    }

    // element.classList.add('animate__animated', 'animate__fadeInDown');
  })
})
.catch(error => console.log(error));

const SchoolView = Container({
  paddingTop: "40px",
  id: "scholl-view",
  width: "100vw",
  fontFamily: "Poppins",
  display: Display.flex,
  flexDirection: Direction.column,
  justifyContent: JustifyContent.center,
  alignItems: AlignItems.center,
  color: Colors.white,
  children: [
    Container({
      children: [
        Text("School", {
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: "1px",
        }),
        Text("", {
          width: "130%",
          opacity: "0.4",
          height: "3px",
          borderRadius: "10px",
          backgroundColor: Colors.green
        }),
        Text("Berikut Tempat sekolah saya", {
          paddingTop: 5,
          width: 200,
          textAlign: TextAlign.center,
          fontWeight: 200,
          fontSize: 14,
        }),
      ],
      paddingBottom: 25,
      width: "100px",
      display: Display.flex,
      flexDirection: Direction.column,
      justifyContent: JustifyContent.center,
      alignItems: AlignItems.center,
    }),
    Container({
      id: "school-view",
      display: Display.flex,
      justifyContent: JustifyContent.center,
      flexWrap: "wrap",
      alignContent: "flex-start",
      width: "100vw",
      children: [
        generateImageBox("images/SD.jpg", "SDN Lowokwaru 3", "Saya telah menyelesaikan pendidikan ini pada 2019"),
        generateImageBox("images/SMP.jpg", "SMP Kartika IV-8", "Saya telah lulus dan menyelesaikan pendidikan ini pada 16 Juni, 2022", "http://smpkartika48-mlg.sch.id"),
        generateImageBox("images/SMK.jpg", "SMK PGRI 3", "Saat ini saya sedang menduduki bangku SMK", "http://smkpgri3-malang.sch.id/websekolah/"),
      ]
    })
  ]
});

const navbarWidth = 27, navbarheight = 3;
const NavigationBar = Container({
  children: [
    Container({
      children: [
        Text("", {
          width: navbarWidth,
          height: navbarheight,
          backgroundColor: Colors.white,
          margin: 5,
          borderRadius: "5px",
        }),
        Text("", {
          width: navbarWidth,
          height: navbarheight,
          backgroundColor: Colors.white,
          borderRadius: "5px",
          margin: 5,
        }),
        Text("", {
          width: navbarWidth,
          height: navbarheight,
          backgroundColor: Colors.white,
          margin: 5,
          borderRadius: "5px",
        }),
      ],
      cursor: "pointer",
      marginRight: 7,
      display: Display.inlineBlock,
      id: "burger-button",
    })
  ],  
  id: "navbar-container",
  width: "100vw",
  height: "50px",
  zIndex: 999,
  position: Position.fixed,
  backdropFilter: Blur(7),
  backgroundColor: Colors.rgba(36, 36, 36, 0.1),
  boxShadow: `0 0 20px ${Colors.rgba(0, 0, 0, 0.2)}`,
  display: Display.flex,
  justifyContent: JustifyContent.flexEnd,
  alignItems: AlignItems.center,
  top: 0,
});

const createlist = (title, id, active_status, isPrivate) => Container({
  cursor: "pointer",
  class: "list-onhover",
  fontFamily: "Poppins",
  display: Display.flex,
  alignItems: AlignItems.center,
  marginBottom: 10,
  id: id != null ? id : null,
  children: [
    Text("", {
      width: "5px",
      height: "35px",
      backgroundColor: active_status ? Colors.limegreen : isPrivate ? Colors.purple : Colors.red,
      opacity: "0.7",
      marginLeft: 10,
      borderRadius: 10,
    }),
    Text(title, {
      class: "item-list",
    })
  ]
})

const NavbarView = Container({
  id: "navbar-view",
  child: Container({
    id: "navbar-list",
    children: [
      createlist('About me', "about-me-button", true, false),
      createlist("Skill", "skill-button", true, false),
      createlist("My projects", "myprojects-button", true, false),
      createlist("School", "school-button", true, false),
      createlist("Contact", "contact-button", true, false),
      createlist("Albums", "albums-button", false, true)
    ],
    marginTop: 50,
  }),
  transition: ".7s",
  width: "180px",
  height: "100vh",
  backgroundColor: Colors.rgba(0, 0, 0, 0.4),
  backdropFilter: Blur(40),
  // boxShadow: "0 0 20px black",
  top: 0,
  right: -180,
  position: Position.fixed,
})

const FooterView = Center({
  id: "footer",
  children: [
    Text("Made By Ryve.", {
      fontFamily: "Poppins",
      paddingTop: 10,
      paddingBottom: 10,
      color: Colors.white,
    })
  ],
  backdropFilter: Blur(20),
  boxShadow: `0 0 10px ${Colors.rgba(0, 0, 0, 0.3)}`
});
