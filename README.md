## Rolling-Parallax

这该死的高级感，视差滚动效果～

参照了网上的案例，总结出 3 种实现滚动视差的 demo

1. 结合 js 改变元素位置实现视差效果
2. 仅使用 css，核心在于 background-attachment: fixed，使得图片相对于视口固定，从而实现视差效果
3. 仅使用 css，核心在于 transform-style: preserve-3d; transform: translateZ(-1px)，使得各个元素在 Z 轴上的位置不同，从而实现视差效果

## 预览图
![1](https://user-images.githubusercontent.com/53120187/219317434-7b34a775-f9fe-41d0-b9c7-ffa6ab9c8e1d.gif)

![3](https://user-images.githubusercontent.com/53120187/219005169-aab8df28-7b22-4d4c-9937-edffadc02b01.png)

![6](https://user-images.githubusercontent.com/53120187/219317498-e587ef16-9a3f-4704-be9f-379f457e77d7.gif)


## 博客地址（附详解）  
https://juejin.cn/post/7200653122637103164/
