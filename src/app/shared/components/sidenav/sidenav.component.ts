// src\app\shared\components\sidenav\sidenav.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    options: FormGroup;

    constructor(
        fb: FormBuilder
    ) {
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0,
        });
    }

    ngOnInit(): void {
    }

    @ViewChild('sidenav') sidenav: MatSidenav;
    reason = '';
    close(reason: string) {
        this.reason = reason;
        this.sidenav.close();
    }

}
