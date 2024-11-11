export default function createNavbar(pagesName){    
    const root = '/sito-mkw80/';
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.id = 'pagesList';        

    for(let i = 0; i < pagesName.length; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        if(pagesName[i].toLowerCase === 'home'){
            a.href = root;            
        }
        else if(root === window.location.pathname){
            a.href = `./pages/${pagesName[i].toLowerCase()}`;
        }
        else{
            a.href = pagesName[i].toLowerCase();
        }
        a.textContent = pagesName[i].toUpperCase();
        li.appendChild(a);
        ul.appendChild(li);
    }

    navBar.appendChild(ul);
    document.body.appendChild(navBar);
}