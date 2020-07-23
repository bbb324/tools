function logs(msg) {
    console.log(msg)
}

function throttle(fn, delay) {
    let last = +new Date();
    let delayTime = delay || 200;
    return ()=> {
        let cur = +new Date();
        if(cur - last > delayTime) {
            last = +new Date();
            fn.apply(this, arguments);
        }
    }
}

function debounce(fn, delay) {
    let timer;
    let delayTime = delay || 200;
    return ()=> {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            let ctx = this;
            let args = arguments;
            fn.apply(ctx, args)
        }, delayTime)
    }
}

// slice 方法
function slice(arr, removeList) {
    if(arr.length === 0) return '原始 list 为空';
    let list = [];
    arr.forEach(item => {
        if(removeList.indexOf(item)) {
            list.push(item);
        }
    });
    return list;
}

// 返回url当中的参数
function getUrlParams(){
    var args = {};
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for(var i = 0;i < pairs.length; i++){
        var pos = pairs[i].indexOf("=");
        if(pos == -1) continue;
        var name = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}


export {
    logs,
    throttle,
    debounce,
    slice,
    getUrlParams
}
