export default function createNavbar(pagesName){    
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.id = 'pagesList';

    for(let i = 0; i < pagesName.length; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = pagesName[i].toLowerCase();
        a.textContent = pagesName[i].toUpperCase();
        li.appendChild(a);
        ul.appendChild(li);
    }

    navBar.appendChild(ul);
    document.body.appendChild(navBar);
}