import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // eg to  insstance
  // contactForm = new FormGroup({
  // name: new FormControl(''),
  // age: new FormControl(''),
  // });

  // eg to FormBuilder
  contactForm = this.varfb.group({
    name:['',Validators.required],
    age: ['',Validators.required],
    address: this.varfb.group({
      city: [''],
      state: ['']
    }),

    aliases: this.varfb.array([
      this.varfb.control('')
    ])
  });


  constructor(private varfb: FormBuilder) { }

  ngOnInit() {
  }
  updateName() {
    this.contactForm.patchValue({
      name: 'Yasher Arafath',
      age : 28
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

  get aliases() {
    return this.contactForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.varfb.control(''));
  }

  sendMail(){

  }

}
