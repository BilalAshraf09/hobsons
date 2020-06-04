import * as home from './home_elements_page_object';
require('cypress-xpath')

export const ValidateHomePage = () => {
	return (
		cy
			.xpath(home.ShowMore_Button)
			.should('be.visible')
			.xpath(home.Title_Link)
			.should('be.visible')
	);
};

export const OpenWebsite = (url) => {
	return (
		cy
			.visit(url)
	);
};

export const ClickDownArrow = () => {
	return (
		cy
			.xpath(home.ShowMore_Button)
			.click()
		);
};

export const CheckHeader = (header) => {
	return (
		cy
			.xpath('//h2[.="'+header+'"]')
			.should('be.visible')
	);
};

export const CheckLinks = (items) => {
	for(var i = 0; i < items.length; i++){
		cy.xpath('(//a[.="'+items[i]+'"])[1]')
		.should('exist')
	 }
};

export const ValidateTopMenu = (topmenu) => {
		cy
		    .xpath(home.Menu_Link)
			.click({force: true});
			CheckLinks(topmenu);
};

export const CheckResourcesEventMenu = (resourcesmenu) => {
			cy
				.xpath(home.Resources_Link)
				.click();
				CheckLinks(resourcesmenu);
};

export const OpenEventsPage = () => {

	cy
		.xpath(home.Resources_Link)
		.click({force: true});
	cy
		.xpath(home.Events_Link)
		.click({force: true});
	cy	
		.xpath(home.Events_Item)
		.should('be.visible');
};

export const CheckEvents = (events) => {
		CheckLinks(events);
};
