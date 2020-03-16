export default {
    toTop: function (position) {
        // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (cb) {
                return setTimeout(cb, 17);
            };
        }
        // 当前滚动高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // step
        var step = function () {
            var distance = position - scrollTop;
            scrollTop = scrollTop + distance / 5;
            if (Math.abs(distance) < 1) {
                window.scrollTo(0, position);
            } else {
                window.scrollTo(0, scrollTop);
                requestAnimationFrame(step);
            }
        };
        step();
    },
    quickTotop:function(position){
        window.scrollTo(0, 200);
        console.log("1")
    },
    //检查电话号码是否正确
    phoneNumber(index,value) {
        if (index == 0 && value !== "") {
            if (!(/^1[3456789]\d{9}$/.test(value))) {
                return true;
            }
        }
    },
    //表单提交前检查内容和电话号码
    checkInput(value1,value2,phoneNum){
        var res = value1.length>0&&value2.length>0;
        if(res&&phoneNum){
          return false;
        }else{
          return true;
        }
    }
}