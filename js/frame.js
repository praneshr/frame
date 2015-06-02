var grid = {
    init: function(){
        var chrome = document.querySelectorAll(".show-for-chrome");
        var ie = document.querySelectorAll(".show-for-ie");
        var opera = document.querySelectorAll(".show-for-opera");
        var firefox = document.querySelectorAll(".show-for-firefox");
        var safari = document.querySelectorAll(".show-for-safari");
        var ios = document.querySelectorAll(".show-for-ios");
        var iphone = document.querySelectorAll(".show-for-iphone");
        var ipad = document.querySelectorAll(".show-for-ipad");
        var ipod = document.querySelectorAll(".show-for-ipod");
        var android = document.querySelectorAll(".show-for-android");
        var androidPhone = document.querySelectorAll(".show-for-android-phone");
        var androidTablet = document.querySelectorAll(".show-for-android-tablet");
        var blackberry = document.querySelectorAll(".show-for-blackberry");
        var windowsPhone = document.querySelectorAll(".show-for-windows-phone");
        var windowsTablet = document.querySelectorAll(".show-for-windows-tablet");
        var windows = document.querySelectorAll(".show-for-windows");
        var mac = document.querySelectorAll(".show-for-mac");
        var linux = document.querySelectorAll(".show-for-linux");
        var desktop = document.querySelectorAll(".show-for-desktop");
        var mobile = document.querySelectorAll(".show-for-mobile");
        var tablet = document.querySelectorAll(".show-for-tablet");
        var touchDevice = document.querySelectorAll(".show-for-touch");
        var results = [];

        //Initial test
        var testing_parameters = ["chrome","ie","opera","firefox","safari","ios","iphone","ipad","ipod","android","androidPhone","androidTablet","blackberry","windowsPhone","windowsTablet","windows","mac","linux","desktop","mobile","tablet","touchDevice"];
        testing_parameters.forEach(function(value){
            var result = is[value]();
            results.push(result);
        });
        var i = 0;
        var selectors = [chrome,ie,opera,firefox,safari,ios,iphone,ipad,ipod,android,androidPhone,androidTablet,blackberry,windowsPhone,windowsTablet,windows,mac,linux,desktop,mobile,tablet,touchDevice];
        selectors.forEach(function(value){
            grid.exec(value,results[i]);
            i++;
        });
    },
    exec : function(val,res){
        if(val.length > 0){
            if(res){
                for(i=0; i<val.length;i++){
                    val[i].style.display="inherit";
                }
            }else{
                for(i=0; i<val.length;i++){
                    val[i].style.display="none";
                }
            }
        }
    }
}
grid.init();