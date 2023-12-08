<template>
    <div class="main-body">
        <div class="left-content">
            <div class="introduce-title">
                <img class="title-menu" src="../assets/image/left/menu.png" alt="目录页面">
                <img class="title-Group1" src="../assets/image/left/Group1.png" alt="标题">
            </div>
            <div class="introduce-detail">
                <img class="detail-title" src="../assets/image/left/title.png" alt="进击的巨人内容标题">
                <img class="detail-time" src="../assets/image/left/time.png" alt="进击的巨人时间标题">
                <img class="detail-text" src="../assets/image/left/text.png" alt="进击的巨人文字介绍">
            </div>
            <div class="nav-list">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/"><span>Facebook</span></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/"><span>Twitter</span></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><span>Instagram</span></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/"><span>Youtube</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right-content">
            <div class="slide-show">
                <div class="slide-container">
                    <img src="../assets/image/right/visual_02.png" alt="轮播图1">
                    <img src="../assets/image/right/visual_03.png" alt="轮播图2">
                </div>
                <div class="slide-toolbar">
                    <div class="slide-switch">
                        <img src="../assets/image/right/Group 4.png" alt="向左切换">
                        <img src="../assets/image/right/Group 5.png" alt="向右切换">
                    </div>
                </div>
                <div class="slide-result">
                    <span>01</span>
                    <img src="../assets/image/right/Vector1.png" alt="中间横线">
                    <span>02</span>
                </div>
            </div>
            <div class="trailer-show">
                <div class="trailer-title">
                    <img src="../assets/image/right/Trailers.png" alt="trailers标题">
                </div>
                <div class="trailer-content">
                    <div class="traile-content-div1">
                        <img src="../assets/image/right/image10.png" alt="图1">
                        <img src="../assets/image/right/image14.png" alt="蒙版图">
                        <img src="../assets/image/right/Group.png" alt="播放">
                        <img src="../assets/image/right/1.png" alt="第一个">
                    </div>
                    <div class="traile-content-div2">
                        <img src="../assets/image/right/image11.png" alt="图2">
                        <img src="../assets/image/right/image14.png" alt="蒙版图">
                        <img src="../assets/image/right/Group.png" alt="播放">
                        <img src="../assets/image/right/4.png" alt="第二个">
                    </div>
                    <div class="traile-content-div3">
                        <img src="../assets/image/right/image12.png" alt="图3">
                        <img src="../assets/image/right/image14.png" alt="蒙版图">
                        <img src="../assets/image/right/Group.png" alt="播放">
                        <img src="../assets/image/right/3.png" alt="第三个">
                    </div>
                    <div class="traile-content-div4">
                        <img src="../assets/image/right/image13.png" alt="图1">
                        <img src="../assets/image/right/image14.png" alt="蒙版图">
                        <img src="../assets/image/right/Group.png" alt="播放">
                        <img src="../assets/image/right/2.png" alt="第四个">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'landingPage',
    props: {
        msg: String
    }
};
import attackontitan  from '../assets/js/attackontitan.js';
window.onload = function() {
    attackontitan;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../assets/css/attackontitan.css);
</style>