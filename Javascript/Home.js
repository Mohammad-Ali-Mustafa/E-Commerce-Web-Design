$(document).ready(function(){
    $("#searchbtn").click(function(){
        $("#filtersearchbox").fadeToggle(300);
    });

    // $("#searchbtn").click(function(){
    //     $(".cancel-btn-of-search").fadeOut(300);
    // });

});



    // pop-up

    $(document).ready(function(){


    $(".btn-of-buy").click(function(){
            $(".btn-of-buy").css("outline" , "#187ab9")
        });

        $(".btn-of-cart").click(function(){
            $(".btn-of-cart").css("outline" , "#187ab9")
        });


        $(".btn-of-confirm-order").click(function(){
            $(".thanks-para-popup").slideDown(1000)
        });


        $(".btn-of-confirm-order").click(function(){
            $(".btn-of-confirm-order").css("outline" , "none")
        });


        $(".close").click(function(){
            $(".thanks-para-popup").fadeOut(1000)
        });


      });


// rating

let a = document.querySelector(".rating-button");
let b = document.querySelector(".post");
let c = document.querySelector(".star-widget");
let d = document.querySelector(".edit");

a.onclick = ()=>{
    c.style.display = "none";
    b.style.display = "block";
    
    d.onclick = ()=>{
    c.style.display = "block";
    b.style.display = "none";
}
    return false;
}








// get input field and add 'keyup' event listener
let searchInput = document.querySelector('.search-of-box');
searchInput.addEventListener('keyup', search);

// get all title
let titles = document.querySelectorAll('.homeboxmain .product1');
let searchTerm = '';
let tit = '';

function search(e) {
  // get input fieled value and change it to lower case
  searchTerm = e.target.value.toLowerCase();

  titles.forEach((title) => {
    // navigate to p in the title, get its value and change it to lower case
    tit = title.textContent.toLowerCase();
    // it search term not in the title's title hide the title. otherwise, show it.
    tit.includes(searchTerm) ? title.style.display = 'block' : title.style.display = 'none';
  });
}



// bottom to up


$(document).ready(function(){
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".up-arrow").css({
      "opacity" : "1" , "pointer-events" : "auto"
    });
  }
  else{
    $(".up-arrow").css({
      "opacity" : "0" , "pointer-events" : "none"
    });
  }
});

$(".up-arrow").click(function(){
  $("html").animate({scrollTop:0}, 500);
});
});


// cart box hide show


