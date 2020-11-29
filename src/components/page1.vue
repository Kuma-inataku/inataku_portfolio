<template>
  <div>
    <div id="app"><!-- ここからVue-carousel -->
      <carousel class="top-carousel" autoplay="true" loop="true" speed="2000" per-page="1" autoplayTimeout="4500">
        <!-- <slide>
          <img src="" alt="">
        </slide>
        <slide>
          <img src="" alt="">
        </slide> -->
        <slide v-for="n in 4">
          <div class="slider-inner">
              {{n}}
          </div>
        </slide>
      </carousel>
    </div><!-- ここまでVue-carousel -->
      <div class="t-subtitle">
        <div class="t-subtitle-comment">
          <h2>Hello, J-Rock World!</h2>
          <p>J-Rockのあらゆる「困った」を即解決！</p>
        </div>
      </div>
      <router-link to="/page2" class="router">LIST</router-link>
      <router-link to="/page3" class="router">DEATAIL</router-link>
          <div class="container">
      <div class="t-c-search">
        <h3>フリーワード検索</h3>
        <form action="../LIST/index.html">
          <button type="submit" class="word-submit"></button>
          <input type="text" class="word-search" placeholder="キーワードを入力ください" name="freeword">
        </form>
      </div>
      <div class="other_search">
        <div class="main">
          <h3>カテゴリ検索</h3>
          <ul class="t-m-category">
            <li>
              <a href="">フェス 初心者</a>
            </li>
            <li>
              <a href="">ライブハウス 初心者</a>
            </li>
            <li>
              <a href="">フェス 注意点</a>
            </li>
            <li>
              <a href="">ツーステ</a>
            </li>
            <li>
              <a href="">ROCKIN'ON JAPAN</a>
            </li>
            <li>
              <a href="">日本の米は世界一</a>
            </li>
          </ul>
        </div>
        <div class="side">
          <h3>「めっちゃE」ランキング検索</h3>
          <ul class="t-s-search">
            <li class="ranking_1">
              <a href="#">【失敗しない！】初心者必見！フェスに持っていくもの10選！
              </a>
            </li>
            <li class="ranking_2">
              <a href="#"> 【これだけ気を付けよう！】フェスを楽しむための注意点3選！</a>
            </li>
            <li class="ranking_3">
              <a href="#">【完全攻略！】初心者邦ロックロードマップ！</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
/* ここからVue-slide */
.VueCarousel{
  height: 600px;
}
.VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide{
  height: 100% !important;
}
.VueCarousel-slide .slider-inner {
  height: 100%;
  background-color: #62caaa; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  color: #fff; 
  border: 2px solid #ccc;
  font-size: 30px; 
  border-radius: 10px;
}
.t-subtitle{
  position: absolute;
  top: 60%;
  left: 5%;
  width: 350px;
  height: 100px;
  background-color:rgba(255,255,255,0.7);
}
.t-subtitle-comment{
  background-color:rgba(255,255,255,0.7);
  position: absolute;
  top: 75%;
  left: 15%;
  -webkit-transform : translate(-10%,-60%);
  transform : translate(-10%,-60%);
  width: 350px;
  height: 100px;
  text-align: center;/*一応BOX内の文字も中央寄せ*/
}
.t-c-search{
  border-bottom: 2px solid #ccc;
}
h3{
  margin-bottom: 30px;
}
.word-search{
  top: 50%;
  left: 45%;
  transform: translateY(-50%);
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px 10px 8px 40px;
  font-size: 15px;
  background-size: 18px;
  outline: none;
}
.word-submit{
  top: 50%;
  left: 45%;
  transform: translateY(-50%);
  width: 30px;
  height: 50%;
  z-index: 1;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

/* ここからカテゴリ検索 */
.other_search{
  display: flex;
  flex-flow: row;
}
.main{
  width: 50%;
}
.t-m-category{
  display: flex;
  flex-wrap: wrap;
  /* white-space: nowrap; */
}
.t-m-category li{
  background:rgb(230, 230, 230, 0.8);
  margin: 10px;
  padding: 10px;
}
/* ここからランキング検索 */
.side{
  width: 50%;
  border-left: 2px solid #ccc;
}
.t-s-search{
  background:rgb(230, 230, 230, 0.8);
  margin-left: 10px;
  padding-top: 10px;
  display: inline-block;
}
.t-s-search li{
  margin-bottom: 10px;
}
.ranking_1{
  border-bottom: 1px dotted #000;
}
.ranking_2{
  border-bottom: 1px dotted #000;
}
.ranking_1::before{
  content: "1位";
}
.ranking_2::before{
  content: "2位";
}
.ranking_3::before{
  content: "3位";
}
/* 遷移ボタンデザイン */
.router{
  background: #ffd803;
  padding: 10px;
  margin: 20px;
  }
  
</style>