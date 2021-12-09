//หน้าสำหรับแอดมินเท่านั้น
import React, { useState, useEffect, Fragment } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import swal from 'sweetalert'
const ProductAPI_URL = 'https://udomsukservice.herokuapp.com/product'

function Dashboard() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const callProductAPI = async () => {
            try {
                const res = await axios.get(ProductAPI_URL)
                setProduct(res.data)
            }
            catch (err) {
                console.error(err)
            }
        }
        callProductAPI()
    }, [])

    // all state for edit
    const [_id, set_id] = useState();
    const [products_id, setProducts_id] = useState()
    const [products_name, setProducts_name] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [status, setStatus] = useState()

    const [showModal, setShowModal] = useState(false);

    const handleClickPopup = async (_id, products_id, products_name,description, price, status) => {
        setShowModal(true)
        set_id(_id)
        setProducts_id(products_id)
        setProducts_name(products_name)
        setDescription(description)
        setPrice(price)
        setStatus(status)
    }

    const handleClosePopup = async () => {
        setShowModal(false)
        set_id("")
        setProducts_id("")
        setProducts_name("")
        setDescription("")
        setPrice("")
        setStatus("")
    }

    // api
    async function editProduct(credentials) {
        return await fetch(`https://udomsukservice.herokuapp.com/product/update/${_id}`, {
            method: "PUT",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(credentials),
        })
            .then((res) => res.json())
            .then((result) => {
                return result
            });
    }

    const editHandle = async () => {
        const response = await editProduct({
            products_id: products_id,
            products_name: products_name,
            description: description,
            price: price,
            status: status,
        });
        if (response.message === "Product updated successfully") {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
                .then(() => {
                    window.location.href = "/dashboard";
                });
        } else {
            swal("Failed", response.message, "error");
        }
    }

    return (
        <>
            <Navbar />
            <div className="bg-gray flex h-full justify-center w-full overflow-auto py-1 flex-col">
                {/* table */}
                <table class="table-fixed w-full divide-y divide-gray-200 overflow-auto self-center">
                    <thead class="bg-blue text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-cream divide-y divide-gray-200">
                        {product.length > 0 ?
                            product.map((data) => {
                                return <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{data.products_id}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{data.products_name}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap overflow-y-auto">
                                        <div class="text-sm text-gray-900">{data.description}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {data.price}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        {data.status ? <span>ไม่มีการจอง</span> : <span className="text-red">จองแล้ว</span>}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            class="text-indigo-600 hover:text-indigo-900"
                                            onClick={() => handleClickPopup(data._id, data.products_id, data.products_name, data.description, data.price, data.status)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            })
                            : null}
                    </tbody>
                </table>
                {showModal ? (() => {
                    if (_id.length > 0)
                        return <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-3/4 my-6 mx-auto">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Edited for&nbsp;:&nbsp;{products_id}
                                            </h3>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 flex flex-col">
                                            <input
                                                value={products_id}
                                                placeholder="products_id"
                                                onChange={(e) => setProducts_id(e.target.value)}
                                                className="py-2 bg-cream rounded pl-2 mt-2"
                                            />
                                            <input
                                                value={products_name}
                                                placeholder="products_name"
                                                onChange={(e) => setProducts_name(e.target.value)}
                                                className="py-2 bg-cream rounded pl-2 mt-2"
                                            />
                                            <input
                                                value={description}
                                                placeholder="description"
                                                onChange={(e) => setDescription(e.target.value)}
                                                className="py-2 bg-cream rounded pl-2 mt-2"
                                            />
                                            <input
                                                value={price}
                                                placeholder="price"
                                                onChange={(e) => setPrice(e.target.value)}
                                                className="py-2 bg-cream rounded pl-2 mt-2"
                                            />
                                            <input
                                                value={status}
                                                placeholder="status"
                                                onChange={(e) => setStatus(e.target.value)}
                                                className="py-2 bg-cream rounded pl-2 mt-2"
                                            />
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => handleClosePopup()}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => editHandle()}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    else
                        return null
                })()
                    : null
                }
            </div>
        </>
    )
}

export default Dashboard;