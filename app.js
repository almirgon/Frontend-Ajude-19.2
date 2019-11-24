import Campaign from "./pages/Campaign/campaign.js"
import CreateCampaign from "./pages/createCampaign/createCampaign.js"
import Login from "./pages/login/login.js"
import Profile from "./pages/profile/profile.js"
import User from "./pages/user/user.js"
import Homepage from "./pages/homepage/homepage.js"

import Utils from "./utils.js"

const routes = {
    '/profile/:id'  : Profile,
    '/login'           : Login,
    '/signup'          : User,
    '/createcampaign'  : CreateCampaign,
    '/campaign/:id'    : Campaign


};

const router = async () => {

    const content = null || document.getElementById('page_container');

    let request = Utils.parseRequestURL()

    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '')
    window.history.pushState({}, parsedURL, window.location.origin + parsedURL); 

    let page = routes[parsedURL]
    content.innerHTML = await page.render();
    await page.after_render();
  
}

window.onpopstate = () => {window.history.back();
    router();}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);
