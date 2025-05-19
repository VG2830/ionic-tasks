import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
 step = 1;
  formData = {
    name: '',
    email: '',
    profession: '',
  };

  goToStep(num: number) {
    this.step = num;
  }

  submitForm() {
    console.log('Submitted data:', this.formData);
    // Call API or save to DB here
  }
}
