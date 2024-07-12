// Sample data (replace with actual data handling logic)
var posts = [
    { id: 1, title: "Post 1", content: "Content of post 1", status: "pending" },
    { id: 2, title: "Post 2", content: "Content of post 2", status: "approved" },
    { id: 3, title: "Post 3", content: "Content of post 3", status: "pending" }
  ];
  
  var comments = [
    { id: 1, postId: 1, text: "Comment on post 1", status: "pending" },
    { id: 2, postId: 1, text: "Another comment on post 1", status: "approved" },
    { id: 3, postId: 2, text: "Comment on post 2", status: "pending" }
  ];

  var categories = [
    { id: 1, name: 'Football' },
    { id: 2, name: "Basketball" },
    { id: 3, name: "Volleyball" },
    { id: 4, name: "Handball" }
  ];

  
  function populatePosts() {
    var postList = $('#postList');
    postList.empty(); // Clear existing list
    
    posts.forEach(function(post) {
        var badgeClass, statusText;
    
        if (post.status === "pending") {
          badgeClass = "badge-warning";
          statusText = "Pending";
        } else if (post.status === "approved") {
          badgeClass = "badge-success";
          statusText = "Approved";
        } else if (post.status === "denied") {
          badgeClass = "badge-danger"; // Red color for denied status
          statusText = "Denied";
        } else {
          badgeClass = "badge-secondary"; // Default or other statuses
          statusText = "Unknown";
        }
        
        var listItem = `
          <li class="list-group-item">
            <div>
              <h5>${post.title}</h5>
              <p>${post.content}</p>
              <span class="badge ${badgeClass}">${statusText}</span>
            </div>
            <div class="mt-2">
              <button class="btn btn-success btn-sm mr-2" onclick="approvePost(${post.id})">Approve</button>
              <button class="btn btn-danger btn-sm" onclick="denyPost(${post.id})">Deny</button>
            </div>
          </li>
        `;
      
      postList.append(listItem);
    });
  }
  
  // Function to populate comments list
  function populateComments() {
    var commentList = $('#commentList');
    commentList.empty(); // Clear existing list
    
    comments.forEach(function(comment) {
        var badgeClass, statusText;
        if (comment.status === "pending") {
            badgeClass = "badge-warning";
            statusText = "Pending";
          } else if (comment.status === "approved") {
            badgeClass = "badge-success";
            statusText = "Approved";
          } else if (comment.status === "denied") {
            badgeClass = "badge-danger"; // Red color for denied status
            statusText = "Denied";
          } else {
            badgeClass = "badge-secondary"; // Default or other statuses
            statusText = "Unknown";
          }
      var listItem = `
        <li class="list-group-item">
          <p>${comment.text}</p>
          <span class="badge ${badgeClass}">${statusText}</span>
          <div class="mt-2">
            <button class="btn btn-success btn-sm mr-2" onclick="approveComment(${comment.id})">Approve</button>
            <button class="btn btn-danger btn-sm" onclick="denyComment(${comment.id})">Deny</button>
          </div>
        </li>
      `;
      
      commentList.append(listItem);
    });
  }

  
  
  // Example functions for approving/denying posts and comments (replace with actual logic)
  function approvePost(postId) {
    var post = posts.find(p => p.id === postId);
    if (post) {
      post.status = "approved";
      populatePosts();
    }
  }
  
  function denyPost(postId) {
    var post = posts.find(p => p.id === postId);
    if (post) {
      post.status = "denied"; // Corrected from "approved"
      populatePosts();
    }
  }
  
  function approveComment(commentId) {
    var comment = comments.find(c => c.id === commentId);
    if (comment) {
      comment.status = "approved";
      populateComments();
    }
  }
  
  function denyComment(commentId) {
    var comment = comments.find(c => c.id === commentId);
    if (comment) {
      comment.status = "denied"; // Corrected from "approved"
      populateComments();
    }
  }
  

// Function to populate categories
function populateCategories() {
    var categoryList = $('#categoryList');
    categoryList.empty(); // Clear existing list
    
    categories.forEach(function(category) {
      var listItem = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${category.name}
          <button class="btn btn-danger btn-sm" onclick="removeCategory(${category.id})">Remove</button>
        </li>
      `;
      
      categoryList.append(listItem);
    });
  }
  
  // Function to add a new category
  function addCategory() {
    var categoryName = $('#categoryName').val();
    if (categoryName.trim() !== '') {
      var newCategory = {
        id: categories.length + 1, // Generate a unique ID (you may want to handle this differently in a real scenario)
        name: categoryName
      };
      
      categories.push(newCategory);
      populateCategories();
      
      // Clear input field after adding
      $('#categoryName').val('');
    }
  }
  
  // Function to remove a category
  function removeCategory(categoryId) {
    categories = categories.filter(function(category) {
      return category.id !== categoryId;
    });
    
    populateCategories();
  }  
  // Populate initial lists on page load
  $(document).ready(function() {
    populatePosts();
    populateComments(); 
  // Populate categories list
  
    populateCategories();
  });