//1.

var headingTag = $("h1");

// headingTag.css("color", "red");

//Grabing multiple css

var newCSS = {
  color: "white",
  background: "green",
  border: "20px solid red",
};

// headingTag.css(newCSS);

//Grabing all list

var listItems = $("li");

listItems.eq(0).css("color", "orange");
console.log(listItems);

// .html(),.text()

headingTag.addClass("turnRed");
headingTag.removeClass("turnRed");

//Keypress

$("input")
  .eq(0)
  .keypress(function () {
    $("h3").toggleClass("turnBlue");
  });

//on()

$("h1").on("dblclick", function () {
  $(this).toggleClass("turnBlue");
});

//Fadeout // slideUp
$("input")
  .eq(1)
  .on("click", function () {
    $(".container").fadeOut(3000);
  });
