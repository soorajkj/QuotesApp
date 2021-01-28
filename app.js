
const container = document.querySelector('.container');
const btn = document.querySelector('.btn-generate');

if(localStorage.getItem('q')){
    const lq1 = localStorage.getItem('q');
    const lq2 = JSON.parse(lq1);
    
    if(lq2.author){
        container.innerHTML = 
        `
        <div class="q-wrapper">
        <div class="q-head">
        <blockquote class="quote"><span>"</span>${lq2.text}</blockquote>
        </div>
        <p class="author">${lq2.author}</p>
        </div>
        `; 
        
    }
    else{
        container.innerHTML =
        `<div class="q-wrapper">
        <div class="q-head">
        <blockquote class="quote"><span>"</span>${lq2.text}</blockquote>
        </div> ` 
    }
}



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

        localStorage.setItem('q', JSON.stringify(data));
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

