import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoes: []
    }
  }

  componentDidMount(){
    const url = "http://127.0.0.1:8000/api/shoestore/";
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({shoes: data}));
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
      <h1>hello shoe store</h1>
        <ul>
          {this.state.shoes.map((s) => (
            <li key={s.id} className='shoeDetails'>
              <p>Shoe id: {s.id}</p>
              <p>Brand Name: {s.brand_name}</p>
              <p>Color: {s.color}</p>
              <p>Manufacturer: {s.manufacturer}</p>
              <p>Material: {s.material}</p>
              <p>Shoe Type: {s.shoe_type}</p>
              <p>Size: {s.size}</p>
            </li>
            // brand_name: "Nike"
            // color: 1
            // fasten_type: "potato"
            // id: 1
            // manufacturer: 1
            // material: "Gold"
            // shoe_type: 1
            // size: 11
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
