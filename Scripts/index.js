window.onload = function() {
    const newsData = [
        {
            category: 'volleyball',
            title: 'This is title of the volleyball news',
            description: 'volleyball News Description',
            date: '15.07.2023',
            image: './img/Volly.jpg',
            likes: 53,
            comments: 0,
            views: 100
        },
        {
            category: 'basketball',
            title: 'This is title of the basketball news',
            description: 'Basketball News Description',
            date: '15.07.2020',
            image: './img/basket.jpg',
            likes: 75,
            comments: 5,
            views: 200
        },
        {
            category: 'soccer',
            title: 'This is title of the news',
            description: 'News Description',
            date: '15.07.2020',
            image: './img/football.jpg',
            likes: 53,
            comments: 0,
            views: 100
        },
        {
            category: 'volleyball',
            title: 'Volleyball News 1',
            date: '16.07.2020',
            image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
        },
        {
            category: 'basketball',
            title: 'Basketball News 1',
            date: '16.07.2020',
            image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'
        },
        {
            category: 'soccer',
            title: 'Soccer News 1',
            date: '16.07.2020',
            image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp'
        },
        {
            category: 'soccer',
            title: 'Soccer News 2',
            date: '16.07.2020',
            image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'
        },
        {
            category: 'volleyball',
            title: 'Volleyball News 2',
            date: '16.07.2020',
            image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/032.webp'
        },
        {
            category: 'volleyball',
            title: 'Volleyball News 3',
            date: '16.07.2020',
            image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/033.webp'
        },
        {
            category: 'volleyball',
            title: 'Volleyball News 4',
            date: '16.07.2020',
            image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/034.webp'
        }
        // Add more news objects here
    ];

    const soccerNewsContainer = document.getElementById('soccer-news-container');
    const volleyballNewsContainer = document.getElementById('volleyball-news-container');
    const basketballNewsContainer = document.getElementById('basketball-news-container');

    function populateSoccerNews() {
        soccerNewsContainer.innerHTML = ''; // Clear previous content

        const soccerNews = newsData.filter(news => news.category === 'soccer');

        soccerNews.forEach((news, index) => {
            const newsBlock = document.createElement('div');
            newsBlock.classList.add('mb-4', 'border-bottom', 'pb-2');

            if (index === 0 && news.description && news.likes !== undefined && news.comments !== undefined) {
                // Featured news with description, likes, and comments
                newsBlock.innerHTML = `
                    <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                        data-mdb-ripple-color="light">
                        <img src="${news.image}" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                        </a>
                    </div>

                    <div class="row mb-3">
                        <div class="col-6">
                            <a href="" class="text-info">
                                <i class="fas fa-futbol"></i>
                                Soccer
                            </a>
                        </div>

                        <div class="col-6 text-end">
                            <u>${news.date}</u>
                        </div>
                    </div>

                    <a href="show.html?category=${encodeURIComponent(news.category)}&date=${encodeURIComponent(news.date)}&title=${encodeURIComponent(news.title)}&description=${encodeURIComponent(news.description)}&image=${encodeURIComponent(news.image)}&likes=${encodeURIComponent(news.likes)}&comments=${encodeURIComponent(news.comments)}&views=${encodeURIComponent(news.views)}" class="text-dark">
                        <h5>${news.title}</h5>
                        <p>${news.description}</p>
                    </a>

                    <div class="row">
                        <div class="col-md-4 col-sm-12 mb-2">
                            <div class="views d-flex align-items-center">
                                <i class="far fa-thumbs-up mr-2"></i> <span id="likeCount">${news.likes}</span>
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
                    <hr />
                `;
            } else if(index<4) {
                // Other soccer news without description, likes, and comments
                newsBlock.innerHTML = `
                    <a href="" class="text-dark">
                        <div class="row">
                            <div class="col-3">
                                <img src="${news.image}" class="img-fluid shadow-1-strong rounded" alt="News Image" />
                            </div>

                            <div class="col-9">
                                <p class="mb-2"><strong>${news.title}</strong></p>
                                <p><u>${news.date}</u></p>
                            </div>
                        </div>
                    </a>
                `;
            }

            soccerNewsContainer.appendChild(newsBlock);
        });
    }
    function populateVolleyballNews() {
        volleyballNewsContainer.innerHTML = ''; // Clear previous content

        const volleyballNews = newsData.filter(news => news.category === 'volleyball');

        volleyballNews.forEach((news , index)=> {
            const newsBlock = document.createElement('div');
            newsBlock.classList.add('mb-4', 'border-bottom', 'pb-2');

            if (index === 0 && news.description && news.likes !== undefined && news.comments !== undefined){
                newsBlock.innerHTML = `
                <div class="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4"
                    data-mdb-ripple-color="light">
                    <img src="${news.image}" class="img-fluid" alt="Volleyball News Image" />
                    <a href="show.html?category=${encodeURIComponent(news.category)}&date=${encodeURIComponent(news.date)}&title=${encodeURIComponent(news.title)}&description=${encodeURIComponent(news.description)}&image=${encodeURIComponent(news.image)}&likes=${encodeURIComponent(news.likes)}&comments=${encodeURIComponent(news.comments)}&views=${encodeURIComponent(news.views)}" class="text-dark">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a>
                </div>

                <div class="row mb-3">
                    <div class="col-6">
                        <a href="" class="text-danger">
                            <i class="fas fa-volleyball-ball"></i>
                            Volleyball
                        </a>
                    </div>

                    <div class="col-6 text-end">
                        <u>${news.date}</u>
                    </div>
                </div>

                <a href="show.html?category=${encodeURIComponent(news.category)}&date=${encodeURIComponent(news.date)}&title=${encodeURIComponent(news.title)}&description=${encodeURIComponent(news.description)}&image=${encodeURIComponent(news.image)}&likes=${encodeURIComponent(news.likes)}&comments=${encodeURIComponent(news.comments)}&views=${encodeURIComponent(news.views)}" class="text-dark">
                    <h5>${news.title}</h5>
                    <p>
                    ${news.description}
                    </p>
                </a>

                <div class="row">
                    <div class="col-md-4 col-sm-12 mb-2">
                        <div class="views d-flex align-items-center">
                            <i class="far fa-thumbs-up mr-2"></i> <span id="likeCount">53</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-2">
                        <div class="views d-flex align-items-center">
                            <i class="far fa-comment-alt mr-2"></i> <span id="commentCount">0</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 mb-2">
                        <div class="views d-flex align-items-center">
                            <i class="far fa-eye mr-2"></i> 100
                        </div>
                    </div>
                </div>
                <hr />
            `;

            }
            else if(index<4){
                newsBlock.innerHTML = `
                    <a href="" class="text-dark">
                        <div class="row">
                            <div class="col-3">
                                <img src="${news.image}" class="img-fluid shadow-1-strong rounded" alt="News Image" />
                            </div>

                            <div class="col-9">
                                <p class="mb-2"><strong>${news.title}</strong></p>
                                <p><u>${news.date}</u></p>
                            </div>
                        </div>
                    </a>
                `;
            }

            volleyballNewsContainer.appendChild(newsBlock);
        });
    }

    function populateBasketballNews() {
        basketballNewsContainer.innerHTML = ''; // Clear previous content

        const basketballNews = newsData.filter(news => news.category === 'basketball');

        basketballNews.forEach((news , index)=> {
            const newsBlock = document.createElement('div');
            newsBlock.classList.add('mb-4', 'border-bottom', 'pb-2');

            if (index==0 && news.description && news.likes !== undefined && news.comments !== undefined) {
                // Featured basketball news with description, likes, and comments
                newsBlock.innerHTML = `
                    <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                        data-mdb-ripple-color="light">
                        <img src="${news.image}" class="img-fluid" />
                        <a href="show.html?category=${encodeURIComponent(news.category)}&date=${encodeURIComponent(news.date)}&title=${encodeURIComponent(news.title)}&description=${encodeURIComponent(news.description)}&image=${encodeURIComponent(news.image)}&likes=${encodeURIComponent(news.likes)}&comments=${encodeURIComponent(news.comments)}&views=${encodeURIComponent(news.views)}" class="text-dark">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                        </a>
                    </div>

                    <div class="row mb-3">
                        <div class="col-6">
                            <a href="" class="text-warning">
                                <i class="fas fa-basketball-ball"></i>
                                Basketball
                            </a>
                        </div>

                        <div class="col-6 text-end">
                            <u>${news.date}</u>
                        </div>
                    </div>

                    <a href="show.html?category=${encodeURIComponent(news.category)}&date=${encodeURIComponent(news.date)}&title=${encodeURIComponent(news.title)}&description=${encodeURIComponent(news.description)}&image=${encodeURIComponent(news.image)}&likes=${encodeURIComponent(news.likes)}&comments=${encodeURIComponent(news.comments)}&views=${encodeURIComponent(news.views)}" class="text-dark">
                        <h5>${news.title}</h5>
                        <p>${news.description}</p>
                    </a>

                    <div class="row">
                        <div class="col-md-4 col-sm-12 mb-2">
                            <div class="views d-flex align-items-center">
                                <i class="far fa-thumbs-up mr-2"></i> <span id="likeCount">${news.likes}</span>
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
                    <hr />
                `;
            } else if(index<4){
                // Other basketball news without description, likes, and comments
                newsBlock.innerHTML = `
                    <a href="" class="text-dark">
                        <div class="row">
                            <div class="col-3">
                                <img src="${news.image}" class="img-fluid shadow-1-strong rounded" alt="News Image" />
                            </div>

                            <div class="col-9">
                                <p class="mb-2"><strong>${news.title}</strong></p>
                                <p><u>${news.date}</u></p>
                            </div>
                        </div>
                    </a>
                `;
            }

            basketballNewsContainer.appendChild(newsBlock);
        });
    }

    function compareLikes(a, b) {
        return b.likes - a.likes;
    }

    // Sort newsData array by likes
    newsData.sort(compareLikes);

    // Slice the top 3 most liked news
    const top3News = newsData.slice(0, 3);

    function populateHotNewsCarousel() {
        const carouselInner = document.querySelector('#hotNewsCarousel .carousel-inner');
        carouselInner.innerHTML = ''; // Clear existing carousel items

        top3News.forEach((news, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            carouselItem.innerHTML = `
                <img src="${news.image}" class="d-block w-100" alt="${news.title}">
                <div class="carousel-caption d-none d-md-block bg-transparent-gray shadow p-3 rounded">
                    <h5>${news.title}</h5>
                    <p>${news.description ? news.description : 'No description available'}</p>
                </div>
            `;
            console.log(news.description)

            carouselInner.appendChild(carouselItem);
        });
    }

    function findLatestNews(newsData) {
        // Sort news data by date in descending order
        newsData.sort((a, b) => {
            // Assuming date format is 'dd.mm.yyyy'
            const dateA = new Date(a.date.split('.').reverse().join('-'));
            const dateB = new Date(b.date.split('.').reverse().join('-'));
            return dateB - dateA;
        });
    
        // Return the first item (which is the latest news based on date)
        return newsData.slice(0, 5);
    }
    
    // Function to render news list in the DOM
    function renderNewsList(newsData) {
        const latestNews = findLatestNews(newsData);
    
        const newsListContainer = document.getElementById('newsList');
    
        latestNews.forEach((newsItem, index) => {
            const url = `show.html?category=${encodeURIComponent(newsItem.category)}&date=${encodeURIComponent(newsItem.date)}&title=${encodeURIComponent(newsItem.title)}&description=${encodeURIComponent(newsItem.description)}&image=${encodeURIComponent(newsItem.image)}&likes=${encodeURIComponent(newsItem.likes)}&comments=${encodeURIComponent(newsItem.comments)}&views=${encodeURIComponent(newsItem.views)}`;
            const newsLink = document.createElement('a');
            newsLink.classList.add('list-group-item', 'list-group-item-action');
            newsLink.href = url;
            newsLink.textContent = `${index + 1}. ${newsItem.title}`; // Display the title of the news with index
    
            newsListContainer.appendChild(newsLink);
        });
    }
    // Call the function to populate soccer news
    populateSoccerNews();
    populateVolleyballNews();
    populateBasketballNews();
    populateHotNewsCarousel();
    renderNewsList(newsData);

};
