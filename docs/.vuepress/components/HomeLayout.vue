<template>
  <div class='book-wrapper'>
    <div v-for="(item, index) in bookList[activeCategory]" :key="index" class="book-item">
      <div class="cover">
        <img :src="item.imgSrc"class="medium-zoom-image">
      </div>
      <div class="info">
        <h3 :title="item.name" class="title">
          <span class="name">{{item.name}}</span>
          <span class="name-badge">
            <span class="badge error" style="vertical-align: top;">想看</span>
          </span>
        </h3>
        <p class="tags">
          <span class="tag">{{item.author}}</span>
        </p>
        <p :title="item.des" class="desc">{{item.des}}</p>
        <!-- <div class="time">
          看完：-<br>
          添加：2020-04-03
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeCategory: {
      type: String,
      default: '',
    }
  },
  created() {
    console.log(666, this.activeCategory);
  },
  data () {
    return {
      bookList: {
        biography: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        culture: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        economy: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        emotioCommunication: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        famousBook: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        history: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        literature: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        manage: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        novel: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        philosophy: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        psychology: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        religion: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        science: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        selfImprovement: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
        workplace: [
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
          { 
            name:'经济学讲义',
            author: '薛兆丰',
            des: '一本经济学思想启蒙的书籍；颠覆思维定式，摆脱直觉和经验的控制，拥有经济学思维和智慧；做个生活在现代社会的明白人，对社会现象或个人经历做出恰如其分的反应',
            imgSrc: '/images/avatar.jpg'
          },
        ],
      },
    };
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
  height: 8rem;
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
