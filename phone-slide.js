
function load(){
     $li=$(".smallicon");  //app div
    $window=$(".small-icon-slide");   //包裹appde div
    $window.css('width',$li.length*255);
    $nav=$(".small-icon").width();  //最外层divy
    $width=$window.width();
    $window.on({
         touchstart: function(e){
                var el=$(this);
                var os = el.offset();
                dx =e.originalEvent.targetTouches[0].pageX-os.left ;  //e.originalEvent.targetTouches[0].pageX 鼠标位置  os.left向左边偏移量
                $(document).on('touchmove.drag', function(e){
                    leftOffset =  e.originalEvent.targetTouches[0].pageX-dx;
                     yx=$width-$nav;
                     if ((e.originalEvent.targetTouches[0].pageX-dx)<-yx) leftOffset = -yx ;
                     if ((e.originalEvent.targetTouches[0].pageX-dx)>0) leftOffset =0;
                     el.offset({  left:leftOffset});
                  });

            },
    touchend: function(e){ $(document).off('touchmove.drag');
 }
    }); 
    }
 