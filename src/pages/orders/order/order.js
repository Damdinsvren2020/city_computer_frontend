import React, { useState, useEffect } from 'react'
import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import Approve from '../approve/approve'
import Card from "../card/card"
import Checkout from '../checkout/checkout'
import { AiOutlineArrowRight } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Payment from '../payment/payment'
import Loading from '../loading/loading'


function Order() {
    const [whichComponent, setWhichComponent] = useState("Card")
    const [orderID, setOrderID] = useState("")
    const [user, setUser] = useState([])
    const [refresh, setRefresh] = useState(0)
    const [orderDetail, setOrderDetail] = useState([])
    const [orderProduct, setOrderProduct] = useState([])
    const [loading, setLoading] = useState(false)


    const history = useNavigate();

    const user_token = localStorage.getItem("user-token");
    useEffect(() => {
        if (user_token) {
            const authorize = async () => {
                try {
                    const { data } = await axios.get("authorize", {
                        headers: {
                            authorization: "Bearer " + user_token,
                        },
                    });
                    if (data.success) {
                        setUser(data.user);
                        setWhichComponent("Card")
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            authorize();
        }
    }, [history, refresh]);

    const handleOrderID = async (id) => {
        setWhichComponent("Loading")
        const { data } = await axios.post("/getOrder", { orderID: id, userID: user._id })
        if (data.success) {
            setOrderDetail(data.orderDetail)
            setOrderProduct(data.orderProducts.cartItems)
            setWhichComponent("Checkout")
            // console.log(data.orderDetail)
            // console.log(data.orderProducts)
        }
    }
    const handleNextStep = (step) => {
        setWhichComponent(step)
    }

    function RenderOrderComponent() {
        switch (whichComponent) {
            case "Approve":
                return <Approve />
            case "Checkout":
                return <Checkout orderDetail={orderDetail} orderProduct={orderProduct} orderID={handleOrderID} nextStep={handleNextStep} />
            case "Card":
                return <Card orderID={handleOrderID} nextStep={handleNextStep} />
            case "Payment":
                return <Payment />
            case "Loading":
                return <Loading />
            default:
                return <Card />;
        }
    }

    return (
        <>
            <Header />
            <div className='container mx-auto h-24 my-2 flex justify-evenly items-center'>
                <div className={`flex  items-center border border-red-900 p-3 ${whichComponent === "Card" && "bg-[#e5222b]"}`}>
                    <h1 className={`${whichComponent === "Card" ? "text-white" : "text-black"}`}>
                        Сагсанд байгаа бараа баталгаажуулах
                    </h1>
                    <AiOutlineArrowRight color={whichComponent === "Card" ? "white" : "black"} />
                </div>
                <div className={`flex  items-center border border-red-900 p-3 ${whichComponent === "Checkout" && "bg-[#e5222b]"}`}>
                    <h1 className={`${whichComponent === "Checkout" ? "text-white" : "text-black"}`}>
                        Захиалга баталгаажуулах
                    </h1>
                    <AiOutlineArrowRight color={whichComponent === "Checkout" ? "white" : "black"} />
                </div>
                <div className={`flex  items-center border border-red-900 p-3 ${whichComponent === "Payment" && "bg-[#e5222b]"}`}>
                    <h1 className={`${whichComponent === "Payment" ? "text-white" : "text-black"}`}>
                        Төлбөрийн хуудас
                    </h1>
                    <AiOutlineArrowRight color={whichComponent === "Payment" ? "white" : "black"} />
                </div>
                <div className={`flex  items-center border border-red-900 p-3 ${whichComponent === "Approve" && "bg-[#e5222b]"}`}>
                    <h1 className={`${whichComponent === "Approve" ? "text-white" : "text-black"}`}>
                        Баталгаажсан хуудас
                    </h1>
                    <AiOutlineArrowRight color={whichComponent === "Approve" ? "white" : "black"} />
                </div>
            </div>
            <RenderOrderComponent />
            <Footer />
        </>
    )
}

export default Order