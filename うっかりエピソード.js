// JavaScript Document<!-- JavaScript：いいね・リプライ機能 -->
<script>
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
      // 投稿全体の外枠
      const postItem = document.createElement('div');
      postItem.className = 'post-item';

      // 投稿内容表示
      const postText = document.createElement('p');
      postText.textContent = content;
      postItem.appendChild(postText);

      // アクションエリア（いいね＆リプライ）
      const actions = document.createElement('div');
      actions.className = 'post-actions';

      // いいねボタンとカウンター
      const likeButton = document.createElement('button');
      likeButton.textContent = 'いいね';
      likeButton.className = 'like-button';

      const likeCount = document.createElement('span');
      likeCount.textContent = '0';
      likeCount.className = 'like-count';

      likeButton.addEventListener('click', function() {
        let count = parseInt(likeCount.textContent);
        count++;
        likeCount.textContent = count;
      });

      actions.appendChild(likeButton);
      actions.appendChild(likeCount);

      // リプライボタン
      const replyButton = document.createElement('button');
      replyButton.textContent = 'リプライ';
      replyButton.className = 'reply-button';
      actions.appendChild(replyButton);

      postItem.appendChild(actions);

      // リプライ入力フォーム（初期は非表示）
      const replyForm = document.createElement('form');
      replyForm.className = 'reply-form';
      replyForm.style.display = 'none';

      const replyInput = document.createElement('input');
      replyInput.type = 'text';
      replyInput.placeholder = 'リプライを入力...';
      replyForm.appendChild(replyInput);

      const replySubmit = document.createElement('button');
      replySubmit.type = 'submit';
      replySubmit.textContent = '送信';
      replyForm.appendChild(replySubmit);

      postItem.appendChild(replyForm);

      // リプライ一覧表示領域
      const replyList = document.createElement('div');
      replyList.className = 'reply-list';
      postItem.appendChild(replyList);

      // リプライボタン押下でフォームの表示/非表示切替
      replyButton.addEventListener('click', (e) => {
        e.preventDefault();
        replyForm.style.display = (replyForm.style.display === 'none' || replyForm.style.display === '') ? 'block' : 'none';
      });

      // リプライフォーム送信イベント
      replyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const replyText = replyInput.value.trim();
        if (replyText) {
          const replyItem = document.createElement('div');
          replyItem.className = 'reply-item';
          replyItem.textContent = replyText;
          replyList.appendChild(replyItem);

          // 入力欄をクリア＆フォームを非表示
          replyInput.value = '';
          replyForm.style.display = 'none';

          // リプライが来たら投稿を再度リストの先頭へ移動
          postList.removeChild(postItem);
          postList.insertBefore(postItem, postList.firstChild);
        }
      });

      // 投稿リストの先頭に新規投稿を追加
      postList.insertBefore(postItem, postList.firstChild);
    }
  });
</script>
