//подключаем джейквери
$(document).ready(function () {
  //объявляем переменные
  var tabsItem = $('.tabs__item');
  var contentItem = $('.content__item');

  //отследить клик по tabs
  tabsItem.on('click', function name(params) {
    var activeContent = $(this).attr("data-target");
    //убрать обводку активного эллемента
    tabsItem.removeClass("tabs__item--active"); 
    //отключит активную вкладку что бы включилась другая
    contentItem.removeClass("content__item--active"); 
    //включит другю вкладку
    $(activeContent).addClass("content__item--active")
    //добавит обводку на активную кнопку
    $(this).addClass("tabs__item--active")
    // console.log($(activeContent));

  });
});