import { Component } from '@angular/core';

import { Ajouter } from '../ajouter/ajouter';
import { CardList } from '../cardList/cardList';
import { ConnectedHome } from '../connectedHome/connectedHome';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConnectedHome;
  tab2Root = Ajouter;
  tab3Root = CardList;

  constructor() {

  }
}
