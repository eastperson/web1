  var Links = {
    setColor:function(color){
      $('a').css('color', color);
/*    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      console.log(alist[i]);
      alist[i].style.color = 'color';
      i = i + 1;
    }*/
  }
  }
  var Body = {
    setColor:function (color){
//      document.querySelector('body').style.backgroundColor = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function (color){
//      document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body');
    var target2 = document.querySelector('a');
    var target3 = document.querySelector('#grid');
    var target4 = document.querySelector('#member');
      if(self.value === '밤') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = '낮';

        Links.setColor('powderblue');
        } else {
          Body.setBackgroundColor('white');
          Body.setColor('black');
          Links.setColor('powderblue');
          self.value = '밤';
          var alist = document.querySelectorAll('a');
          var i = 0;
          while(i < alist.length){
              console.log(alist[i]);
              alist[i].style.color = 'powderblue';
              i = i + 1;
          }
        }
      }
