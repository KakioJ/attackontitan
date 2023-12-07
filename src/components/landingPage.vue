<template>
    <div class="main-body">
        <div class="left-content">
            <div class="introduce-title">
                <img src="../assets/image/left/menu.png" alt="目录页面">
                <img src="../assets/image/left/Group1.png" alt="标题">
            </div>
            <div class="introduce-detail">
                <img src="../assets/image/left/title.png" alt="进击的巨人内容标题">
                <img src="../assets/image/left/time.png" alt="进击的巨人时间标题">
                <img src="../assets/image/left/text.png" alt="进击的巨人文字介绍">
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

        </div>
    </div>
</template>

<script>
export default {
    name: 'landingPage',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../assets/css/attackontitan.css);

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

/* a {
  color: #42b983;
} */</style>