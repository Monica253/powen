import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Client } from '../../interfaces/client-interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mailRegex } from 'src/app/other-resources/regex';
import { PROVINCES } from 'src/app/other-resources/spanish-provinces';
import { ClientService } from 'src/app/services/client.service'

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.sass'],
})
export class AddClientPage implements OnInit {

  clientType = "P";
  clientAddForm: FormGroup;
  provinces = PROVINCES;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {

    this.clientAddForm = this.formBuilder.group({
      clientType: ['', [Validators.required]],
      identificationType: ['', [Validators.required]],
      identification: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName1: ['', [Validators.required]],
      lastName2: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      referrerId: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(mailRegex)]],
    });

  }

  ngOnInit() {

  }

  close() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    // TO DO: Comprobar que es valido
    console.log('submitting', this.clientAddForm);
    console.log('submitting2', this.clientAddForm.value);

    this.clientService.add(this.clientAddForm.value);
  }

}
