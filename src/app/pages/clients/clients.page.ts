import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddClientPage } from '../../modals/add-client/add-client.page';
import { ClientService } from 'src/app/services/client.service'
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mailRegex } from 'src/app/other-resources/regex';
import { PROVINCES } from 'src/app/other-resources/spanish-provinces';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.sass'],
})
export class ClientsPage implements OnInit {


  displayedColumns: string[] = ['clientId', 'name', 'lastName1', 'address', 'phoneNumber', 'email'];
  provinces = PROVINCES;
  resultsLength = 0;
  isLoadingResults = false;
  dataClients;
  pageSize = 25;
  pageSizeOptions = [5, 25, 50, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  clientSearchForm: FormGroup;
  showSearchForm = true;

  constructor(
    public modalController: ModalController,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.clientSearchForm = this.formBuilder.group({
      clientId: [''],
      identification: [''],
      name: [''],
      lastName1: [''],
      phoneNumber: [''],
      email: [''],
    });
  }

  ngOnInit() {
  }

  titulo: string = 'Clientes';

  pageChanged($ev) {
    this.search($ev.pageSize, $ev.pageIndex)
  }

  async presentAddClientModal() {
    const modal = await this.modalController.create({
      component: AddClientPage,
      cssClass: "modal-landscape",
    });
    return await modal.present();
  }

  search(limit: number = this.pageSize, offset: number = 0) {
    this.isLoadingResults = true;
    this.clientService.search(this.clientSearchForm.value, limit, offset).subscribe(dat => {
      console.log('data', dat);
      this.dataClients = dat['data'];
      this.resultsLength = dat['total'];
      if (this.dataClients.length == 1) {
        this.router.navigate([`/client-info/${this.dataClients[0].clientId}`]);
      }
    }, error => {
      console.error(error);
    }, () => {
      this.isLoadingResults = false;
      console.log('fisnished');
    });
  }

}
