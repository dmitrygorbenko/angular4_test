
import {Component, ApplicationRef} from '@angular/core';

@Component({
	selector: '#ang5_app_two',
	templateUrl: 'angular5/app_two/template.html',
	styleUrls: ['angular5/app_two/styles.css']
})
export class AppComponent {

	title = 'This is Angular 5 app #2';
	newItem = "";
	items = [];

	constructor(app: ApplicationRef) {
		this._app = app;
	}

	onAdd() {
		if (this.newItem === "") {
			return;
		}

		this.items.push(this.newItem);
		this.newItem = "";
		this._app.tick();
	}

}
