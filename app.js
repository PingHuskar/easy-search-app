var log = []
$("img").hide()
openNav()
function main() {
    function opens(web) {
        if (/.*clicked$/.test(document.getElementById(web).getAttribute('class'))) {
            open(document.getElementById(web).getAttribute('url')+document.getElementById('search').value);
        }
    }
    var ids = ["udemy","udemy_mycourse","google","github_all","github_myrepo","youtube",
    "iqiyi","imdb","applemusic","hareshi","stackoverflow","th.wikipedia","forms","sheets",
    "slides","datastudio","drive","steam","alternativeto","th1lib","goodreads"]
    ids.map(opens)
}
// const element = document.querySelector('img');
// element.style.opacity = "0.5";
// element.style.filter = 'alpha(opacity=90)';
$("img").mouseenter(function() {
    $("#log").html(this.getAttribute('id')).css('display','block')
})
$("img").mouseleave(function() {
    $("#log").html('...').css({
        'display':'block'
    })
})
$("img").click(function(){
    console.log(this)
    $("#log").html(this.getAttribute('id') + " clicked !")
    $(this).toggleClass('clicked')
});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
function showall() {
    $("img").show().removeClass("clicked")
}

function template() {
    $("img").hide().removeClass("clicked")
    $("ppp").show().addClass("clicked")
}
function google() {
    $("img").hide().removeClass("clicked")
    $(".google").show()
}
function movie() {
    $("img").hide().removeClass("clicked")
    $(".video").show()
    $(".movie").show()
    $(".anime").show().addClass("clicked")
}

function book() {
    $("img").hide().removeClass("clicked")
    $(".book").show().addClass("clicked")
}