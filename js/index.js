$(document).ready(function () {
  $('.selec-wrapper p').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  })
})