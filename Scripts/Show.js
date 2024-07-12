document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  const date = urlParams.get('date');
  const title = urlParams.get('title');
  const description = urlParams.get('description');
  const image = urlParams.get('image');
  const likes = urlParams.get('likes');
  const comments = urlParams.get('comments');
  const views = urlParams.get('views');

  document.getElementById('user-image').src = './img/Profile.jpg'; // Example profile image
  document.getElementById('user-name').innerText = 'User Name'; // Example user name
  document.getElementById('post-date').innerText = date;
  document.getElementById('post-image').src = image;
  document.getElementById('post-title').innerText = title;
  document.getElementById('post-text').innerText = description;
  document.getElementById('likeCount').innerText = likes;
  document.getElementById('commentCount').innerText = comments;
  document.getElementById('viewCount').innerText = views;
});
// External JavaScript file for handling like button functionality
$(document).ready(function() {
    updateCommentCount(); // Initial update of comment count

    // Handle form submission
  $('#commentForm').submit(function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Get comment text from textarea
    var commentText = $('#commentText').val().trim();
    
    if (commentText !== '') {
      // Create HTML for new comment
      var newComment = `
        <div class="media mt-3">
          <img src="./img/Profile.jpg" class="rounded-circle me-2 mr-3 mt-2" width="30px" alt="Profile">
          <div class="media-body">
            <h5 class="mt-0">User</h5>
            ${commentText}
          </div>
        </div>
      `;
      
      // Append new comment to comments list
      $('#commentsList').append(newComment);
      // Update comment count
      updateCommentCount();
      // Clear textarea after submission
      $('#commentText').val('');
    }
  });

    $('#likeButton').click(function() {
      $(this).toggleClass('liked'); // Toggle 'liked' class on click
      
      // Update like count
      var currentLikes = parseInt($('#likeCount').text()); // Get current like count
      if ($(this).hasClass('liked')) {
        $('#likeCount').text(currentLikes + 1); // Increment like count if liked
      } else {
        $('#likeCount').text(currentLikes - 1); // Decrement like count if unliked (optional)
      }
    });

// Function to update comment count
  function updateCommentCount() {
    var commentCount = $('#commentsList').children().length; // Get number of comments
    $('#commentCount').text(commentCount); // Update comment count in HTML
  }

  });
  