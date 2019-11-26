import Campaign from "../pages/Campaign/campaign.js"
import CreateCampaign from "../pages/createCampaign/createCampaign.js"
import Login from "../pages/login/login.js"
import Profile from "../pages/profile/profile.js"
import User from "../pages/user/user.js"
import NavBar from "../pages/nav-bar/nav-bar.js"

import Utils from "../utils.js"
import Home from "../pages/home/home.js"

const routes = {
    '/home'            : Home,
    '/profile/:id'     : Profile,
    '/login'           : Login,
    '/signup'          : User,
    '/createcampaign'  : CreateCampaign,
    '/campaign/:id'    : Campaign

};

const router = async () => {

    const header = document.getElementById('header-menu')
    const content = null || document.getElementById('page_container')

    let request = Utils.parseRequestURL()

    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '')
    
    let page = routes[parsedURL] || Home 
    header.innerHTML = await NavBar.render()
    await NavBar.after_render()
    content.innerHTML = await page.render()
    await page.after_render()
  
}

window.addEventListener('hashchange', router)

window.addEventListener('load', router)
