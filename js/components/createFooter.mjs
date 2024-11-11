export default function createFooter(){
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.textContent = 'Testo per il footer';
    document.body.appendChild(footer);
}