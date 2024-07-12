window.onload = function() {
// Sample data representing posts
const postsData = [
    {
      userName: "User Name",
      timestamp: "June 24 2023, 13:40 pm",
      postText: "The Euro 2024 soccer Championship is winding down, with England and Spain meeting in Sunday's final. While the hosts Germany crashed out in the quarterfinals, the tournament is being hailed a success. But there have been controversies.",
      postImage: "./img/euro.png",
      likes: 53,
      comments: 45,
      views: 100
    },
    {
      userName: "User Name",
      timestamp: "June 24 2023, 13:40 pm",
      postText: "Spain 'have a score to settle with England star after he drove them crazy with arrogant attitude in the U21 European Championship last summer'",
      postImage: "./img/spainvif.avif",
      likes: 120,
      comments: 45,
      views: 26
    }
  ];
  

  

  const PostContainer = document.getElementById('post-container');
  var userName = localStorage.getItem("current") || '';
  // Function to create a single post element
  function populatePosts(data) {
    PostContainer.innerHTML = '';
    data.forEach(news => {
        const newsBlock = document.createElement('div');
        newsBlock.classList.add('news-article');
        const post = {
            category: news.category,
            date: news.timestamp,
            title: 'Post by Username',
            description: news.postText,
            content: news.postText,
            image: news.postImage, // URL or path to the image
            likes: news.likes,
            comments: news.comments,
            views: news.views
        };
        
        const queryString = new URLSearchParams(post).toString();
        newsBlock.innerHTML = `
        <div class="post-container bg-white p-3 rounded mb-3">
        <div class="post-row d-flex justify-content-between mb-3">
            <div class="user-profile d-flex align-items-center">
                <img src="./img/Profile.jpg" class="rounded-circle me-2" width="45px">
                <div>
                    <p class="mb-0">${userName}</p> 
                    <span class="text-muted">${news.timestamp}</span>
                </div>
            </div>
            <div class="dropdown">
                <a href="#" class="text-decoration-none dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="post.html?${queryString}">Edit</a>
                  <a class="dropdown-item" href="#">Delete</a>

                </div>
            </div> 
        </div>
        <p class="post-text text-muted">${news.postText}<br> <a href="show.html?category=SimpleTitle&description=${encodeURIComponent(news.postText)}&image=${encodeURIComponent(news.postImage)}&likes=${encodeURIComponent(news.likes)}&comments=${encodeURIComponent(news.comments)}&views=${encodeURIComponent(news.views)}">Read More ...</a></p>
        <img src="${news.postImage}" class="post-img img-fluid rounded mb-3">
        <div class="post-row d-flex justify-content-between">
            <div class="row activity-icons d-flex">
                <div class="col-md-4 col-sm-12 mb-2">
                  <div class="views d-flex align-items-center">
                    <i class="far fa-thumbs-up mr-2"></i> ${news.likes}
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 mb-2">
                  <div class="views d-flex align-items-center">
                    <i class="far fa-comment-alt mr-2"></i> ${news.comments}
                  </div>
                </div>
                <div class="col-md-4 col-sm-12 mb-2">
                  <div class="views d-flex align-items-center">
                    <i class="far fa-eye mr-2"></i> ${news.views}
                  </div>
                </div>
            </div>
            <div class="post-profile-icon d-flex align-items-center">
                <img src="./img/Profile.jpg" class="rounded-circle me-2" width="20px">
                <i class="fas fa-caret-down"></i>
            </div>
        </div>
    </div>
        `;

        PostContainer.appendChild(newsBlock);
    });
}
  // Call populatePosts with your data
  populatePosts(postsData);
  const currentUser = localStorage.getItem("name")
  co
  alert(`Welcome , ${currentUser}`);
    // Check if the value is "admin"
    if (currentUser === "admin") {
        // Show the "Admin Dashboard" link
        document.getElementById("adminDashboardLink").style.display = "block";
    }
}