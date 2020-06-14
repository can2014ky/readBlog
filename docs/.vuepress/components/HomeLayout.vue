<template>
  <div class='book-wrapper'>
    <!-- <div v-for="(item, index) in 9" :key="index" class="item">经济学讲义</div> -->
    <div v-for="(item, index) in 6"
         :key="index"
         class="book-item">
      <div class="cover">
        <img src="/images/avatar.jpg"
             class="medium-zoom-image">
      </div>
      <div class="info">
        <h3 title="你当像鸟飞往你的山"
            class="title">
          <span class="name">你当像鸟飞往你的山</span>
          <span class="name-badge">
            <span data-v-312e2a2a=""
                  class="badge error"
                  style="vertical-align: top;">
              想看
            </span>
          </span>
        </h3>
        <p class="tags">
          <span class="tag">[美]塔拉·韦斯特弗</span>
        </p>
        <p title="出版年： 2019-10-20
          ★ 奇迹！一部新人处女作，上市第一周即登上《纽约时报》畅销榜，至今已累计80周，仍高居Top1，全美销量破百万册，作者因此书被《时代周刊》评为“年度影响力人物”
          ★ 比尔•盖茨年度荐书 第一名
          ★ 美国亚马逊年度编辑选书 第一名
          ★《纽约时报》《华尔街日报》《波士顿环球报》畅销书排行 第一名
          ★ Goodreads读者票选超越米歇尔《成为》，获年度最佳图书
          ★《洛杉矶时报》最佳传记奖"
           class="desc">
          出版年： 2019-10-20
          ★ 奇迹！一部新人处女作，上市第一周即登上《纽约时报》畅销榜，至今已累计80周，仍高居Top1，全美销量破百万册，作者因此书被《时代周刊》评为“年度影响力人物”
          ★ 比尔•盖茨年度荐书 第一名
          ★ 美国亚马逊年度编辑选书 第一名
          ★《纽约时报》《华尔街日报》《波士顿环球报》畅销书排行 第一名
          ★ Goodreads读者票选超越米歇尔《成为》，获年度最佳图书
          ★《洛杉矶时报》最佳传记奖
        </p>
        <div class="time">
          看完：-<br>
          添加：2020-04-03
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
};
</script>
<style>
.book-wrapper {
  color: #aaa;
  display: flex;
  flex-wrap: wrap;
}
.book-item {
  margin: 0 0 1.5rem;
  padding: 0.5rem 0.8rem;
  width: 45%;
  box-shadow: var(--box-shadow);
  border-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
.cover {
  align-self: center;
  height: 100%;
}
.cover img {
  width: 9rem;
  min-width: 8.5rem;
  max-height: 12rem;
  height: 100%;
}
.info {
  width: 11rem;
  margin-left: 0.8rem;
}
.info .title {
  margin: 0.2rem 0 0.5rem;
  white-space: nowrap;
  font-size: 1.35rem;
}
.info .title .name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 75%;
  display: inline-block;
}
.info .title .name-badge {
  white-space: nowrap;
}
.info .title .name-badge .badge {
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 0.25rem;
  padding: 0 6px;
  color: #fff;
  background-color: #ff9c99;
}
.info .tags {
  margin: 0.2rem 0;
  overflow: hidden;
  white-space: nowrap;
}
.info .tags .tag {
  padding: 0.2rem;
  font-size: 0.5rem;
  background: #a3a3a3;
  color: #fff;
  border-radius: 0.25rem;
  margin-right: 0.2rem;
}
.info .desc {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  height: 5rem;
}
.info .time {
  margin: 0;
  font-size: 0.6rem;
  color: #808080;
  height: 22%;
}
@media screen and (max-width: 980px) {
  .book-item {
    margin: 0 0 1.5rem;
    padding: 0.5rem 0.8rem;
    width: 100%;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }
}
</style>
