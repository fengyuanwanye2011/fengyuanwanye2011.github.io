var posts=["2024/03/25/关于新站开放/","2024/03/26/奇幻服务器官网/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };