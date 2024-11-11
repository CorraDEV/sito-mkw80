import createHomepage from "./pages/createHomepage.mjs";  
import createError from "./pages/createError.mjs";  

const path = window.location.pathname;

switch(path){
    case '/' || 'home':
        createHomepage();
        break;
    case 'about':
        createAbout();
        break;
    case 'contact':
        createContact();
        break;
    default: 
        createError();                
}