# pconemusic

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 技术栈
- Vue全家桶
- axios
- Element-UI组件库


## 项目初始化
1. 按需引入 Element-UI 组件
安装： `npm i element-ui -S`
按需引入：
1. `npm install babel-plugin-component -D`  先安装一个babel插件
2. 在.babelrc文件中添加以下代码
```javascript
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
3. 可以进行按需引入组件了
4. 如果按照官方的步骤有可能出现错误  这里找到一篇文章 如果出现错误后可以参考 
  - https://blog.csdn.net/hahahhahahahha123456/article/details/102816457


### 项目组件结构梳理
- Layout.vue 布局组件
  - PcHeader.vue 头部组件
  - PcAside.vue 侧边栏组件

- Dicovery.vue 发现音乐组件
  - Swiper.vue 轮播组件
  - Disrecommend.vue 发现音乐-推荐歌单组件
  - Disnewmusic.vue 发现音乐-最新音乐组件
  - Disnewmv.vue 发现音乐-最新mv组件

- Playlist.vue 推荐歌单组件
  - Playchild.vue 推荐歌单子组件
    - PlaylistDetail 二级路由 歌单详情子组件
      - SongDesc 歌单用户评论组件 (暂未开发)

- Newmusic.vue 最新音乐组件
  - Newchild.vue 最新音乐子组件

- Newmv.vue 最新mv组件
  - Newmvchild.vue 最新MV子组件
    - MvDetail.vue MV 详情组件

- Audio.vue 播放器组件

- Search.vue 搜索组件
  - SearchMusic.vue 搜索音乐组件
  - SearchList.vue  搜索歌单组件
  - SearchMv.vue    搜索MV组件

### 本项目有些页面布局有一些其实是可以复用的但是怕组件过多自己搞不清就没有去重构了。谅解