$(document).ready(function(){


  $(".cart").click(function(){
    $(".caring-box").show(0)
  });

  $(".button-of-closing-cart").click(function(){
    $(".caring-box").slideUp(1000)
  });


  // cart products hide

  // top selling acs


  $(".add-to-cart-box-a1").hide();
  $(".add-to-cart-box-a2").hide();
  $(".add-to-cart-box-a3").hide();
  $(".add-to-cart-box-a4").hide();

  $(".add-to-cart-box-a5").hide();
  $(".add-to-cart-box-a6").hide();
  $(".add-to-cart-box-a7").hide();
  $(".add-to-cart-box-a8").hide();

  $(".add-to-cart-box-a9").hide();
  $(".add-to-cart-box-a10").hide();
  $(".add-to-cart-box-a11").hide();
  $(".add-to-cart-box-a12").hide();

  $(".add-to-cart-box-a13").hide();
  $(".add-to-cart-box-a14").hide();
  $(".add-to-cart-box-a15").hide();
  $(".add-to-cart-box-a16").hide();

  $(".add-to-cart-box-a17").hide();
  $(".add-to-cart-box-a18").hide();
  $(".add-to-cart-box-a19").hide();
  $(".add-to-cart-box-a20").hide();



  // split acs


  $(".add-to-cart-box-a21").hide();
  $(".add-to-cart-box-a22").hide();
  $(".add-to-cart-box-a23").hide();
  $(".add-to-cart-box-a24").hide();

  $(".add-to-cart-box-a25").hide();
  $(".add-to-cart-box-a26").hide();
  $(".add-to-cart-box-a27").hide();
  $(".add-to-cart-box-a28").hide();

  $(".add-to-cart-box-a29").hide();
  $(".add-to-cart-box-a30").hide();
  $(".add-to-cart-box-a31").hide();
  $(".add-to-cart-box-a32").hide();

  $(".add-to-cart-box-a33").hide();
  $(".add-to-cart-box-a34").hide();
  $(".add-to-cart-box-a35").hide();
  $(".add-to-cart-box-a36").hide();

  $(".add-to-cart-box-a37").hide();
  $(".add-to-cart-box-a38").hide();
  $(".add-to-cart-box-a39").hide();
  $(".add-to-cart-box-a40").hide();


// cassette ac


$(".add-to-cart-box-a41").hide();
$(".add-to-cart-box-a42").hide();
$(".add-to-cart-box-a43").hide();
$(".add-to-cart-box-a44").hide();

$(".add-to-cart-box-a45").hide();
$(".add-to-cart-box-a46").hide();
$(".add-to-cart-box-a47").hide();
$(".add-to-cart-box-a48").hide();

$(".add-to-cart-box-a49").hide();
$(".add-to-cart-box-a50").hide();
$(".add-to-cart-box-a51").hide();
$(".add-to-cart-box-a52").hide();

$(".add-to-cart-box-a53").hide();
$(".add-to-cart-box-a54").hide();
$(".add-to-cart-box-a55").hide();
$(".add-to-cart-box-a56").hide();

$(".add-to-cart-box-a57").hide();
$(".add-to-cart-box-a58").hide();
$(".add-to-cart-box-a59").hide();
$(".add-to-cart-box-a60").hide();



// window acs


$(".add-to-cart-box-a61").hide();
$(".add-to-cart-box-a62").hide();
$(".add-to-cart-box-a63").hide();
$(".add-to-cart-box-a64").hide();

$(".add-to-cart-box-a65").hide();
$(".add-to-cart-box-a66").hide();
$(".add-to-cart-box-a67").hide();
$(".add-to-cart-box-a68").hide();

$(".add-to-cart-box-a69").hide();
$(".add-to-cart-box-a70").hide();
$(".add-to-cart-box-a71").hide();
$(".add-to-cart-box-a72").hide();

$(".add-to-cart-box-a73").hide();
$(".add-to-cart-box-a74").hide();
$(".add-to-cart-box-a75").hide();
$(".add-to-cart-box-a76").hide();

$(".add-to-cart-box-a77").hide();
$(".add-to-cart-box-a78").hide();
$(".add-to-cart-box-a79").hide();
$(".add-to-cart-box-a80").hide();











// cart products show

// top selling acs


  $(".add-cart1").click(function(){
    $(".add-to-cart-box-a1").show()
  });

  $(".add-cart2").click(function(){
    $(".add-to-cart-box-a2").show()
  });

  $(".add-cart3").click(function(){
    $(".add-to-cart-box-a3").show()
  });

  $(".add-cart4").click(function(){
    $(".add-to-cart-box-a4").show()
  });

  $(".add-cart5").click(function(){
    $(".add-to-cart-box-a5").show()
  });

  $(".add-cart6").click(function(){
    $(".add-to-cart-box-a6").show()
  });

  $(".add-cart7").click(function(){
    $(".add-to-cart-box-a7").show()
  });

  $(".add-cart8").click(function(){
    $(".add-to-cart-box-a8").show()
  });

  $(".add-cart9").click(function(){
    $(".add-to-cart-box-a9").show()
  });

  $(".add-cart10").click(function(){
    $(".add-to-cart-box-a10").show()
  });

  $(".add-cart11").click(function(){
    $(".add-to-cart-box-a11").show()
  });

  $(".add-cart12").click(function(){
    $(".add-to-cart-box-a12").show()
  });

  $(".add-cart13").click(function(){
    $(".add-to-cart-box-a13").show()
  });

  $(".add-cart14").click(function(){
    $(".add-to-cart-box-a14").show()
  });

  $(".add-cart15").click(function(){
    $(".add-to-cart-box-a15").show()
  });

  $(".add-cart16").click(function(){
    $(".add-to-cart-box-a16").show()
  });

  $(".add-cart17").click(function(){
    $(".add-to-cart-box-a17").show()
  });

  $(".add-cart18").click(function(){
    $(".add-to-cart-box-a18").show()
  });

  $(".add-cart19").click(function(){
    $(".add-to-cart-box-a19").show()
  });

  $(".add-cart20").click(function(){
    $(".add-to-cart-box-a20").show()
  });




  // split acs



  $(".add-cart21").click(function(){
    $(".add-to-cart-box-a21").show()
  });

  $(".add-cart22").click(function(){
    $(".add-to-cart-box-a22").show()
  });

  $(".add-cart23").click(function(){
    $(".add-to-cart-box-a23").show()
  });

  $(".add-cart24").click(function(){
    $(".add-to-cart-box-a24").show()
  });

  $(".add-cart25").click(function(){
    $(".add-to-cart-box-a25").show()
  });

  $(".add-cart26").click(function(){
    $(".add-to-cart-box-a26").show()
  });

  $(".add-cart27").click(function(){
    $(".add-to-cart-box-a27").show()
  });

  $(".add-cart28").click(function(){
    $(".add-to-cart-box-a28").show()
  });

  $(".add-cart29").click(function(){
    $(".add-to-cart-box-a29").show()
  });

  $(".add-cart30").click(function(){
    $(".add-to-cart-box-a30").show()
  });

  $(".add-cart31").click(function(){
    $(".add-to-cart-box-a31").show()
  });

  $(".add-cart32").click(function(){
    $(".add-to-cart-box-a32").show()
  });

  $(".add-cart33").click(function(){
    $(".add-to-cart-box-a33").show()
  });

  $(".add-cart34").click(function(){
    $(".add-to-cart-box-a34").show()
  });

  $(".add-cart35").click(function(){
    $(".add-to-cart-box-a35").show()
  });

  $(".add-cart36").click(function(){
    $(".add-to-cart-box-a36").show()
  });

  $(".add-cart37").click(function(){
    $(".add-to-cart-box-a37").show()
  });

  $(".add-cart38").click(function(){
    $(".add-to-cart-box-a38").show()
  });

  $(".add-cart39").click(function(){
    $(".add-to-cart-box-a39").show()
  });

  $(".add-cart40").click(function(){
    $(".add-to-cart-box-a40").show()
  });



  // cassette ac



  $(".add-cart41").click(function(){
    $(".add-to-cart-box-a41").show()
  });

  $(".add-cart42").click(function(){
    $(".add-to-cart-box-a42").show()
  });

  $(".add-cart43").click(function(){
    $(".add-to-cart-box-a43").show()
  });

  $(".add-cart44").click(function(){
    $(".add-to-cart-box-a44").show()
  });

  $(".add-cart45").click(function(){
    $(".add-to-cart-box-a45").show()
  });

  $(".add-cart46").click(function(){
    $(".add-to-cart-box-a46").show()
  });


  $(".add-cart47").click(function(){
    $(".add-to-cart-box-a47").show()
  });

  $(".add-cart48").click(function(){
    $(".add-to-cart-box-a48").show()
  });

  $(".add-cart49").click(function(){
    $(".add-to-cart-box-a49").show()
  });

  $(".add-cart50").click(function(){
    $(".add-to-cart-box-a50").show()
  });

  $(".add-cart51").click(function(){
    $(".add-to-cart-box-a51").show()
  });

  $(".add-cart52").click(function(){
    $(".add-to-cart-box-a52").show()
  });

  $(".add-cart53").click(function(){
    $(".add-to-cart-box-a53").show()
  });

  $(".add-cart54").click(function(){
    $(".add-to-cart-box-a54").show()
  });

  $(".add-cart55").click(function(){
    $(".add-to-cart-box-a55").show()
  });

  $(".add-cart56").click(function(){
    $(".add-to-cart-box-a56").show()
  });

  $(".add-cart57").click(function(){
    $(".add-to-cart-box-a57").show()
  });

  $(".add-cart58").click(function(){
    $(".add-to-cart-box-a58").show()
  });

  $(".add-cart59").click(function(){
    $(".add-to-cart-box-a59").show()
  });

  $(".add-cart60").click(function(){
    $(".add-to-cart-box-a60").show()
  });



  // window acs



  $(".add-cart61").click(function(){
    $(".add-to-cart-box-a61").show()
  });

  $(".add-cart62").click(function(){
    $(".add-to-cart-box-a62").show()
  });

  $(".add-cart63").click(function(){
    $(".add-to-cart-box-a63").show()
  });

  $(".add-cart64").click(function(){
    $(".add-to-cart-box-a64").show()
  });

  $(".add-cart65").click(function(){
    $(".add-to-cart-box-a65").show()
  });

  $(".add-cart66").click(function(){
    $(".add-to-cart-box-a66").show()
  });

  $(".add-cart67").click(function(){
    $(".add-to-cart-box-a67").show()
  });

  $(".add-cart68").click(function(){
    $(".add-to-cart-box-a68").show()
  });

  $(".add-cart69").click(function(){
    $(".add-to-cart-box-a69").show()
  });

  $(".add-cart70").click(function(){
    $(".add-to-cart-box-a70").show()
  });

  $(".add-cart71").click(function(){
    $(".add-to-cart-box-a71").show()
  });

  $(".add-cart72").click(function(){
    $(".add-to-cart-box-a72").show()
  });

  $(".add-cart73").click(function(){
    $(".add-to-cart-box-a73").show()
  });

  $(".add-cart74").click(function(){
    $(".add-to-cart-box-a74").show()
  });

  $(".add-cart75").click(function(){
    $(".add-to-cart-box-a75").show()
  });

  $(".add-cart76").click(function(){
    $(".add-to-cart-box-a76").show()
  });

  $(".add-cart77").click(function(){
    $(".add-to-cart-box-a77").show()
  });

  $(".add-cart78").click(function(){
    $(".add-to-cart-box-a78").show()
  });

  $(".add-cart79").click(function(){
    $(".add-to-cart-box-a79").show()
  });

  $(".add-cart80").click(function(){
    $(".add-to-cart-box-a80").show()
  });


});


