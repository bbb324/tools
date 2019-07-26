### 使用说明

#### 安装方法
```
npm i bbb324-tools --save
```
#### 引入说明
工具组目前包含以下几个方法，throttle, debounce, slice 引入方式为
```
import { throttle, debounce, slice } from 'bbb324-tools';
```

#### 使用说明

throttle, debounce 默认delay 200ms
```
<button type="primary" onClick={throttle(fn, delay)}>Button</button>
<button type="primary" onClick={debounce(fn, delay)}>Button</button>

实例
render() {
        return <button type="primary" onClick={throttle(this.dosth.bind(this, 'ts'), 1000)}>Button</button>
    }
    
slice 函数说明

a = slice(['a','b','c','d'], ['b'])

// a = ['a','c','d']
    
```
 
