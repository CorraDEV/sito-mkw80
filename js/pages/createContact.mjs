import { pagesName } from "../pagesList.mjs";
import createNavbar from "../components/createNavbar.mjs";
import createPageTitle from "../components/createPageTitle.mjs";
import createFooter from "../components/createFooter.mjs";

export default function createContact(){
    document.title = "Contact";
    createNavbar(pagesName);
    createPageTitle("Contact");    
    createFooter();    
}