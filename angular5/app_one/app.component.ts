import {Component} from '@angular/core';

@Component({
	selector: 'ang5_app_one',
	templateUrl: 'angular5/app_one/template.html',
	styleUrls: ['angular5/app_one/styles.css']
})

export class AppComponent implements OnInit  {

	title = 'This is Angular 5 app #1';
	newItem = ""
	items = []

	ngOnInit() {
		System.import("ang5_app_two/main").then(null, console.error.bind(console));
	}

	onAdd() {
		if (this.newItem === "") {
			return;
		}

		this.items.push(this.newItem);
		this.newItem = "";
	}
}
