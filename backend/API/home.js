"use strict";
require('dotenv/config');
const mysql = require("mysql2")

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user:  process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DB
});

const getHome = async(req, res)=>{
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM `Worker` WHERE `id`=2", function (err, result, fields) {
              if (err) throw err;
              res.json(result);
            });
        });
        // const userData = req.decodeToken;
        // let fav_room = [];
        // if(userData.favorites) {
        //     let arr = userData.favorites.split(',');
        //     fav_room = await Promise.all(arr.map( async (it, i) => {
        //         let room = await Room.findOne({ _id: it });
        //         let building = await Building.findOne({ _id: room.buildingId });
        //         if(room) {
        //             return {
        //                 id: room.id,
        //                 name: room.roomName,
        //                 type: "ROOM_MATE",
        //                 is_available: room.active,
        //                 limit: room.available_count,
        //                 price_description: null,
        //                 is_favorite: true,
        //                 build_name: building.buildingName,
        //                 // medias: room.roomPicture || null,
        //                 // location: null
        //                 medias: i==0?media1:media2,
        //                 location: {
        //                   name: "etkinlik alanı 1",
        //                   image: {
        //                     type: "IMAGE",
        //                     thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
        //                     width: 1198,
        //                     height: 748,
        //                     url: "https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg"
        //                   },
        //                   "latitude": 123.23232,
        //                   "longitude": 42.123
        //                 }
        
        //             }
        //         } else {
        //             return null
        //         }
        //     }));
        // }
        
		// res.json({
        //     result: {
        //         unread_notification_count: 3,
        //         latest_resarvation: l_res,
        //         latest_notifications: [
        //             notif_1,
        //             notif_1
        //         ],
        //         populer_events: [
        //             event_1
        //         ],
        //         populer_room_mates: fav_room,
        //         favorites: fav_room



                
        //     },
        //     result_message: {
        //         type: "success",
        //         message: "Home başarılı bir şekilde çekildi"
        //     }
        // });
    } catch (err) {
        res.json({
            result: null,
			result_message: {
                type: "error",
                message: err
            }
        })
    }

}


module.exports = {
    getHome
}


// function updateJsObject(A, B) {
//     let temp = Object.keys(B);
//     for(let i=0; i<temp.length; i++) {
//         let x = temp[i];
//         A[x] = B[x];
//     }
// }

const notif_1 = {
    id: "kjdsfı2u",
    isRead: false,
    title: "Qr bildirimi",
    active: true,
    direction_button_name: "Qr Okut",
    content: "Katılımcısı olduğunuz “Sürdürülebilirlik Semineri” etkinliğinizin yarın gerçekleşecek.",
    date: "2022-11-11T07:27:41.316",
    icon: {
        type: "IMAGE",
        thumb: "www.arneca.com/test_thub.png",
        width: 1600,
        height: 900,
        url: "www.arneca.com/test.png"
    },
    media: {
      type: "IMAGE",
      thumb: "www.arneca.com/test_thub.png",
      width: 1600,
      height: 900,
      url: "www.arneca.com/test.png"
    },
    type: "QR_READ",
    detail_type_id: null,
    created: "2022-11-11T07:27:41.316"
  }

const event_1 = {
    id:	"5789034ty473u2ırg48",
    name: "1. etkinlik başlığı",
    type: "EVENT",
    is_available: true,
    available_count: 30,
    total_limit: 130,
    price: 12.324,
    is_favorite: false,
    build_name: "Nişantaşı",
    medias: [
        {
            type: "IMAGE",
            thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
            width: 931,
            height: 479,
            url: "https://www.roomzilla.net/wp-content/uploads/2017/07/best.png"
        },
        {
            type: "IMAGE",
            thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
            width: 424,
            height: 283,
            url: "http://www.gigabook.com/blog/wp-content/uploads/2016/05/Conference-Room-Reservation-Software.jpg"
        }
    ],
    location: {
      name: "etkinlik alanı 1",
      image: {
        type: "IMAGE",
        thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
        width: 1198,
        height: 748,
        url: "https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg"
      },
      "latitude": 123.23232,
      "longitude": 42.123
    }
}

const l_res = {
    reservation: {
        state: "CANCELLED"
    },
    ...event_1
}

const media1 = [
    {
        type: "IMAGE",
        thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
        width: 931,
        height: 479,
        url: "https://www.roomzilla.net/wp-content/uploads/2017/07/best.png"
    },
    {
        type: "IMAGE",
        thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
        width: 424,
        height: 283,
        url: "http://www.gigabook.com/blog/wp-content/uploads/2016/05/Conference-Room-Reservation-Software.jpg"
    }
]

const media2 = [
    {
        type: "IMAGE",
        thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
        width: 1235,
        height: 750,
        url: "https://i.pinimg.com/originals/b1/a7/ca/b1a7caa5393b4b940a2e1a5f2abc8e07.jpg"
    },
    {
        type: "IMAGE",
        thumb: "https://www.pngitem.com/pimgs/m/415-4155818_thumb-image-meeting-room-png-transparent-png.png",
        width: 1287,
        height: 858,
        url: "https://www.industriousoffice.com/wp-content/uploads/2021/04/Hero-WillisTower.jpg"
    }
]