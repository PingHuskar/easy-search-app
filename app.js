var log = []
$("img").hide()
function main() {
    var t = document.getElementsByTagName('img')
    var ids = []
    for (let i = 0;i < t.length; i++) {
        ids.push(t[i]['id'])
    }
    console.log(ids)
    function opens(web) {
        if (/.*clicked$/.test(document.getElementById(web).getAttribute('class'))) {
            open(document.getElementById(web).getAttribute('url')+document.getElementById('search').value);
        }
        
    }
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

function hideRmClicked(){
    $("img").hide().removeClass("clicked")
}
function template() {
    hideRmClicked()
    $("ppp").show().addClass("clicked")
}
function google() {
    hideRmClicked()
    $(".google").show()
}
function movie() {
    hideRmClicked()
    $(".video").show()
    $(".movie").show()
    $(".anime").show().addClass("clicked")
}

function music() {
    hideRmClicked()
    $(".music").show().addClass("clicked")
}

function book() {
    hideRmClicked()
    $(".book").show().addClass("clicked")
}

function shop() {
    hideRmClicked()
    $(".shop").show().addClass("clicked")
}

function other() {
    hideRmClicked()
    $(".other").show().addClass("clicked")
}

function coding() {
    hideRmClicked()
    $(".coding").show().addClass("clicked")
}
function facebookpage() {
    hideRmClicked()
    $(".data").show().addClass("clicked")
}

function timerpage() {
    hideRmClicked()
    $(".timer").show().addClass("clicked")
}