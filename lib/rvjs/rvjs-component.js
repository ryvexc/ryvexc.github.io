class Components {
  static Create(object, component, styles) {
    this.object = document.createElement(component);
    this.HtmlObjects = this.object;
    this.HtmlObjects.style.margin = 0;
    if(styles != null) for(var i=0; i<Object.keys(styles).length; i++) {
      if(Object.keys(styles)[i] == "children") {
        for(var v=0; v<styles.children.length; v++) {
          this.HtmlObjects.appendChild(styles.children[v])
        }
      }
      
      else if(Object.keys(styles)[i] == "child") {
        this.HtmlObjects.appendChild(styles.child);  
      }
      
      else if(Object.keys(styles)[i] == "decoration") {
        for(var i=0; i<Object.keys(styles.decoration).length; i++) {
          var key = Object.keys(styles.decoration)[i];
          var keyval = Object.values(styles.decoration)[i];
          this.HtmlObjects.style[key] = `${keyval}`;
        }        
      }
      else if(Object.keys(styles)[i] == "context") {
        this.HtmlObjects.innerText = styles.context;
      }
      else if(Object.keys(styles)[i] == "id") {
        this.HtmlObjects.setAttribute("id", styles.id);
      }
      else if(Object.keys(styles)[i] == "actions") {
        Object.keys(styles.actions).forEach((e, v) => {
          this.HtmlObjects.addEventListener(e, Object.values(styles.actions)[v]);
        })
      }
      else if(Object.keys(styles)[i] == "class") {
        this.HtmlObjects.setAttribute("class", styles.class);
      }
      else if(Object.keys(styles)[i] == "main") continue;
      else {
        var key = Object.keys(styles)[i];
        var keyval = Object.values(styles)[i];
        this.HtmlObjects.style[key] = `${keyval}`;
      }
    } 
    
    for(var i=0; i<Object.keys(object).length; i++) {
      if(Object.keys(object)[i] == "children") {
        for(var v=0; v<object.children.length; v++) {
          this.HtmlObjects.appendChild(object.children[v])
        }
      }
      
      else if(Object.keys(object)[i] == "child") {
        this.HtmlObjects.appendChild(object.child);  
      }
      
      else if(Object.keys(object)[i] == "decoration") {
        for(var i=0; i<Object.keys(object.decoration).length; i++) {
          var key = Object.keys(object.decoration)[i];
          var keyval = Object.values(object.decoration)[i];
          this.HtmlObjects.style[key] = `${keyval}`;
        }        
      }
      else if(Object.keys(object)[i] == "context") {
        this.HtmlObjects.innerText = object.context;
      }
      else if(Object.keys(object)[i] == "id") {
        this.HtmlObjects.setAttribute("id", object.id);
      }
      else if(Object.keys(object)[i] == "actions") {
        Object.keys(object.actions).forEach((e, v) => {
          this.HtmlObjects.addEventListener(e, Object.values(object.actions)[v]);
        })
      }
      else if(Object.keys(object)[i] == "class") {
        this.HtmlObjects.setAttribute("class", object.class);
      }
      
      /* STYLING */
      else if(Object.keys(object)[i] == "size") {
        this.HtmlObjects.style.width = Object.values(object.size)[0];
        this.HtmlObjects.style.height = Object.values(object.size)[1];
      }
      else {
        var key = Object.keys(object)[i];
        var keyval = Object.values(object)[i];
        this.HtmlObjects.style[key] = `${keyval}${typeof keyval == "number"? "px" : ""}`;
      }
    } 
    
    return this.HtmlObjects
  }
}


/* MATERIAL FOR STYLING */
const Cursor = {
  pointer: "pointer",
}

