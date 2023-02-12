const postBtn = document.getElementById('btn-post');

postBtn.addEventListener('click', function () {
    const commentBox = document.getElementById('new-comment');
    let commentText = commentBox.value;
    // console.log(commentText);
    const commentContainer = document.getElementById('comments');
    const p = document.createElement('p');
    p.innerText = commentText;
    commentContainer.appendChild(p);
    commentBox.value = '';
    // console.log(commentContainer);

})