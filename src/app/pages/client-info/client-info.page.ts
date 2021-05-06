import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service'
import { PROVINCES } from 'src/app/other-resources/spanish-provinces';
// import { Client } from '../../interfaces/client-interfaces';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.page.html',
  styleUrls: ['./client-info.page.sass'],
})
export class ClientInfoPage implements OnInit {

  clientId;
  client;
  provinces = PROVINCES;


  constructor(private route: ActivatedRoute,
    private clientService: ClientService) {
    this.clientId = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.clientService.getClient(this.clientId).subscribe(data => {
      this.client = data;
      console.log('client', this.client);
    }, error => {
      console.error(error);
    });

  }

}
