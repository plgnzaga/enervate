/*$(document).ready(function(){
    alert("working!");
});*/
$(document).ready(function(){
    
  //navbar hamburger
  $(".icon").click(function(){
        $(this).toggleClass("active"); 
        $("li").toggleClass("animate-me");
        
    });

    
     $(".fa-close").click(function(){
       
        $("li").css("display","none");
        
    });
     $("div.main").click(function(){
        $(".icon").removeClass("active"); 
        $("li").removeClass("animate-me");
       

     })



    $("li").mouseover(function(){
        $(".navigation-top a").css("color","black");
    });
    $("li").mouseout(function(){
        $(".navigation-top a").css("color","white");
    });


    $(".welcome button.read-more").click(function(){
        $(this).hide();
        $(".welcome button.read-less").show();
         $(".welcome p span:nth-child(2)").show();
    });

     $(".welcome button.read-less").click(function(){
        $(this).hide();
        $(".welcome button.read-more").show();
        $(".welcome p span:nth-child(2)").hide();
    });
    

        $("a[href='#back-to-top']").click(function(){
        $("html,body").animate({scrollTop:0},"slow");
    });
        var schedMobile = $("table.table-1 tr.sched");
        $("table.table-1 tr#sunday").click(function(){
            $(schedMobile).not(".sunday").hide();
            $(schedMobile).filter(".sunday").show();
        });

        $("table.table-1 tr#monday").click(function(){
            $(schedMobile).not(".monday").hide();
            $(schedMobile).filter(".monday").show();
        });

         $("table.table-1 tr#tuesday").click(function(){
            $(schedMobile).not(".tuesday").hide();
            $(schedMobile).filter(".tuesday").show();
        });

        $("table.table-1 tr#wednesday").click(function(){
            $(schedMobile).not(".wednesday").hide();
            $(schedMobile).filter(".wednesday").show();
        });

         $("table.table-1 tr#thursday").click(function(){
            $(schedMobile).not(".thursday").hide();
            $(schedMobile).filter(".thursday").show();
        });

        $("table.table-1 tr#friday").click(function(){
            $(schedMobile).not(".friday").hide();
            $(schedMobile).filter(".friday").show();
        });

        $("table.table-1 tr#saturday").click(function(){
            $(schedMobile).not(".saturday").hide();
            $(schedMobile).filter(".saturday").show();
        });

            var tablerow = $("table.table-2 tr.sched-desktop");
            $("section.btns button#sunday").click(function(){
            $(tablerow).not(".sunday-desktop").hide();
            $(tablerow).filter(".sunday-desktop").show();
            });

            $("section.btns button#monday").click(function(){
            $(tablerow).not(".monday-desktop").hide();
            $(tablerow).filter(".monday-desktop").show();
            });

            $("section.btns button#tuesday").click(function(){
            $(tablerow).not(".tuesday-desktop").hide();
            $(tablerow).filter(".tuesday-desktop").show();
            });

            $("section.btns button#wednesday").click(function(){
            $(tablerow).not(".wednesday-desktop").hide();
            $(tablerow).filter(".wednesday-desktop").show();
            });

            $("section.btns button#thursday").click(function(){
            $(tablerow).not(".thursday-desktop").hide();
            $(tablerow).filter(".thursday-desktop").show();
            });

            $("section.btns button#friday").click(function(){
            $(tablerow).not(".friday-desktop").hide();
            $(tablerow).filter(".friday-desktop").show();
            });
            $("section.btns button#saturday").click(function(){
            $(tablerow).not(".saturday-desktop").hide();
            $(tablerow).filter(".saturday-desktop").show();
            });

         

    $("section.btns button#sunday").css({"background-color":"#232323","color":"#FEB009"});

     $("section.btns button#sunday").click(function(){
        $(day).not("#sunday").css({"background-color":"#FEB009","color":"#232323"});
        $(day).filter("#sunday").css({"background-color":"#232323","color":"#FEB009"});
     });

     var day = $("section.btns button");

     $("section.btns button#monday").click(function(){
        $(day).not("#monday").css({"background-color":"#FEB009","color":"#232323"});
        $(day).filter("#monday").css({"background-color":"#232323","color":"#FEB009"});
     });

     $("section.btns button#tuesday").click(function(){
        $(day).not("#tuesday").css({"background-color":"#FEB009","color":"#232323"});
        $(day).filter("#tuesday").css({"background-color":"#232323","color":"#FEB009"});
     });


     $("section.btns button#wednesday").click(function(){
        $(day).not("#wednesday").css({"background-color":"#FEB009","color":"#232323"});
        $(day).filter("#wednesday").css({"background-color":"#232323","color":"#FEB009"});
     });


        $("section.btns button#thursday").click(function(){
        $(day).not("#thursday").css({"background-color":"#FEB009","color":"#232323"});
        $(day).filter("#thursday").css({"background-color":"#232323","color":"#FEB009"});
     });


     $("section.btns button#friday").click(function(){
        $(day).not("#friday").css({"background-color":"#FEB009","color":"#232323"});
        $(day).filter("#friday").css({"background-color":"#232323","color":"#FEB009"});
     });


     $("section.btns button#saturday").click(function(){
        $(day).not("#saturday").css({"background-color":"#FEB009","color":"#232323"});
        $(day).filter("#saturday").css({"background-color":"#232323","color":"#FEB009"});
     });







});
