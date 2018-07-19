var burgers = document.querySelectorAll('.burger');

for (var i = 0; i < burgers.length; i++) {

  burgers[i].addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      //alert("close");
      pushLinks();
    } else {
      this.classList.add('active');
      //alert("open");
      bringLinks();
    }
  });
}

bringLinks = function(){
    $('.home').css({"left": "0"});
    $('.about').css({"right": "0"});
    $('.portfolio').css({"left": "0"});
    $('.contact').css({"right": "0"});
}

pushLinks = function(){
    $('.home').css({"left": "-100vw"});
    $('.about').css({"right": "-100vw"});
    $('.portfolio').css({"left": "-100vw"});
    $('.contact').css({"right": "-100vw"});
}