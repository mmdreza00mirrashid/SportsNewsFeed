document.addEventListener("DOMContentLoaded", function() {
    const newsData = [
        {
            category: 'volleyball',
            date: '15.07.2020',
            title: 'This is the title of the news',
            description: 'News Description',
            image: './img/Volly.jpg', // Add the image path
            likes: 53,
            comments: 0,
            views: 100
        },
        {
            category: 'basketball',
            date: '16.07.2020',
            title: 'lebron',
            description: 'Another news description',
            image: './img/basket.jpg', // Add the image path
            likes: 75,
            comments: 5,
            views: 200
        },
        {
            category: 'soccer',
            date: '16.07.2023',
            title: 'This is a soccer news title',
            description: 'Soccer news description',
            image: './img/football.jpg', // Add the image path
            likes: 100,
            comments: 25,
            views: 300
        }
        // Add more news objects here
    ];

    const newsContainer = document.getElementById('news-container');
    const sortButton = document.getElementById('sortButton');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    function renderNews(data) {
        newsContainer.innerHTML = '';
        data.forEach(news => {
            const newsBlock = document.createElement('div');
            newsBlock.classList.add('news-article');

            var iconClass;
            if(news.category === 'volleyball'){
                iconClass='fa-volleyball-ball';
            }
            else if(news.category === 'basketball'){
                iconClass='fa-basketball-ball';
            }
            else if(news.category === 'soccer'){
                iconClass='fas fa-futbol';
            }
            else{
                iconClass='fa-sport';
            }

            newsBlock.innerHTML = `
                <div class="row mb-3">
                    <div class="col-6">
                        <a href="#" class="text-danger">
                            <i class="fas ${iconClass}"></i> ${news.category}
                        </a>
                    </div>
                    <div class="col-6 text-end">
                        <u>${news.date}</u>
                    </div>
                </div>
                <a href="show.html?category=${encodeURIComponent(news.category)}&date=${encodeURIComponent(news.date)}&title=${encodeURIComponent(news.title)}&description=${encodeURIComponent(news.description)}&image=${encodeURIComponent(news.image)}&likes=${encodeURIComponent(news.likes)}&comments=${encodeURIComponent(news.comments)}&views=${encodeURIComponent(news.views)}" class="text-dark">
                    <img src="${news.image}" class="img-fluid mb-3" alt="${news.title}">
                    <h5>${news.title}</h5>
                    <p>${news.description}</p>
                </a>
                <div class="row">
                    <div class="col-md-4 col-sm-12 mb-2">
                        <div class="views d-flex align-items-center like-button" data-index="${data.indexOf(news)}">
                            <i class="far fa-thumbs-up mr-2"></i> <span class="like-count">${news.likes}</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-2">
                        <div class="views d-flex align-items-center">
                            <i class="far fa-comment-alt mr-2"></i> <span id="commentCount">${news.comments}</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-2">
                        <div class="views d-flex align-items-center">
                            <i class="far fa-eye mr-2"></i> ${news.views}
                        </div>
                    </div>
                </div>
            `;

            newsContainer.appendChild(newsBlock);
        });

        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = button.getAttribute('data-index');
                const likeIcon = button.querySelector('i');
                const likeCount = button.querySelector('.like-count');
                const newsItem = newsData[index];

                if (likeIcon.classList.contains('liked')) {
                    likeIcon.classList.remove('liked', 'text-primary');
                    newsItem.likes -= 1;
                } else {
                    likeIcon.classList.add('liked', 'text-primary');
                    newsItem.likes += 1;
                }

                likeCount.innerText = newsItem.likes;
            });
        });
    }
    function filterNews(query) {
        const filteredNews = newsData.filter(news => {
            const titleMatch = news.title.toLowerCase().includes(query.toLowerCase());
            const descriptionMatch = news.description.toLowerCase().includes(query.toLowerCase());
            return titleMatch || descriptionMatch;
        });
        renderNews(filteredNews);
    }

    sortButton.addEventListener('click', () => {
        const sortedNews = [...newsData].sort((a, b) => b.views - a.views);
        renderNews(sortedNews);
    });

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            filterNews(searchTerm);
        } else {
            renderNews(newsData);
        }
    });
    // Initial render
    
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    console.log(urlParams)
    if (query) {
        filterNews(query);
    } else {
        renderNews(newsData);
    }
});
