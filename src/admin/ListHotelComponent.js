import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelService from './HotelService';
import "./beauty.css"

class ListHotelComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        };
        this.addHotel = this.addHotel.bind(this);
        this.editHotel = this.editHotel.bind(this);
        this.deleteHotel = this.deleteHotel.bind(this);
    }

    deleteHotel(id) {
        if (window.confirm("Are you sure you want to delete this hotel?")) {
            HotelService.deleteHotel(id).then(res => {
                this.setState({ hotels: this.state.hotels.filter(hotel => hotel.id !== id) });
            });
        }
    }

    viewHotel(id) {
        this.props.navigate(`/view-hotel/${id}`);
    }

    editHotel(id) {
        this.props.navigate(`/add-hotel/${id}`);
    }

    componentDidMount() {
        HotelService.getHotel().then((res) => {
            this.setState({ hotels: res.data });
        });
    }

    addHotel() {
        this.props.navigate('/add-hotel/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Hotels List</h2>
                <div className="row">
                    <button className="btn2 btn-primary2" onClick={this.addHotel}>Add Hotel</button>
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Hotel Name</th>
                                <th>Hotel Address</th>
                                <th>Hotel Star</th>
                                <th>Hotel Price</th>
                                <th>Hotel Image</th>
                                <th>Hotel Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.hotels.map(
                                hotel =>
                                    <tr key={hotel.id}>
                                        <td>{hotel.name}</td>
                                        <td>{hotel.address}</td>
                                        <td>{hotel.star}</td>
                                        <td>{hotel.price}</td>
                                        <td>
                                            <img src={`data:image/jpeg;base64,${hotel.image}`} 
                                            className="hotel-image"/>
                                        </td>
                                        <td>{hotel.description}</td>
                                        <td>
                                            <button onClick={() => this.editHotel(hotel.id)} className="btn2 btn-info2">Update</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteHotel(hotel.id)} className="btn2 btn-danger2">Delete</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.viewHotel(hotel.id)} className="btn2 btn-info2">View</button>
                                        </td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function WithNavigate(props) {
    const navigate = useNavigate();
    return <ListHotelComponent {...props} navigate={navigate} />;
}

export default WithNavigate;
