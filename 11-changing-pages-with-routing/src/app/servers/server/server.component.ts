import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string } | any;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    })
  }

  onAdded() {
    /* this.router.navigate(['edit'], {
      relativeTo: this.route.data.subscribe(),
      queryParamsHandling: 'preserve',
    }); */
  }
}
