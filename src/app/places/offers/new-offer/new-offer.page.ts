import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  newOfferForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.newOfferForm = new FormGroup({
      title: new FormControl(null, { // null means there is no default value
                                    updateOn: 'blur', // there are other options 'blure, change, submit'
                                    validators: [Validators.required] //validators contains options for validation
                                  }),
      description: new FormControl(null, {
                                          updateOn: 'blur',
                                          validators: [Validators.maxLength(100), Validators.required]
                                        }),
      price: new FormControl(null, {
                                    updateOn: 'blur', 
                                    validators: [Validators.required, Validators.min(0), Validators.max(1000)]
                                  }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur', 
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  onCreatOffer() {
    console.log(this.newOfferForm);
  }
}
