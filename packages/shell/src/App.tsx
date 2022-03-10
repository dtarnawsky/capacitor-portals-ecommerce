import React from 'react';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import { ShopPage } from './ShopPage';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { AddressPage } from 'account/AddressPage';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { CheckoutPage } from 'cart/CheckoutPage';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { HelpPage } from 'help-info/HelpPage';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { PaymentPage } from 'cart/PaymentPage';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { UserDetailPage } from 'account/UserDetailPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { DataProvider } from 'provider-lib';

const App: React.FC = () => {
  return (
    <DataProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/" component={ShopPage} />
            <Route path="/address" exact component={AddressPage} />
            <Route path="/address/:id" exact component={AddressPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route path="/help" exact component={HelpPage} />
            <Route path="/payment" exact component={PaymentPage} />
            <Route path="/payment/:id" component={PaymentPage} />
            <Route path="/user" exact component={UserDetailPage} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </DataProvider>
  );
};

export default App;
