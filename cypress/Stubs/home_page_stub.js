import * as home_page_object  from '../page_objects/home/home_actions_page_object';
require('cypress-xpath/src')

export const OpenHomePage = () => {
	home_page_object.OpenWebsite('https://hobsons.com/');
	home_page_object.ValidateHomePage();
};
