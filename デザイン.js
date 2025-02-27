// コミュニティ投稿フォームのイベントハンドラ
document.addEventListener('DOMContentLoaded', () => {
  const postForm = document.getElementById('postForm');
  const postContent = document.getElementById('postContent');
  const postList = document.getElementById('postList');

  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = postContent.value.trim();
    if (content) {
      addPost(content);
      postContent.value = '';
    }
  });

  function addPost(content) {
    const postItem = document.createElement('div');
    postItem.className = 'post-item';
    postItem.textContent = content;
    postList.insertBefore(postItem, postList.firstChild);
  }
});
