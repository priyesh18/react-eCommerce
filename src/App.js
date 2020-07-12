import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // On signin: userAuth returns an object with uid, displayName and email;
    //On signout: userAuth is null.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState( {currentUser: user });
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // onSnapshot subscribes to userRef to listen for changes.
        // it also returns the first state that we use in our setState
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      }
      else {
        setCurrentUser(userAuth); // sets to null
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route  path='/shop' component={ ShopPage } />
          <Route  exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInAndSignUp/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
