function handleSearch() {
    var query = document.getElementById('searchQuery').value.trim();
    if (query) {
        window.location.href = `newList.html?q=${encodeURIComponent(query)}`;
    }
    return false; // Prevent form submission
}