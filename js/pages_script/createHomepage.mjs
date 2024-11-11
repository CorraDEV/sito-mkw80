import { pagesName } from "../pagesList.mjs";
import createNavbar from "../components/createNavbar.mjs";
import createPageTitle from "../components/createPageTitle.mjs";
import createVideo from "../components/createVideo.mjs";
import createFooter from "../components/createFooter.mjs";

createNavbar(pagesName);
createPageTitle("Homepage");    
createFooter();    