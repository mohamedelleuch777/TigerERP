import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png'
import humanDoor from '../assets/img/property_1_room_entrance.png'
import qr from '../assets/img/qr.png'
import './Room.css';


const Room = () => {



    useEffect(()=>{
        document.querySelector("body").classList.add("full")
    },[]);
    


    return  <div>
                <section className="topBar">
                    <img src={logo} alt="logo" />
                    <div className="dateTime">
                        6 Ekim 2022, 13:20
                    </div>
                </section>
                <section className="container">
                    <div className="room left">
                        <QR_Container name="Oda ismi" />
                        <Calendar data={dataFromApi} />
                    </div>
                    <div className="room right">
                        <Calendar data={dataFromApi} />
                        <QR_Container name="Oda ismi" reversed />
                    </div>
                </section>
            </div>
}

export default Room;

const QR_Container = ({name, reversed}) => {
    return (
        <div className={"nonCalBar" + (reversed?" reverse":"")}>
            <h3 className="title">{name}</h3>
            <div className="qrContainer">
                <p>Kapıyı açmak için İşmekan mobil uygulamanızla  bu QR’ı okutun,</p>
                <img src={qr} alt="QR Code" />
            </div>
            <img className={"bottomPic" + (reversed?" reverse":"")} src={humanDoor} alt="human picture" />
        </div>
    )
}

const Calendar = ({ data }) => {
    return (
        <div className="calBar">
            <div className="calendar">
                {
                    (data && data.length > -1) && (data.map( (it) => {
                        console.log(it)
                        return (
                            <div className={it.status}>
                                <p>{it.startTime}</p>
                                <p>{it.endTime}</p>
                            </div>
                        )
                    }))
                }
            </div>
            <span className="bottomLabel">
                Müsait saat aralıkları
            </span>
        </div>
    )
}

const dataFromApi = [
    {
        startTime: "09:00",
        endTime: "09:30",
        status: "disabled"
    },
    {
        startTime: "09:30",
        endTime: "10:00",
        status: "disabled"
    },
    {
        startTime: "10:00",
        endTime: "10:30",
        status: "disabled"
    },
    {
        startTime: "10:30",
        endTime: "11:00",
        status: "disabled"
    },
    {
        startTime: "11:00",
        endTime: "11:30",
        status: "disabled"
    },
    {
        startTime: "11:30",
        endTime: "12:00",
        status: "disabled"
    },
    {
        startTime: "12:00",
        endTime: "12:30",
        status: "disabled"
    },
    {
        startTime: "12:30",
        endTime: "13:00",
        status: "disabled"
    },
    {
        startTime: "13:00",
        endTime: "13:30",
        status: "current"
    },
    {
        startTime: "13:30",
        endTime: "14:00",
        status: "active"
    },
    {
        startTime: "14:00",
        endTime: "14:30",
        status: "active"
    },
    {
        startTime: "14:30",
        endTime: "15:00",
        status: "active"
    },
    {
        startTime: "15:00",
        endTime: "15:30",
        status: "active"
    },
    {
        startTime: "15:30",
        endTime: "16:00",
        status: "active"
    },
    {
        startTime: "16:00",
        endTime: "16:30",
        status: "disabled"
    },
    {
        startTime: "16:30",
        endTime: "17:00",
        status: "disabled"
    },
    {
        startTime: "17:00",
        endTime: "17:30",
        status: "disabled"
    },
    {
        startTime: "17:30",
        endTime: "18:00",
        status: "active"
    },
    {
        startTime: "18:00",
        endTime: "18:30",
        status: "active"
    },
    {
        startTime: "18:30",
        endTime: "19:00",
        status: "active"
    },
    {
        startTime: "19:00",
        endTime: "19:30",
        status: "active"
    },
    {
        startTime: "19:30",
        endTime: "20:00",
        status: "active"
    },
    {
        startTime: "20:00",
        endTime: "20:30",
        status: "active"
    },
    {
        startTime: "20:30",
        endTime: "21:00",
        status: "disabled"
    },
    {
        startTime: "21:00",
        endTime: "21:30",
        status: "active"
    },
    {
        startTime: "21:30",
        endTime: "22:00",
        status: "active"
    }
]