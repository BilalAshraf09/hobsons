import * as home from './home_elements_page_object';
require('cypress-xpath')

export const ValidateHomePage = () => {
	return (
		cy
			.xpath(home.ShowMore_Button)
			.wait(5000)
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

export const CheckLinks = (menuItemOne,menuItemTwo) => {
	return (
		cy
		.xpath('(//a[.="'+menuItemOne+'"])[1]')
		.should('exist')
		.xpath('(//a[.="'+menuItemTwo+'"])[1]')
		.should('exist')
	);
};

export const ValidateTopMenu = (menuItemOne,menuItemTwo,menuItemThree,menuItemFour) => {
		cy
		    .xpath(home.Menu_Link)
			.click({force: true})
			.wait(5000);
			CheckLinks(menuItemOne,menuItemTwo);
			CheckLinks(menuItemThree,menuItemFour);
};

	export const CheckResourcesEventMenu = (menuItemOne,menuItemTwo) => {
			cy
				.xpath(home.Resources_Link)
				.click({force: true})
				.wait(5000);
				CheckLinks(menuItemOne,menuItemTwo);
			cy
			    .wait(5000)
				.xpath(home.Events_Link)
				.click({force: true});
			cy	
				.wait(10000)
				.xpath(home.Events_Item)
				.should('be.visible');
};
