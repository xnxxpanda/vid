document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value;
        searchResults.textContent = `You searched for: "${searchTerm}"`;
    });
});
