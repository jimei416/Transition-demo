# vue-demo

这是一个关于在KeepAlive中使用Transition出现的问题的复现仓库。

问题表现为当Transition由v-show=false触发时，离开过渡未结束前若切换路由，再次回到原页面，Transition组件内容会继续展示，没有受到v-show的控制
![gif](<Screenity video - Apr 2, 2025.gif>) public
