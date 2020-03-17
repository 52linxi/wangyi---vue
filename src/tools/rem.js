/**
 * 移动端项目 可以配合postcss 解决适配问题
 */
function Rem(){
  //获取设置屏幕的宽
  let width = document.documentElement.clientWidth
  //设置根字体的到校
  let fontSize = width/10;
  //设置根目录的字体大小
  document.documentElement.style=`font-size:${fontSize}px`
} 
Rem();
