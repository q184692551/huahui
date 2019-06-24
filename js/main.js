var wap_nav=false;

window.onload =function () {
    var nownav=GetQueryString("act");
    console.log('nownav',nownav)

    /*首页轮播*/
    var swiper = new Swiper('.swiper-container', {
        autoResize: false,
        autoplay:false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            //type: 'fraction',
            //type : 'progressbar',
            //type : 'custom',
        },
        navigation: {
            nextEl: '.my-next',
            prevEl: '.my-prev',
        },
    });

    /*为所有data-bg属性元素添加背景*/
    var list = document.querySelectorAll("[data-bg]");
    for (var i = 0; i < list.length; i++) {
        var url = list[i].getAttribute('data-bg');
        list[i].style.backgroundImage = "url('" + url + "')";
    }
    /*顶部菜单切换-小屏幕*/

    var stars = document.querySelectorAll(".menu-nav ul li");
    for (var i=0;i<stars.length;i++){
        stars[i].index = i;
    }

    for (var i=0;i<stars.length;i++) {

        stars[i].onclick = function(){
            console.log(this.index);
//            document.querySelectorAll(".menu-nav ul li").className ='act';
//            document.querySelectorAll(".menu-nav ul ").childNodes.className='';
            for (var j=0;j<stars.length;j++) {
                stars[j].className ='';
            }
            stars[this.index].className ='act';
        }
    }


    /*加载公共部分*/
    $.get("component/head.html",function(data){
        $("header").html(data);
    });
    $.get("component/footer.html",function(data){
        $("footer").html(data);
    });
    $.get("component/nav.html",function(data){
        $("nav").html(data);
    });
    if($(".nav ul li")){
        nav_sel(nownav);
    }

}

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function togglenav() {
    console.log('togglenav')
    wap_nav=!wap_nav;
    if(wap_nav){

        document.querySelectorAll(".menu-nav")[0].style.display="block";
        document.querySelectorAll(".content .nav")[0].style.display="none";
        document.querySelectorAll(".top-menu img")[0].src="image/icon-menuclose.png";
    }
    else {
        document.querySelectorAll(".menu-nav")[0].style.display="none";

        document.querySelectorAll(".top-menu img")[0].src="image/icon-menu.png";
    }
}


function nav_sel(actindex) {
    /*顶部菜单切换-大屏*/
    // console.log('actindex--',actindex)
    // $(".nav ul li").removeClass('sel');
    // console.log("   $('.nav ul li').eq(actindex)",   $('.nav ul li').eq(actindex));
    // $('.nav ul li').eq(actindex).addClass('sel');

    var select = $(".nav ul li").html();
}