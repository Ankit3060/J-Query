// $("h1").css("color","red");
$("h1").addClass("big-title margin");
$("h1").text("Good-Bye");
$("button").text("Sign in");
console.log($("img").attr("src"));
$("a").attr("href","https://www.yahoo.com");
$("h1").click(function()
{
    $("h1").css("color","purple");
});

// here click function mean when we will click changes will appear
$("button").click(function()
{
    $("h1").css("color","red");
});

// here keydown mean what we press it will appear
$("input").keydown(function(event)
{
    $("h1").text(event.key);
});

// here we are using the ,ouseover command mean when house hover the changes will be applied
$("h1").on("mouseover",function()
{
    $("h1").css("color","orange");
});

// here toggle mean both (yes-no, up-down, )
$("button").on("click",function()
{
    $("h1").slideToggle().animate({opacity:0.5});
});