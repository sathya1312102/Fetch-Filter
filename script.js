async function fetchAndFilterPosts() {
    try {
      const searchInput = document.getElementById('searchInput').value.trim();
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Invalid data received');
      }

      const filteredPosts = data.filter(post => post.title.includes(searchInput));

      displayResults(filteredPosts);
    } catch (error) {
      console.error('Error fetching or filtering posts:', error.message);
    }
  }

  function displayResults(posts) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
  
    if (posts.length === 0) {
      resultContainer.innerHTML = '<p>No matching posts found.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    posts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = post.title;
      ul.appendChild(li);
    });
  
    resultContainer.appendChild(ul);
  }
  