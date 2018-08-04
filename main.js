!function () {
  let duration = 50
  function writeCode(code) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setTimeout(function run() {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      } else {

      }
    }, duration)
  }
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })

  let code = `
 /*
  * 大家好，我是汤永阳，今天来给大家介绍一下如何使用CSS画只pikachu
  * 首先，需要准备皮卡丘的背景
  */
 .preview-wrapper{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FDE348;
 }
 .wrapper {
  width: 100%;
  height: 165px;
  position: relative;
}
 /*
  * 接下来，画皮卡丘的鼻子
  */
 .nose{
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
 }
 /*
  * 接下来，画皮卡丘的眼睛
  */
 .eye{
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
 }
 /*
  * 眼睛里面的珠子
  */
 .eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top:-1px;
  border: 2px solid #000;
 }
 /*
  * 左眼
  */
 .eye.left{
  right: 50%;
  margin-right: 90px;
 }
 /*
  * 右眼
  */
 .eye.right{
  left: 50%;
  margin-left: 90px;
 }
 /*
  * 然后，画皮卡丘的脸
  */
 .face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
 }
 /*
  * 将脸放到正确的位置
  */
 .face.left{
  right: 50%;
  margin-right: 116px;
 }
 .face.right{
  left: 50%;
  margin-left: 116px;
 }
 /*
  * 上嘴唇
  */
 .upperLip{
  height: 25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 50px;
  background: #FDE348;
 }
 .upperLip.left{
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
  z-index: 1;
 }
 .upperLip.right{
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
  z-index: 1;
 }
 /*
  * 下嘴唇
  */
 .lowerLip-wrapper{
  bottom: -35px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 140px;
  overflow: hidden;
  width: 300px;
  z-index: 0;
 }
 .lowerLip{
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
 }
 /*
  * 小舌头
  */
 .lowerLip::after{
  content: '';
  position: absolute;
  bottom: -1px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
 }
 /*
  * 皮卡丘画完了
  */
 `
  writeCode(code)

}()