// cart products add

// top selling


$(document).ready(function(){


$("#delete1").click(function(){
  $(".add-to-cart-box-a1").hide()
});


$("#delete2").click(function(){
  $(".add-to-cart-box-a2").hide()
});


$("#delete3").click(function(){
  $(".add-to-cart-box-a3").hide()
});


$("#delete4").click(function(){
  $(".add-to-cart-box-a4").hide()
});


$("#delete5").click(function(){
  $(".add-to-cart-box-a5").hide()
});


$("#delete6").click(function(){
  $(".add-to-cart-box-a6").hide()
});


$("#delete7").click(function(){
  $(".add-to-cart-box-a7").hide()
});


$("#delete8").click(function(){
  $(".add-to-cart-box-a8").hide()
});


$("#delete9").click(function(){
  $(".add-to-cart-box-a9").hide()
});


$("#delete10").click(function(){
  $(".add-to-cart-box-a10").hide()
});


$("#delete11").click(function(){
  $(".add-to-cart-box-a11").hide()
});


$("#delete12").click(function(){
  $(".add-to-cart-box-a12").hide()
});


$("#delete13").click(function(){
  $(".add-to-cart-box-a13").hide()
});


$("#delete14").click(function(){
  $(".add-to-cart-box-a14").hide()
});


$("#delete15").click(function(){
  $(".add-to-cart-box-a15").hide()
});


$("#delete16").click(function(){
  $(".add-to-cart-box-a16").hide()
});


$("#delete17").click(function(){
  $(".add-to-cart-box-a17").hide()
});


$("#delete18").click(function(){
  $(".add-to-cart-box-a18").hide()
});


$("#delete19").click(function(){
  $(".add-to-cart-box-a19").hide()
});


$("#delete20").click(function(){
  $(".add-to-cart-box-a20").hide()
});



// split acs


$("#delete21").click(function(){
  $(".add-to-cart-box-a21").hide()
});


$("#delete22").click(function(){
  $(".add-to-cart-box-a22").hide()
});


$("#delete23").click(function(){
  $(".add-to-cart-box-a23").hide()
});


$("#delete24").click(function(){
  $(".add-to-cart-box-a24").hide()
});


$("#delete25").click(function(){
  $(".add-to-cart-box-a25").hide()
});


$("#delete26").click(function(){
  $(".add-to-cart-box-a26").hide()
});


$("#delete27").click(function(){
  $(".add-to-cart-box-a27").hide()
});


$("#delete28").click(function(){
  $(".add-to-cart-box-a28").hide()
});


$("#delete29").click(function(){
  $(".add-to-cart-box-a29").hide()
});


$("#delete30").click(function(){
  $(".add-to-cart-box-a30").hide()
});

$("#delete31").click(function(){
  $(".add-to-cart-box-a31").hide()
});

$("#delete32").click(function(){
  $(".add-to-cart-box-a32").hide()
});

$("#delete33").click(function(){
  $(".add-to-cart-box-a33").hide()
});

$("#delete34").click(function(){
  $(".add-to-cart-box-a34").hide()
});

$("#delete35").click(function(){
  $(".add-to-cart-box-a35").hide()
});

$("#delete36").click(function(){
  $(".add-to-cart-box-a36").hide()
});

$("#delete37").click(function(){
  $(".add-to-cart-box-a37").hide()
});

$("#delete38").click(function(){
  $(".add-to-cart-box-a38").hide()
});

$("#delete39").click(function(){
  $(".add-to-cart-box-a39").hide()
});

$("#delete40").click(function(){
  $(".add-to-cart-box-a40").hide()
});



// cassette acs



$("#delete41").click(function(){
  $(".add-to-cart-box-a41").hide()
});

$("#delete42").click(function(){
  $(".add-to-cart-box-a42").hide()
});

$("#delete43").click(function(){
  $(".add-to-cart-box-a43").hide()
});

$("#delete44").click(function(){
  $(".add-to-cart-box-a44").hide()
});

$("#delete45").click(function(){
  $(".add-to-cart-box-a45").hide()
});

$("#delete46").click(function(){
  $(".add-to-cart-box-a46").hide()
});

$("#delete47").click(function(){
  $(".add-to-cart-box-a47").hide()
});

$("#delete48").click(function(){
  $(".add-to-cart-box-a48").hide()
});

$("#delete49").click(function(){
  $(".add-to-cart-box-a49").hide()
});

$("#delete50").click(function(){
  $(".add-to-cart-box-a50").hide()
});

$("#delete51").click(function(){
  $(".add-to-cart-box-a51").hide()
});

$("#delete52").click(function(){
  $(".add-to-cart-box-a52").hide()
});

$("#delete53").click(function(){
  $(".add-to-cart-box-a53").hide()
});

$("#delete54").click(function(){
  $(".add-to-cart-box-a54").hide()
});

$("#delete55").click(function(){
  $(".add-to-cart-box-a55").hide()
});

$("#delete56").click(function(){
  $(".add-to-cart-box-a56").hide()
});

$("#delete57").click(function(){
  $(".add-to-cart-box-a57").hide()
});

$("#delete58").click(function(){
  $(".add-to-cart-box-a58").hide()
});

$("#delete59").click(function(){
  $(".add-to-cart-box-a59").hide()
});

$("#delete60").click(function(){
  $(".add-to-cart-box-a60").hide()
});



// window acs


$("#delete61").click(function(){
  $(".add-to-cart-box-a61").hide()
});

$("#delete62").click(function(){
  $(".add-to-cart-box-a62").hide()
});

$("#delete63").click(function(){
  $(".add-to-cart-box-a63").hide()
});

$("#delete64").click(function(){
  $(".add-to-cart-box-a64").hide()
});

$("#delete65").click(function(){
  $(".add-to-cart-box-a65").hide()
});

$("#delete66").click(function(){
  $(".add-to-cart-box-a66").hide()
});

$("#delete67").click(function(){
  $(".add-to-cart-box-a67").hide()
});

$("#delete68").click(function(){
  $(".add-to-cart-box-a68").hide()
});

$("#delete69").click(function(){
  $(".add-to-cart-box-a69").hide()
});

$("#delete70").click(function(){
  $(".add-to-cart-box-a70").hide()
});

$("#delete71").click(function(){
  $(".add-to-cart-box-a71").hide()
});

$("#delete72").click(function(){
  $(".add-to-cart-box-a72").hide()
});

$("#delete73").click(function(){
  $(".add-to-cart-box-a73").hide()
});

$("#delete74").click(function(){
  $(".add-to-cart-box-a74").hide()
});

$("#delete75").click(function(){
  $(".add-to-cart-box-a75").hide()
});

$("#delete76").click(function(){
  $(".add-to-cart-box-a76").hide()
});

$("#delete77").click(function(){
  $(".add-to-cart-box-a77").hide()
});

$("#delete78").click(function(){
  $(".add-to-cart-box-a78").hide()
});

$("#delete79").click(function(){
  $(".add-to-cart-box-a79").hide()
});

$("#delete80").click(function(){
  $(".add-to-cart-box-a80").hide()
});



});


