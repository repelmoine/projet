import { Component } from '@angular/core';

import { TabsPage } from '../tabs/tabs';

@Component({
    templateUrl: 'connected.html'
})
export class Connected {

    rootPage:any = TabsPage;
    constructor() {

    }
}