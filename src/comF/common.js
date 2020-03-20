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
    quickTotop: function (position) {
        window.scrollTo(0, 200);
    },
    //检查电话号码是否正确,正确的时候返回true，错误的时候返回false
    phoneNumber(index, value) {
        if (index == 0 && value !== "") {
            if ((/^1[3456789]\d{9}$/.test(value))) {
                return true;
            } else {
                return false;
            }
        }
    },
    //表单提交前检查内容和电话号码
    checkInput(value1, value2, phoneNum) {
        var res = value1.length > 0 && value2.length > 0;
        if (res && phoneNum) {
            return false;
        } else {
            return true;
        }
    },
    //判断是否需要重新登录,超过时间需要登录返回false，没有超出返回true
    judgeLogin() {
        let passUsrInfo = {
            usrname: "",
            passTaken: "",
            time: 0
        }
        let tem = JSON.parse(window.localStorage.getItem("passUsrInfo"));
        let passUsrInfoTem = tem ? tem : passUsrInfo;
        let time = passUsrInfoTem.time;
        let data = Date.now();
        if (data - time > 600000) {
            window.localStorage.setItem("passUsrInfo", JSON.stringify(passUsrInfo))
            return false
        } else {
            return true
        }
    },
    //将new Data()时间改成1900-02-23形式
    formatTime(time) {
        let t = new Date(time);
        let tf = function (i) { return (i < 10 ? '0' : '') + i };
        let year = tf(t.getFullYear());
        let mouth = tf(t.getMonth() + 1);
        let data = tf(t.getDate())
        let hours = tf(t.getHours())
        let minutes = tf(t.getMinutes())
        let secondes = tf(t.getSeconds())
        let formatTime = year+'-'+mouth+'-'+data+' '+hours+'时'+minutes+'分'+secondes+'秒';
        return formatTime;
    }
}