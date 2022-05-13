var log = []

function main() {
    function opens(web) {
        if (document.getElementById(web).getAttribute('class') === 'clicked') {
            open(document.getElementById(web).getAttribute('url')+document.getElementById('search').value);
        }
    }
    var ids = ["udemy","udemy_mycourse","google","github_all","github_myrepo","youtube",
    "iqiyi","imdb","applemusic","hareshi","stackoverflow","th.wikipedia","forms","sheets","slides","datastudio","drive","steam"]
    ids.map(opens)
}
// const element = document.querySelector('img');
// element.style.opacity = "0.5";
// element.style.filter = 'alpha(opacity=90)';
$("img").click(function(){
    console.log(this)
    $(this).toggleClass('clicked')
});