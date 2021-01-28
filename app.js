
const container = document.querySelector('.container');
const btn = document.querySelector('.btn-generate');


btn.addEventListener('click', () =>{
    getQuotes().then(data =>{
        if(data.author){
        container.innerHTML = 
        `
        <div class="q-wrapper">
        <div class="q-head">
        <blockquote class="quote"><span>"</span>${data.text}</blockquote>
        </div>
        <p class="author">${data.author}</p>
        </div>
        `; 
        }
        else{
            container.innerHTML =
            `<div class="q-wrapper">
            <div class="q-head">
            <blockquote class="quote"><span>"</span>${data.text}</blockquote>
            </div> ` 
        }
    })
    .catch(err =>{
        console.log(err);
    });

});
const getQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    return data[Math.floor(Math.random()*1643+1)];
};