const Colors = {  
  "aliceblue": "#f0f8ff",
  "antiquewhite": "#faebd7",
  "aqua": "#00ffff",
  "aquamarine": "#7fffd4",
  "azure": "#f0ffff",
  "beige": "#f5f5dc",
  "bisque": "#ffe4c4",
  "black": "#000000",
  "blanchedalmond": "#ffebcd",
  "blue": "#0000ff",
  "blueviolet": "#8a2be2",
  "brown": "#a52a2a",
  "burlywood": "#deb887",
  "cadetblue": "#5f9ea0",
  "chartreuse": "#7fff00",
  "chocolate": "#d2691e",
  "coral": "#ff7f50",
  "cornflowerblue": "#6495ed",
  "cornsilk": "#fff8dc",
  "crimson": "#dc143c",
  "cyan": "#00ffff",
  "darkblue": "#00008b",
  "darkcyan": "#008b8b",
  "darkgoldenrod": "#b8860b",
  "darkgray": "#a9a9a9",
  "darkgreen": "#006400",
  "darkgrey": "#a9a9a9",
  "darkkhaki": "#bdb76b",
  "darkmagenta": "#8b008b",
  "darkolivegreen": "#556b2f",
  "darkorange": "#ff8c00",
  "darkorchid": "#9932cc",
  "darkred": "#8b0000",
  "darksalmon": "#e9967a",
  "darkseagreen": "#8fbc8f",
  "darkslateblue": "#483d8b",
  "darkslategray": "#2f4f4f",
  "darkslategrey": "#2f4f4f",
  "darkturquoise": "#00ced1",
  "darkviolet": "#9400d3",
  "deeppink": "#ff1493",
  "deepskyblue": "#00bfff",
  "dimgray": "#696969",
  "dimgrey": "#696969",
  "dodgerblue": "#1e90ff",
  "firebrick": "#b22222",
  "floralwhite": "#fffaf0",
  "forestgreen": "#228b22",
  "fuchsia": "#ff00ff",
  "gainsboro": "#dcdcdc",
  "ghostwhite": "#f8f8ff",
  "gold": "#ffd700",
  "goldenrod": "#daa520",
  "gray": "#808080",
  "green": "#008000",
  "greenyellow": "#adff2f",
  "grey": "#808080",
  "honeydew": "#f0fff0",
  "hotpink": "#ff69b4",
  "indianred": "#cd5c5c",
  "indigo": "#4b0082",
  "ivory": "#fffff0",
  "khaki": "#f0e68c",
  "lavender": "#e6e6fa",
  "lavenderblush": "#fff0f5",
  "lawngreen": "#7cfc00",
  "lemonchiffon": "#fffacd",
  "lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgray": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightgrey": "#d3d3d3",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightslategrey": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370db",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#db7093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "slategrey": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "transparent": "#00000000",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32",
  rgb: function (r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
  },
  rgba: function (r, g, b, a) {
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }
}

const Direction = {
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom",
  top: "top",
  column: "column",
}

const __special_value = {
  initial: "initial",
  inherit: "inherit",
}

const Position = {
  static: "static",
  absolute: "absolute",
  fixed: "fixed",
  relative: "relative",
  sticky: "sticky",
  ...__special_value,
}

const Display = {
  inline: "inline",
  block: "block",
  contents: "contents",
  flex: "flex",
  grid: "grid",
  inlineBlock: "inline-block",
  inlineFlex: "inline-flex",
  inlineTable: "inline-table",
  listItem: "list-item",
  runIn: "run-in",
  table: "table",
  tableCaption: "table-caption",
  tableColumnGroup: "table-column-group",
  tableHeaderGroup: "table-header-group",
  tableFooterGroup: "table-footer-group",
  tableRowGroup: "table-row-group",
  tableCell: "table-cell",
  tableColumn: "table-column",
  tableRow: "table-row",
  none: "none",
  ...__special_value,
}

const TextAlign = {
  ...Direction,
  justify: "justify",
  ...__special_value,
}

const JustifyContent = {
  flexStart: "flex-start",
  flexEnd: "flex-end",
  center: "center",
  spaceBetween: "space-between",
  spaceAround: "space-around",
  spaceEvenly: "space-evenly",
  ...__special_value
}

