import React from 'react';
import { Router, Scene, Lightbox } from "react-native-router-flux"
import EStyleSheet from 'react-native-extended-stylesheet';

import ImageLightBox from "react-native-lightbox"
import Login from "./src/components/Login/index" // Login Component 
import NewsFeed from "./src/components/NewsFeed/index" // NewsFeed Component 
import Bids from "./src/components/Bids/index" // Bids Component 
import BidPage from "./src/components/BidPage/index" // BidPage Component 
import CreateBid from "./src/components/CreateBid/index" // NewsFeed Component 
import Calculator from "./src/components/Calculator/index" // Calculator Component 
import Stocks from "./src/components/Stocks/index" // Calculator Component 
//first Login Screen
import FirstScreen from "./src/components/Sign up";
//second Login Screen
import TakeTourScreen from "./src/components/Take a Tour login and signup";

import AfterSignupScreen from "./src/components/AfterSignup";
import ProfilesScreen from "./src/components/Profiles";
import ReferencesScreen from "./src/components/References";
import PDFPage from "./src/components/PDFPage";
import CategoryProsScreen from './src/components/CategoryPros';
import VisitedProfileProjectsScreen from './src/components/VisitedProfileProjects';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
<Provider store={createStore(reducers)}>
      <Router>
        <Lightbox>
          <Scene key="root" hideNavBar> 
            <Scene key="login"  component={Login} title="Login"/>
            <Scene key="newsfeed" component={NewsFeed} title="NewsFeed"/>
            <Scene key="bids"  component={Bids} title="Bids"/>
            <Scene key="bid" component={BidPage} title="Bid"/>
            <Scene key="createbid" component={CreateBid} title="Bid"/>
            <Scene key="calculator"  component={Calculator} title="Calculator"/>
            <Scene key="stocks" component={Stocks} title="Stocks"/>
            {/* <Scene key="login" component={TakeTourScreen} title="TakeTourScreen"/> */}
            <Scene key="register"  component={FirstScreen} title="New Account"/>
            <Scene key="home" component={AfterSignupScreen} title="AfterSignupScreen"/>
            <Scene key="profiles" component={ProfilesScreen} title="Profiles"/>
            <Scene key="pdfPage" component={PDFPage} title="pdfPage"/>
            <Scene key="References"  component={ReferencesScreen} title="References"/>
            <Scene key="VisitedProfileProjects" initial component={VisitedProfileProjectsScreen} title="VisitedProfileProjects"/>
            <Scene key="CategoryProsScreen"  component={CategoryProsScreen} title="CategoryProsScreen"/>
          </Scene>

          {/* Lightbox components will lay over the screen, allowing transparency*/}
          <Scene key="imageLightBox" component={ImageLightBox} />

        </Lightbox>
      </Router>
</Provider>
      
    );
  }
}

EStyleSheet.build({
  $primaryColor: "#5871B5"
})