import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private menuHorizontal: MenuItem[]; 
  private menuVertical: any[]; 
  
    ngOnInit() {
        this.menuHorizontal = [
            {
                label: 'Sair',
                icon: 'fa-file-o',
            }
        ];
 
        this.menuVertical  = [{
            label: 'Funcionário',
            items: [
                {label: 'New', icon: 'fa-plus', routerLink: ['/funcionario']},
                {label: 'Open', icon: 'fa-download', routerLink: ['/']}
            ]
        },
        {
            label: 'Embarque',
            items: [
                {label: 'Undo', icon: 'fa-refresh', routerLink: ['/embarque']},
                {label: 'Redo', icon: 'fa-repeat', routerLink: ['/']}
            ]
        }];
    }
}
