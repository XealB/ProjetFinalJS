document.addEventListener("DOMContentLoaded", function(){

let elInput = document.querySelector('.post');
let elSubmit = document.querySelector('.submitPost');
let message = document.querySelector('.message');

elSubmit.addEventListener('click', () => {
    const numberPosts = parseInt(elInput.value);
    fetchAndCount(numberPosts);
});

async function fetchAndCount(number) {
    const posts = [];
    let totalE = 0;
    for (let i = 1; i <= number; i++) {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
        const data = await response.json();

        posts.push(data);
        const countE = (data.title.match(/e/gi) || []).length;

        totalE += countE;

        const item = document.createElement('p');
        item.textContent = `${i} : ${data.title} contient ${countE} E.`;
        message.appendChild(item);   
    };
    
    const moyenne = totalE / number;

    const moyenneE = document.createElement('p');
    const line = document.createElement('hr');
    moyenneE.textContent = `La moyenne de "e" par titre est de ${moyenne}.`;
    message.appendChild(moyenneE);
    message.appendChild(line);
    
};

});






