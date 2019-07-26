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


export {
    logs,
    throttle,
    debounce,
    slice
}
