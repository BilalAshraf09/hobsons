import * as home_page_object  from '../../../page_objects/home/home_actions_page_object';
import * as home_page_stub  from '../../../stubs/home_page_stub';

describe('validate home & event page', () => {
	
	context('Home Page', function() {

		beforeEach(function() {
			home_page_stub.OpenHomePage();
		});

		it('Home page loads correctly', () => {

			var topmenu = ["Solutions", "Services", "About","Blog"];
			var resourcesmenu = ["Events", "All"];

			home_page_object.ClickDownArrow();
			home_page_object.CheckHeader('How can we help your students?');
			home_page_object.ValidateTopMenu(topmenu);
			home_page_object.CheckResourcesEventMenu(resourcesmenu);
		});
	
		it('Events page loads correctly', () => {

			var events = ["ERDI Winter 2020", "AASA NCE 2020"];

			home_page_stub.OpenHomePage();
			home_page_object.OpenEventsPage();
			home_page_object.CheckEvents(events);
		});
	});
});
