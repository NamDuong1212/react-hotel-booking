import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/hotel";

class HotelService {

    getHotel(){
        return axios.get(API_BASE_URL);
    }

    createHotel(hotel){
        return axios.post(API_BASE_URL, hotel);
    }

    getHotelById(hotelId){
        return axios.get(API_BASE_URL + '/' + hotelId);
    }

    updateHotel(hotel, hotelId){
        return axios.put(API_BASE_URL + '/' + hotelId, hotel);
    }

    deleteHotel(hotelId){
        return axios.delete(API_BASE_URL + '/' + hotelId);
    }
}

export default new HotelService()