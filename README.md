### 使用说明

#### 安装方法
```
npm i bbb324-tools --save
```
#### 引入说明
工具组目前包含2个方法，throttle, debounce, 引入方式为
```
import { throttle, debounce } from 'bbb324-tools';
```

#### 使用说明
```
<button type="primary" onClick={throttle(fn, delay)}>Button</button>
<button type="primary" onClick={debounce(fn, delay)}>Button</button>

实例
render() {
        return <button type="primary" onClick={throttle(this.dosth.bind(this, 'ts'), 1000)}>Button</button>
    }
```
 
