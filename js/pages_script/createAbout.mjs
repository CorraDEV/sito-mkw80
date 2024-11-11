import { pagesName } from "../pagesList.mjs";
import { bio } from "../bio.mjs";
import createNavbar from "../components/createNavbar.mjs";
import createPageTitle from "../components/createPageTitle.mjs";
import createBio from "../components/createBio.mjs";
import createFooter from "../components/createFooter.mjs";

createNavbar(pagesName);
createPageTitle("About");    
createBio(bio);
createFooter();    