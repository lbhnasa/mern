var xhr = new XMLHttpRequest();
var url = './health.json';

xhr.open('GET', url, true); //true:asynchronous false: synchronous
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');     
};



articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articleDiv.appendChild(articleDiv);
  });

  var articleDiv = document.createElement('div');
  articleDiv.classList.add('article');
  articleDiv.appendChild(title);

  xhr.send();





//   Setting up fetch request:

// You have created an object xhr to get data to define where the data is present.

// You asked for data using xhr.open('GET', url, true); to prepare to receive data in a specific format (xhr.responseType = 'json';).

// Using the received data:

// You created the function xhr.onload = function() { ... } to retrieve specific information like articles, and decided where to show them on the webpage using document.getElementById('articles').
// Putting it all together:

// For each article, you created webpage parts like title descriptions and filled them with data.

// You then fetched these parts on the webpage and sent the request to get the data xhr.send();.