// cart value increase / decrease


// value increament

$(document).ready(function(){
  // e.preventDefault();
  let abcd = 0;


  $(".btn-of-cart").click(function(){
      abcd ++
      $(".cart-value").html(abcd)
  });

  

  // value decreament

  // top selling acs


$("#delete1").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete2").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete3").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete4").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete5").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete6").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete7").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete8").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete9").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete10").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete11").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete12").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete13").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete14").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete15").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete16").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete17").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete18").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete19").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete20").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});



// split acs



$("#delete21").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete22").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete23").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete24").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete25").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete26").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete27").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete28").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete29").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete30").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete31").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete32").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});

$("#delete33").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete34").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete35").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete36").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete37").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete38").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete39").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete40").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


// cassette acs


$("#delete41").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete42").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete43").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete44").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete45").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete46").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete47").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete48").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete49").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete50").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete51").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete52").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete53").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete54").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete55").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete56").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete57").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete58").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete59").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete60").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


// window acs


$("#delete61").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete62").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete63").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete64").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete65").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete66").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete67").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete68").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete69").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete70").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete71").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete72").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete73").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete74").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete75").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete76").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete77").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete78").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete79").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$("#delete80").click(function(){
  if(abcd > 0){
    abcd--
  }
    $(".cart-value").html(abcd)
});


$(".btn-of-cart").click(function(){
  $(".add-to-cart-box-a1-total").hide()
});

});
