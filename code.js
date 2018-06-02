function onLine(id){
    let s = document.getElementById(id).style
    s.outline = '1px solid black'
}
function offLine(id) {
    let s = document.getElementById(id).style
    s.outline = ''
}
function bgChange(id){
    let s = document.getElementById(id).style
    s.background = 'rgba(245, 180, 124, 1)'
}
function bgChangeB(id){
    let s = document.getElementById(id).style
    s.background = 'rgba(245, 180, 124, 0.5)'
}
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });