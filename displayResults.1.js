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
