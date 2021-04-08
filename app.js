const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e)=>{
    // dataset.id selects the id of the buttons
    const id = e.target.dataset.id;
    if(id){
        // remove active from all buttons
        btns.forEach((btn)=>{
            btn.classList.remove('active');
            // ad active to selected button
            e.target.classList.add("active");
        })
        // Hide all articles
        articles.forEach((article)=>{
            article.classList.remove('active');
            // ad active for selected article
            const element = document.getElementById(id);
            element.classList.add('active');
        })
    };
});