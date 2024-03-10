function addComment() {
    const commentText = document.getElementById('comment-text').value;

    if (commentText.trim() !== '') {
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        document.getElementById('comment-text').value = '';
    }
}

function showGiftDetails() {
    alert(' ده صحاب الخادم معملهاش تعالا تيكت لاخذ الهدية: يا محظوظ!');
    // يمكنك استبدال هذا بإظهار نافذة منبثقة أو توجيه المستخدم إلى صفحة تفاصيل إضافية.
}