import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import Aux from "../../hoc/_Aux";

import './storeMap.css';
import data from './data.json';
import Markers from './VenueMarkers';
import 'leaflet/dist/leaflet.css';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 12.8628, lng: 30.2176},
      zoom: 5,
      Llng:"",
      Llng:"",
    }
  }

  handleClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log("lat", lat, "lng", lng);
    this.setState({
      Llat: lat,
      Llng: lng,
      });
   }
componentDidMount(){
 
}
  render() {
    const { currentLocation, zoom,Llng,Llat} = this.state;
    return (
      <Aux>
        <Row>
          <Col>
                <div className="mydiv">{this.state.Message}</div>
                <Form onSubmit={this.handleEditSubmit} role="form">
                 <Row>
                    <Col md={10}>
                      <Form.Group controlId="">
                        <Form.Label>Lat</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          value={Llat}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={10}>
                      <Form.Group controlId="">
                        <Form.Label>Lang</Form.Label>
                        <Form.Control
                          name="username"
                          type="text"
                          defaultValue={Llng}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </Col>
<Col md={12}>
  
<Map center={currentLocation} zoom={zoom} onClick={this.handleClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />       
        <Markers venues={data.venues}/>
      </Map>

</Col>
                  </Row>
                </Form>
          </Col>
        </Row>
      </Aux>
    
    );
  }
}
export default MapView;