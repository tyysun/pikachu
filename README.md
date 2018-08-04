# pikachu

使用HTML,CSS,JavaScript展现一只pikachu如何画出来,浏览地址  



https://tyysun.github.io/pikachu/Pikachu.html    

观看过程中如果觉得速度慢，有三挡速度可供选择   



![](https://upload-images.jianshu.io/upload_images/3429455-7780dabd9e0fef82.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)     


核心代码   
```
function writeCode(code) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setTimeout(function run() {              //通过setTimeout控制相同的时间后，展示区代码与CSS同时变动
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, time)                    //代码未显示完前重复run
      }                                               //通过time控制展示速度
    }, time)
  }

  let code =`
  pikachu的CSS代码
  `
```