const AlignItems = {
  stretch: "stretch",
  center: "center",
  flexStart: "flex-start",
  flexEnd: "flex-end",
  baseline: "baseline",
  ...__special_value
}

class Padding {
  static insertAll(...values) {
    // console.log(`${values[0]}px ${values[1]==undefined?"":`${values[1]}px`} ${values[2]==undefined?"":`${values[2]}px`} ${values[3]==undefined?"":`${values[3]}px`}`)
    return `${values[0]}px ${values[1]==undefined?"":`${values[1]}px`} ${values[2]==undefined?"":`${values[2]}px`} ${values[3]==undefined?"":`${values[3]}px`}`
  }
}

class ItemSize {
  static insertAll(...values) {
    console.log(`${values[0]}px ${values[1]==undefined?"":`${values[1]}px`} ${values[2]==undefined?"":`${values[2]}px`} ${values[3]==undefined?"":`${values[3]}px`}`)
    return `${values[0]}px ${values[1]==undefined?"":`${values[1]}px`} ${values[2]==undefined?"":`${values[2]}px`} ${values[3]==undefined?"":`${values[3]}px`}`
  }
}

/* API */
function AnimationControl(id, functionHandler) {
  functionHandler(document.getElementById(id));
}
function AnimationStatus(status, trueHandler, falseHandler) {
  if(status) trueHandler()
  else falseHandler()
  return !status
}

function Text(context = String ,object) {
  var styles = {
    ...object,
  }
  if(Object.keys(styles).includes("fontWeight")) 
  styles.fontWeight = `${styles.fontWeight}`
  const text = Components.Create(styles, "p");
  text.innerText = context;
  return text;
}

function Button(object) {
  const style = {
    justifyContent: JustifyContent.center,
    margin: 0,
    border: "0.01em solid black",
    cursor: Cursor.pointer,
    display: "inline-block",
    padding: "2px 6px",
    alignItems: AlignItems.center,
    fontSize: "14px",
  }
  const button = Components.Create(object, "p", style);
  return button;
}

function Blur(pixel) {
  return `blur(${pixel}px)`
}

function Center(object) {
  const styles = {
    display: Display.flex,
    flexDirection: Direction.column,
    justifyContent: JustifyContent.center,
    alignItems: AlignItems.center,
  }
  return Components.Create(object, "div", styles);
  
}

function Container(object) {
  return Components.Create(object, "div");
}

function ID(id) {
  return document.getElementById(id);
}

function ItemWrapper(objects) {
  return Object.values(objects)
}

class Image {
  constructor(object) {
    const img = Components.Create(object, "img");
    if(Object.keys(object).includes("image")) {
      img.src = object.image;
    }
    else {
      console.error("no source or url!");
    }
    return img;
  }
  
  static Asset(source, object) {
    const img = Components.Create(object, "img");
    img.src = source;
    return img;
  }
}

function TextField(object) {
  const input = Components.Create(object, "input");
  if(Object.keys(object).includes("textHint")) input.placeholder = object.textHint;
  else if(Object.keys(object).includes("inputType")) input.type = object.type;
  return input;
}

function Render(pointer, object) {
  if(typeof pointer == "string") for(var i=0; i<object.length; i++) {
    document.getElementById(pointer).appendChild(object[i]);
  } else {
    for(var i=0; i<object.length; i++) {
      pointer.appendChild(object[i]);
    }
  }
}

function Scale(scale, scaleY) {
  if(scaleY == null) return `scale(${scale})`;
  else return `scale(${scale}, ${scaleY})`;
}

function Scaffold(object) {
  return Components.Create(object, "div");
}

function Size(width, height) {
  return [`${width}px`, `${height}px`];
}

function MaterialApp(objects) {
  for(var i=0; i<Object.keys(objects).length; i++) {
    if(Object.keys(objects)[i] == "title")
    document.title = objects.title;
    else if(Object.keys(objects)[i] == "view") {
      document.body.appendChild(objects.view);
    }
    else {
      return Object.values(objects)[i];
    }
  }
}