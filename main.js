const picture = document.getElementById('change-image');
picture.addEventListener('click', function() {
    if(this.src == "https://lifewhack.me/wp-content/uploads/2014/05/1-3.jpg") {
    this.src = "https://c.tenor.com/Ok5CTp9-ykkAAAAC/ara%C3%B1a-spider.gif" 
    this.style.width = `700px`
} else {
    this.src = "https://lifewhack.me/wp-content/uploads/2014/05/1-3.jpg"
};
});
