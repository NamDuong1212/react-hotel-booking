import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HotelService from './HotelService';

class CreateHotelComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            name: '',
            address: '',
            star: '',
            price: '',
            image: '',
            description: '',
        };
        this.changeName = this.changeName.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeStar = this.changeStar.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.saveOrUpdateHotel = this.saveOrUpdateHotel.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return;
        } else {
            HotelService.getHotelById(this.state.id).then((res) => {
                let hotel = res.data;
                this.setState({
                    name: hotel.name,
                    address: hotel.address,
                    star: hotel.star,
                    price: hotel.price,
                    image: hotel.image,
                    description: hotel.description,
                });
            });
        }
    }

    saveOrUpdateHotel = (e) => {
        e.preventDefault();
        let hotel = {
            name: this.state.name,
            address: this.state.address,
            star: this.state.star,
            price: this.state.price,
            image: this.state.image,
            description: this.state.description,
        };
        console.log('hotel => ' + JSON.stringify(hotel));

        if (this.state.id === '_add') {
            HotelService.createHotel(hotel).then((res) => {
                this.props.navigate('/hotel');
            });
        } else {
            HotelService.updateHotel(hotel, this.state.id).then((res) => {
                this.props.navigate('/hotel');
            });
        }
    };

    changeName = (event) => {
        this.setState({ name: event.target.value });
    };

    changeAddress = (event) => {
        this.setState({ address: event.target.value });
    };

    changeStar = (event) => {
        this.setState({ star: event.target.value });
    };

    changePrice = (event) => {
        this.setState({ price: event.target.value });
    };

    changeImage = (event) => {
        this.setState({ image: event.target.value });
    };

    changeDescription = (event) => {
        this.setState({ description: event.target.value });
    };

    cancel() {
        this.props.navigate('/hotel');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Hotel</h3>;
        } else {
            return <h3 className="text-center">Update Hotel</h3>;
        }
    }

    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input
                                            placeholder="Name"
                                            name="name"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.changeName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Address: </label>
                                        <input
                                            placeholder="Address"
                                            name="address"
                                            className="form-control"
                                            value={this.state.address}
                                            onChange={this.changeAddress}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Star: </label>
                                        <input
                                            placeholder="Star"
                                            name="star"
                                            className="form-control"
                                            value={this.state.star}
                                            onChange={this.changeStar}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Price: </label>
                                        <input
                                            placeholder="Price"
                                            name="price"
                                            className="form-control"
                                            value={this.state.price}
                                            onChange={this.changePrice}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Image: </label>
                                        <input
                                            placeholder="Image"
                                            name="image"
                                            className="form-control"
                                            value={this.state.image}
                                            onChange={this.changeImage}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input
                                            placeholder="Description"
                                            name="description"
                                            className="form-control"
                                            value={this.state.description}
                                            onChange={this.changeDescription}
                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateHotel}>
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function WithRouterComponent(props) {
    let params = useParams();
    let navigate = useNavigate();
    return <CreateHotelComponent {...props} params={params} navigate={navigate} />;
}

export default WithRouterComponent;
