function logs(msg) {
    console.log(msg)
}

function throttle(fn, delay) {
    let last = +new Date();
    return ()=> {
        let cur = +new Date();
        if(cur - last > delay) {
            last = +new Date();
            fn.apply(this, arguments);
        }
    }
}

function debounce(fn, delay) {
    let timer;
    return ()=> {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            let ctx = this;
            let args = arguments;
            fn.apply(ctx, args)
        }, delay)
    }
}

export {
    logs,
    throttle,
    debounce
}
