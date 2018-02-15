import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Info from './pages/Info';
import Header from './components/Header';
import Cart from './components/Cart';
import News from './pages/News';
import Releases from './pages/Releases';
import Items from './components/Items';
// import { Link } from 'react-router';

// import { connect } from 'react-redux';


// container
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [{
        id: 2,
        game: 'Mass Efect',
        price: 29,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/masseffect.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/massefectcover.jpg',
      },
      {
        id: 1,
        game: 'Resident Evil',
        price: 39,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/residentevil.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/residentevilcover.jpg',
      },
      {
        id: 3,
        game: 'God of War',
        price: 25,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/godofwar4.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/godofwarcover.jpg',
      },
      {
        id: 4,
        game: 'Fallen',
        price: 24,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/fallen.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/fallencover.jpg',
      },
      {
        id: 5,
        game: 'Watch Dogs 2',
        price: 20,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/watchdogs.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/watchdogs2cover.jpg',
      },
      {
        id: 6,
        game: 'Okami',
        price: 27,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/okami.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/okamicover.jpg',
      },
      {
        id: 7,
        game: 'Omen Of Sorrow',
        price: 40,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/omenofsorrow.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/omenofsorrowcover.jpg',
      },
      {
        id: 8,
        game: 'Battle Field',
        price: 35,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/battlefield.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/battlefieldcover.jpg',
      },
      {
        id: 9,
        game: 'Last Guardian',
        price: 25,
        img: 'https://raw.githubusercontent.com/cesargamboa/shopcartReactNoRedux/master/public/images/lastguardian.jpg',
        information: 'https://raw.githubusercontent.com/cesargamboa/images/master/okamicover.jpg',
      },

      ],
      count: 0,
      price: 0,
      newCart: [],
      newCartPrice: [],
      label: null,

    };
  }

  addCart = (price, game) => {
    // Change the state
    this.setState({
      count: this.state.count + 1,
      price: this.state.price + price,
      newCart: this.state.newCart.concat(game),
      newCartPrice: this.state.newCartPrice.concat(price),
    });
  }
  showInfo = (info) => {
    this.setState({
      label: info,
    });
  }
  clearCart = () => {
    this.setState({
      count: 0,
      price: 0,
      newCart: [],
      newCartPrice: [],

    });
  }
  toggleCart = () => {
    const doesShow = this.state.showCart;
    this.setState({ showCart: !doesShow });
  }

  render() {
    let showed = null;
    let itemstoRender = null;
    let mapItemstoCart = null;
    let mapItemstoCartPrice = null;

    itemstoRender = (

      // Dinamic list of the objects

      <div>

        {this.state.items.map(items => (<Items
          game={items.game}
          price={items.price}
          img={items.img}
          id={items.id}
          information={items.information}
          changed={this.addCart}
          info={this.showInfo}
        />))}

      </div>
    );


    mapItemstoCart = (
      this.state.newCart.map(x => <tr><td>{x} </td></tr>)

    );
    mapItemstoCartPrice = (

      this.state.newCartPrice.map(y => <tr><td>{y} </td></tr>)
    );

    showed = (
      <div className="container col-md-8 offset-md-2 card border-warning mb-3">
        <Cart
          newCart={mapItemstoCart}
          price={this.state.price}
          click={this.clearCart}
          acumPrice={mapItemstoCartPrice}
        />
      </div>
    );

    // Routing
    return (
      <div>

        <Header
          counter={this.state.count}
          price={this.state.price}
          clicked={this.toggleCart
        }
        />


        <Switch >
          <Route path="/info">
            <Info information={this.state.label} />
          </Route>
          <Route path="/bag">
            {showed}
          </Route>
          <Route path="/shopcartReactNoRedux" >
            {itemstoRender}

          </Route>
          <Route path="/news">{News}</Route>
          <Route path="/releases" component={Releases} />

        </Switch>

      </div>
    );
  }
}

export default App;
