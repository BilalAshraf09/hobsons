import * as home_page_object  from '../../../page_objects/home/home_actions_page_object';

describe('Validate Home page', () => {
	
	context('Home Page', function() {
		it('Home page loads correctly', () => {
			home_page_object.OpenWebsite('https://hobsons.com/');
			home_page_object.ValidateHomePage();
			home_page_object.ClickDownArrow();
			home_page_object.CheckHeader('How can we help your students?');
			home_page_object.ValidateTopMenu('Solutions','Services','About','Blog');
			home_page_object.CheckResourcesEventMenu('Events','All');
		});
	});
});
