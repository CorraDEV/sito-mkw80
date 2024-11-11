export default function createPageTitle(titlePage){
    const h1 = document.createElement('h1');
    h1.textContent = titlePage;
    h1.id = 'pagesTitle';
    document.body.appendChild(h1);
}