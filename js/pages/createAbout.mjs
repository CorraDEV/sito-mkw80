import { pagesName } from "../pagesList.mjs";
import createNavbar from "../components/createNavbar.mjs";
import createPageTitle from "../components/createPageTitle.mjs";
import createFooter from "../components/createFooter.mjs";

export default function createAbout(){
    document.title = "About";
    createNavbar(pagesName);
    createPageTitle("About");    
    createFooter();    
}