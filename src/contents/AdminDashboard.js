//หน้าสำหรับแอดมินเท่านั้น
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/Footer';
const ProductAPI_URL = 'https://udomsukservice.herokuapp.com/product'


function Dashboard() {
    const table = React.useRef(null);
    const [product, setProduct] = useState([])
    const []
    const callProductAPI = async (event) => {
        event.preventDefault();
        try{
            const res = await axios.get(`${ProductAPI_URL}/$`)
        }
    }
}

export default Dashboard;