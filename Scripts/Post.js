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


$(document).ready(function() {
  populateCategories(); // Populate categories on page load
  
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