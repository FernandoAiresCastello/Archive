
// Set your original color palette here:
var colors = [
"#000000",
"#111111",
"#222222",
"#333333",
"#444444",
"#555555",
"#666666",
"#777777",
"#888888",
"#999999",
"#aaaaaa",
"#bbbbbb",
"#cccccc",
"#dddddd",
"#eeeeee",
"#ffffff",
"#ff8181",
"#ff0000",
"#bf3f3f",
"#7f0000",
"#551414",
"#573b3b",
"#8e5555",
"#ab7373",
"#c78f8f",
"#e3abab",
"#ff6262",
"#d5524a",
"#a5140a",
"#c07872",
"#73413c",
"#da2010",
"#a0695f",
"#401811",
"#ff3c0a",
"#f55a32",
"#d08a74",
"#621800",
"#e19b7d",
"#ebaa8c",
"#f5b99b",
"#f6c8af",
"#5f3214",
"#f5e1d2",
"#a04b05",
"#7e6e60",
"#da6e0a",
"#7f3f00",
"#bf7f3f",
"#ff7f00",
"#ffbf81",
"#cbaa89",
"#e3c7ab",
"#8f7357",
"#73573b",
"#3b2d1f",
"#b45a00",
"#c49e73",
"#ffa53c",
"#d79b0f",
"#f6bd31",
"#a6a090",
"#8c805a",
"#ffd510",
"#ac9400",
"#e6d55a",
"#ffea4a",
"#53500a",
"#ffffbf",
"#ffff00",
"#bfbf3f",
"#7f7f00",
"#414123",
"#73733b",
"#8f8f57",
"#a2a255",
"#b5b572",
"#c7c78f",
"#dadaab",
"#ededc7",
"#626200",
"#b1b10a",
"#283405",
"#c8ff41",
"#465032",
"#191e0f",
"#96dc19",
"#6aa805",
"#73c805",
"#8ebe55",
"#c7e3ab",
"#abc78f",
"#738f57",
"#9bf046",
"#3c6e14",
"#587d3e",
"#204608",
"#149605",
"#7dff73",
"#14e60a",
"#007f00",
"#3fbf3f",
"#00ff00",
"#afffaf",
"#3b573b",
"#506450",
"#578f57",
"#73ab73",
"#8fc78f",
"#a2d8a2",
"#0c5c0c",
"#0ad70a",
"#4bf05a",
"#00c514",
"#87b48e",
"#3b7349",
"#64c082",
"#507d5f",
"#1e2d23",
"#b4eeca",
"#05b450",
"#235037",
"#1c8c4e",
"#abe3c5",
"#00de6a",
"#3cfea5",
"#0f6946",
"#2deba8",
"#6affcd",
"#06c491",
"#129880",
"#123832",
"#08ded5",
"#007f7f",
"#3fbfbf",
"#00ffff",
"#bfffff",
"#7e9494",
"#3b7373",
"#64abab",
"#8fc7c7",
"#abe3e3",
"#c7f1f1",
"#055a5c",
"#e1f8fa",
"#234146",
"#55e6ff",
"#91ebff",
"#6e8287",
"#7dd7f0",
"#00bfff",
"#109cde",
"#5ac5ff",
"#699dc3",
"#007fff",
"#abc7e3",
"#8fabc7",
"#578fc7",
"#57738f",
"#3b5773",
"#326496",
"#186abd",
"#4aa4ff",
"#004a9c",
"#2378dc",
"#4b7dc8",
"#bed2f0",
"#162c52",
"#0f377d",
"#0c2148",
"#a8b9dc",
"#0f192d",
"#0052f6",
"#90b0ff",
"#d0daf8",
"#4a5aff",
"#0010bd",
"#101cda",
"#8181ff",
"#0000ff",
"#3f3fbf",
"#00007f",
"#0f0f50",
"#1f1f3b",
"#3b3b57",
"#494973",
"#57578f",
"#7676ca",
"#8f8fc7",
"#ababe3",
"#e3e3ff",
"#3c3cf5",
"#736eaa",
"#beb9fa",
"#786ef0",
"#231094",
"#6241f6",
"#b991ff",
"#d7c3fa",
"#5010b0",
"#6010d0",
"#9c41ff",
"#7f00ff",
"#ab8fc7",
"#8f57c7",
"#73578f",
"#573b73",
"#8732d2",
"#d7a5ff",
"#bd62ff",
"#5a187b",
"#410062",
"#320a46",
"#bd29ff",
"#8c14be",
"#bcafc0",
"#e673ff",
"#f8c6fc",
"#bd10c5",
"#da20e0",
"#fd81ff",
"#7f007f",
"#bf3fbf",
"#f500f5",
"#3c233c",
"#463246",
"#724072",
"#8f578f",
"#ab57ab",
"#ab73ab",
"#e3c7e3",
"#ff52ff",
"#641464",
"#ebace1",
"#a01982",
"#c78fb9",
"#ffdcf5",
"#280a1e",
"#ff50bf",
"#e1b9d2",
"#ff6ac5",
"#c80078",
"#d7a0be",
"#c35a91",
"#551937",
"#c87da0",
"#321623",
"#e61e78",
"#4b2837",
"#fc3a8c",
"#faa0b9",
"#911437",
"#98344d",
"#bd1039",
"#f8d2da",
"#ffc0cb"
];

$(document).ready(function() { 
  colors.forEach(function(item) {
    $("main").append(
      '<div style="background-color:' + item + '">' + item + "</div>"
    );
  });
  
  sortBySaturation(); // <---- Change this here according to what you need!
  
});

function sortByLightness() {
  colors.sort(function(a, b) {
    return convertColor(a).split(",")[2].split("%")[0] - convertColor(b).split(",")[2].split("%")[0];
  });
  $("main").html("");
  colors.forEach(function(item) {
    $("main").append(
      '<div style="background-color:' + item + '">' + item + "</div>"
    );
  });
}

function sortByHue() {
  colors.sort(function(a, b) {
    return convertColor(a).split("(")[1].split(",")[0] - convertColor(b).split("(")[1].split(",")[0];
  });
  $("main").html("");
  colors.forEach(function(item) {
    $("main").append(
      '<div style="background-color:' + item + '">' + item + "</div>"
    );
  });
}

function sortBySaturation() {
  colors.sort(function(a, b) {
    return convertColor(a).split(",")[1].split("%")[0] - convertColor(b).split(",")[1].split("%")[0];
  });
  $("main").html("");
  colors.forEach(function(item) {
    $("main").append(
      '<div style="background-color:' + item + '">' + item + "</div>"
    );
  });
}

function convertColor(e) {
  color = e;
  if (color == "") {
    validateColor();
    return;
  }
  color = color.toLowerCase();
  c = w3color(color);

  return c.toHslString();
}
