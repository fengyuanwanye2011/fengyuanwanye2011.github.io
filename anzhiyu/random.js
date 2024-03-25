var posts=["2024/03/25/hello-world/","2024/03/25/关于新站开放/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };