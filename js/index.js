$(document).ready(function () {
  var isIPHONE = navigator.userAgent.toUpperCase().indexOf('IPHONE') != -1
  $('.selec-wrapper p').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  })
  //失去焦点的方法
  function ObjOnBlur(id, time) {
    //判断传参是否正确
    if (typeof id != 'string') throw new Error('参数错误');
    //获取文本域textarea标签
    var obj = document.getElementById(id);
    //延迟时间
    var time = time || 300;
    documentTouchend = function (event) {
      // 如果当前点击的元素是不是textarea本身
      if (event.target != obj) {
        //延时隐藏
        setTimeout(function () {
          // textarea会失去焦点
          obj.blur();
          // document移除ontouchend事件
          document.removeEventListener('touchend', documentTouchend, false);
        }, time);
      }
    };
    //如果标签存在
    if (obj) {
      //添加监听事件focus
      obj.addEventListener('focus', function () {
        //添加监听事件touchend
        document.addEventListener('touchend', documentTouchend, false);
      }, false);
    } else {
      throw new Error('没有找到元素');
    }
  };

  //给元素添加方法
  if (!isIPHONE) {
    $('textarea').bind('focus', function () {
      let scrolltop = $(this).offset().top;
      $('.wrapper-content').animate({
        scrollTop: scrolltop - 100
      }, 1000)
    });
  }
  $('textarea').on('blur', function () {
    if (isIPHONE) {
      new ObjOnBlur('lyb');
    } else {
      new ObjOnBlur('lyb');
    };
    //滚动到底部
    window.scrollTo(0, 0);
  })
})