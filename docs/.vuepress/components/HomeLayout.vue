<template>
  <div class='book-wrapper'>
    <!-- <div v-for="(item, index) in 9" :key="index" class="item">经济学讲义</div> -->
    <div v-for="(item, index) in 9" :key="index" class="book-item">
      <div class="cover">
        <img src="/images/avatar.jpg" class="medium-zoom-image">
      </div>
      <div class="info">
        <h3 title="你当像鸟飞往你的山" class="title">
          <span  class="name">你当像鸟飞往你的山</span>
          <span  class="name-badge">
            <span data-v-312e2a2a="" class="badge error" style="vertical-align: top;">
              想看
            </span>
          </span>
        </h3>
        <p class="tags">
          <span class="tag">[美]塔拉·韦斯特弗</span>
        </p>
        <p title="出版年： 2019-10-20" class="desc">
          出版年： 2019-10-20
        </p>
        <div class="time">
          看完：-<br >
          添加：2020-04-03
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
  .book-wrapper {
    color: #AAA;
    display: flex;
    flex-wrap: wrap;
  }
  .book-item {
    margin: 0 0 1.5rem;
    padding: .5rem .8rem;
    width: 45%;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
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
  }
  .info {
    width: 11rem;
    margin-left: .8rem;
  }
  .info .title {
    margin: .2rem 0 .5rem;
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
    border-radius: .25rem;
    padding: 0 6px;
    color: #fff;
    background-color: #ff9c99;
  }
  .info .tags {
    margin: .2rem 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .info .tags .tag {
    padding: .2rem;
    font-size: .5rem;
    background: #a3a3a3;
    color: #fff;
    border-radius: .25rem;
    margin-right: .2rem;
  }
  .info .desc {
    margin: 0 0 .5rem;
    font-size: .8rem;
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
    font-size: .6rem;
    color: #808080;
    height: 22%;
  }
  @media screen and (max-width: 980px) {
    .book-item {
      margin: 0 0 1.5rem;
      padding: .5rem .8rem;
      width: 100%;
      box-shadow: var(--box-shadow);
      border-radius: .5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
    }
  }
</style>
