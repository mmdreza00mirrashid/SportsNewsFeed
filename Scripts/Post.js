var categories = [
  { id: 1, name: 'Football' },
  { id: 2, name: "Basketball" },
  { id: 3, name: "Volleyball" },
  { id: 4, name: "Handball" }
];

// Function to populate category dropdown
function populateCategories() {
  var select = $('#postCategory'); // Get the select element
  select.empty(); // Clear existing options
  
  categories.forEach(function(category) {
    var option = `<option value="${category.id}">${category.name}</option>`; // Create option element
    select.append(option); // Append option to select element
  });
}


function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }


function handleImageUpload(input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      // Display the uploaded image
      const imagePreview = document.createElement('img');
      imagePreview.src = e.target.result;
      imagePreview.classList.add('img-fluid'); // Make image responsive using Bootstrap class
      document.getElementById('imagePreview').innerHTML = ''; // Clear previous image, if any
      document.getElementById('imagePreview').appendChild(imagePreview);
    }
    reader.readAsDataURL(file);
    document.querySelector('.custom-file-label').textContent = file.name; // Update file name in label
  }
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
      category: params.get('category'),
      date: params.get('date'),
      title: params.get('title'),
      description: params.get('description'),
      content: params.get('content'),
      image: params.get('image'),
      likes: params.get('likes'),
      comments: params.get('comments'),
      views: params.get('views')
  };
}

// Function to populate the form fields with the query parameters
function populateForm() {
  const post = getQueryParams();

  document.getElementById('postTitle').value = post.title;
  document.getElementById('postCategory').value = post.category;
  document.getElementById('postExplanation').value = post.description;
  document.getElementById('postContent').value = post.content;

  if (post.image) {
      document.getElementById('imagePreview').innerHTML = `<img src="${post.image}" class="img-thumbnail" style="max-width: 200px;">`;
      document.getElementById('imageUploadInput').removeAttribute('required');
  }
}


$(document).ready(function() {
  populateCategories(); // Populate categories on page load
  populateForm();
  // Handle form submission
  $('#postForm').submit(function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // For demonstration
    var formData = {
      title: $('#postTitle').val(),
      explanation: $('#postExplanation').val(),
      content: $('#postContent').val(),
      category: $('#postCategory').val()
    };
    
    console.log(formData);
  });
});