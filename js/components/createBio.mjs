export default function createBio(bio){
    const bioSection = document.createElement('section');
    bioSection.id = 'bioBox';
    const h2 = document.createElement('h2');
    h2.textContent = 'Mkw80';
    const p = document.createElement('p');
    p.textContent = bio;
    bioSection.append(h2, p);
    document.body.appendChild(bioSection);
}