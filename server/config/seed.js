/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = seedDatabaseIfNeeded;

var _user = require('../api/user/user.model');

var _user2 = _interopRequireDefault(_user);

var _tag = require('../api/tag/tag.model');

var _tag2 = _interopRequireDefault(_tag);

var _setting = require('../api/setting/setting.model');

var _setting2 = _interopRequireDefault(_setting);

var _notification = require('../api/notification/notification.model');

var _notification2 = _interopRequireDefault(_notification);

var _order = require('../api/order/order.model');

var _order2 = _interopRequireDefault(_order);

var _news = require('../api/news/news.model');

var _news2 = _interopRequireDefault(_news);

var _message = require('../api/message/message.model');

var _message2 = _interopRequireDefault(_message);

var _menuItem = require('../api/menuItem/menuItem.model');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _category = require('../api/category/category.model');

var _category2 = _interopRequireDefault(_category);

var _rating = require('../api/rating/rating.model');

var _rating2 = _interopRequireDefault(_rating);

var _favourite = require('../api/favourite/favourite.model');

var _favourite2 = _interopRequireDefault(_favourite);

var _coupon = require('../api/coupon/coupon.model');

var _coupon2 = _interopRequireDefault(_coupon);

var _address = require('../api/address/address.model');

var _address2 = _interopRequireDefault(_address);

var _business = require('../api/business/business.model');

var _business2 = _interopRequireDefault(_business);

var _environment = require('./environment/');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function (err) {
        res.status(statusCode).send(err);
    };
}

console.log('into seed');
function seedDatabaseIfNeeded() {
    console.log('into seed');
    if (_environment2.default.seedDB == true) {
        _user2.default.find({}).remove().then(function () {
            _user2.default.create({
                "_id": "5a16b9c74c1bb8d4086e5a91",
                "name": "sandeep",
                "email": "san@gmail.com",
                "password": "123456",
                "phone": 7376421282,
                "imageUrl": "https://res.cloudinary.com/pietechsolutions/image/upload/v1503489410/pp4qrrywkiomeb8emzdv.jpg",
                "publicId": "pp4qrrywkiomeb8emzdv",
                "role": "user"
            }, {
                "_id": "59ccf50d3a2b240012c27e93",
                "email": "info@ionicfirebaseapp.com",
                "password": "123456",
                "role": "user",
                "name": "Ionic firebase",
                "phone": 9988776655,
                "imageUrl": "https://res.cloudinary.com/pietechsolutions/image/upload/v1507012122/rflufifvhzc3ixwkznuy.jpg",
                "publicId": "rflufifvhzc3ixwkznuy"
            }, {
                "_id": "59cf367625cbcd0012f27c4d",
                "name": "ujjwal",
                "email": "ujjwal.2518@gmail.com",
                "password": "123456",
                "role": "user",
                "imageUrl": "https://res.cloudinary.com/pietechsolutions/image/upload/v1507007787/jisnpaymxwxxgjnwqlfx.jpg",
                "publicId": "jisnpaymxwxxgjnwqlfx"
            }, {
                "_id": "59ccf50d3a2b240012c27e09",
                "name": "admin",
                "email": "ionicfirebaseapp@gmail.com",
                "password": "123456",
                "role": "admin"
            }, {
                "_id": "59d31f593945cc0012a2f1b2",
                "name": "Sandeep ",
                "email": "san10694@gmail.com",
                "phone": 9988776655,
                "password": "123456",
                "role": "user",
                "imageUrl": "https://res.cloudinary.com/pietechsolutions/image/upload/v1507011557/zwh8ns1tnpkurboeazhk.jpg",
                "publicId": "zwh8ns1tnpkurboeazhk"
            }).then(function () {
                console.log('finished populating users');
            });
        });

        _tag2.default.find({}).remove().then(function () {
            _tag2.default.create({
                "_id": "598428ca1503382e648cd30f",
                "tagName": "New Tag"
            }).then(function () {
                return console.log('finished populating tags');
            }).catch(function (err) {
                return console.log('error populating tags', err);
            });
        });

        _setting2.default.find({}).remove().then(function () {
            _setting2.default.create({
                "_id": "598827f4e07ccd2ae0809511",
                "globalVAT": 15.5
            }).then(function () {
                return console.log('finished populating Setting');
            }).catch(function (err) {
                return console.log('error populating Setting', err);
            });
        });

        _news2.default.find({}).remove().then(function () {
            _news2.default.create({
                "_id": "589ea7a79b28371154655ed5",
                "thumb": "589ea7429b28371154655ed4",
                "title": "Life at moon",
                "shortDescription": " Life on the moon would be very different for explorers than life on Earth. See how in this Space.com infographic.",
                "fullDescription": "Only 12 humans (the crews of Apollo 11, 12, 14, 15, 16 and 17) have ever walked on the moon's surface. Because the moon's gravity is only one-sixth that of the Earth's gravity, Apollo astronauts had to tread carefully or else risk stumbling or falling. They ultimately perfected a bouncing gait and bunny hops to walk along the lunar surface.   One of the best places to set up a moon base turns out to be the lunar south pole, which has an enormous reserve of water ice and a relatively stable surface temperature around 32 degrees Fahrenheit (0 Celsius).  Because it lacks an atmosphere, the moon undergoes tremendous daily swings in surface temperature, from a daytime average of 253 degrees F (123 C) to minus 387 F (minus 233 C) at night. "

            }, {
                "_id": "589ea85e9b28371154655ed7",
                "thumb": "589ea7c09b28371154655ed6",
                "title": " Ex-CIA Director Says Edward Snowden Shouldn’t Fear Donald Trump",
                "shortDescription": "Michael Hayden says returning the whistleblower to the U.S. would be an unwanted ‘headache.'",
                "fullDescription": "President-elect Donald Trump has called Edward Snowden a \"terrible traitor\" and implied he may deserve execution, but a former leader of both the CIA and the National Security Agency says he doubts Trump will force the whistleblower's return from Russia.  Michael Hayden tells U.S. News that despite the tough talk from the billionaire businessman who campaigned as a good negotiator hopeful of improving relations with Russia, the new president likely would view getting Snowden back as a very bad deal.  “Right now, Snowden is Putin’s headache. Why would Trump want to make him his headache?” Hayden says. “I mean, simple questions of justice aside, of course.”  Without a plea deal, Snowden’s return would be controversial. Though a traitor to some, many others consider him a hero for exposing massive phone and internet surveillance programs.  Hayden is a fan of neither man. He helped implement NSA practices later exposed by Snowden, leading the electronic spy agency from 1999 to 2005 before serving as CIA director from 2006 to 2009. In an op-ed days before the presidential election, he wrote Trump shared “a sympathetic authoritarian chord” with Russian President Vladimir Putin."
            }, {
                "_id": "589ead5a55e176271456aa01",
                "title": " Ex-CIA Director Says Edward Snowden Shouldn’t Fear Donald Trump",
                "shortDescription": "Michael Hayden says returning the whistleblower to the U.S. would be an unwanted ‘headache.'",
                "fullDescription": "President-elect Donald Trump has called Edward Snowden a \"terrible traitor\" and implied he may deserve execution, but a former leader of both the CIA and the National Security Agency says he doubts Trump will force the whistleblower's return from Russia.  Michael Hayden tells U.S. News that despite the tough talk from the billionaire businessman who campaigned as a good negotiator hopeful of improving relations with Russia, the new president likely would view getting Snowden back as a very bad deal.  “Right now, Snowden is Putin’s headache. Why would Trump want to make him his headache?” Hayden says. “I mean, simple questions of justice aside, of course.”  Without a plea deal, Snowden’s return would be controversial. Though a traitor to some, many others consider him a hero for exposing massive phone and internet surveillance programs.  Hayden is a fan of neither man. He helped implement NSA practices later exposed by Snowden, leading the electronic spy agency from 1999 to 2005 before serving as CIA director from 2006 to 2009. In an op-ed days before the presidential election, he wrote Trump shared “a sympathetic authoritarian chord” with Russian President Vladimir Putin."
            }, {
                "_id": "589ead850ab2030ffc1e45b8",
                "title": " Ex-CIA Director Says Edward Snowden Shouldn’t Fear Donald Trump",
                "shortDescription": "Michael Hayden says returning the whistleblower to the U.S. would be an unwanted ‘headache.'",
                "fullDescription": "President-elect Donald Trump has called Edward Snowden a \"terrible traitor\" and implied he may deserve execution, but a former leader of both the CIA and the National Security Agency says he doubts Trump will force the whistleblower's return from Russia.  Michael Hayden tells U.S. News that despite the tough talk from the billionaire businessman who campaigned as a good negotiator hopeful of improving relations with Russia, the new president likely would view getting Snowden back as a very bad deal.  “Right now, Snowden is Putin’s headache. Why would Trump want to make him his headache?” Hayden says. “I mean, simple questions of justice aside, of course.”  Without a plea deal, Snowden’s return would be controversial. Though a traitor to some, many others consider him a hero for exposing massive phone and internet surveillance programs.  Hayden is a fan of neither man. He helped implement NSA practices later exposed by Snowden, leading the electronic spy agency from 1999 to 2005 before serving as CIA director from 2006 to 2009. In an op-ed days before the presidential election, he wrote Trump shared “a sympathetic authoritarian chord” with Russian President Vladimir Putin."

            }, {
                "_id": "589ead9eb2280a2580d9cf04",
                "title": " Ex-CIA Director Says Edward Snowden Shouldn’t Fear Donald Trump",
                "shortDescription": "Michael Hayden says returning the whistleblower to the U.S. would be an unwanted ‘headache.'",
                "fullDescription": "President-elect Donald Trump has called Edward Snowden a \"terrible traitor\" and implied he may deserve execution, but a former leader of both the CIA and the National Security Agency says he doubts Trump will force the whistleblower's return from Russia.  Michael Hayden tells U.S. News that despite the tough talk from the billionaire businessman who campaigned as a good negotiator hopeful of improving relations with Russia, the new president likely would view getting Snowden back as a very bad deal.  “Right now, Snowden is Putin’s headache. Why would Trump want to make him his headache?” Hayden says. “I mean, simple questions of justice aside, of course.”  Without a plea deal, Snowden’s return would be controversial. Though a traitor to some, many others consider him a hero for exposing massive phone and internet surveillance programs.  Hayden is a fan of neither man. He helped implement NSA practices later exposed by Snowden, leading the electronic spy agency from 1999 to 2005 before serving as CIA director from 2006 to 2009. In an op-ed days before the presidential election, he wrote Trump shared “a sympathetic authoritarian chord” with Russian President Vladimir Putin."
            }, {
                "_id": "59830c4a56161e00110e70d5",
                "title": "sdfsdf",
                "shortDescription": "sdfsdfsd",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1502295691/l0vw4e0r8wyqu3smosoy.jpg"
            }, {
                "_id": "5989508268fac20011968da1",
                "title": "Demo Title",
                "shortDescription": "newd=",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1502171262/useuo4vzdzsixlgjo6py.jpg"
            }).then(function () {
                return console.log('finished populating News');
            }).catch(function (err) {
                return console.log('error populating News', err);
            });
        });

        //Same data which is into db
        _menuItem2.default.find({}).remove().then(function () {
            _menuItem2.default.create({
                "_id": "59b92b6aa187de0012620f89",

                "discount": 0,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307497/y32yjy33hg4jyrfmxzis.jpg",
                "categoryTitle": "Starters",
                "category": "59b92a07a187de0012620f81",

                "description": "Grilled Potatoes",
                "title": "Grilled Potatoes",
                "__v": 0,
                "createdAt": "2017-09-13T12:58:18.881Z",

                "sortPrice": 10,
                "price": [{
                    "specialPrice": "10",
                    "pname": "Half",
                    "value": "10"
                }, {
                    "specialPrice": "15",
                    "value": "15",
                    "pname": "Full"
                }],
                "noOfRating": 0,
                "rating": 0,
                "totalRating": 0,
                "extraIngredients": [{}]
            }, {
                "_id": "59b92c21a187de0012620f8d",

                "discount": 4,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307680/jvlg56je15q5cpv4hkkq.jpg",
                "categoryTitle": "Sides",
                "category": "59b9296da187de0012620f7e",

                "description": "Chicken Sticks",
                "title": "Chicken Sticks",
                "__v": 0,
                "createdAt": "2017-09-13T13:01:21.229Z",

                "sortPrice": 12.48,
                "price": [{
                    "specialPrice": 12.48,
                    "pname": "Full",
                    "value": "13"
                }],
                "noOfRating": 4,
                "rating": 3.8,
                "totalRating": 15,
                "extraIngredients": [{
                    "selected": "2",
                    "name": "Extra slice"
                }]
            }, {
                "_id": "59b92c44a187de0012620f8e",

                "discount": 0,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307715/lfc8rghgkejaxddk1tyz.jpg",
                "categoryTitle": "Desserts",
                "category": "59b9298ea187de0012620f7f",

                "description": "Chicken Salad with Arugula",
                "title": "Chicken Salad with Arugula",
                "__v": 0,
                "createdAt": "2017-09-13T13:01:56.160Z",

                "sortPrice": 11,
                "price": [{
                    "specialPrice": "11",
                    "pname": "Full",
                    "value": "11"
                }],
                "noOfRating": 0,
                "rating": 0,
                "totalRating": 0,
                "extraIngredients": [{}]
            }, {
                "_id": "59b92c7ca187de0012620f8f",

                "discount": 0,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307770/w0wjhafr593ucxybqtbn.jpg",
                "categoryTitle": "Sides",
                "category": "59b9296da187de0012620f7e",

                "description": "Dolmades",
                "title": "Dolmades",
                "__v": 0,
                "createdAt": "2017-09-13T13:02:52.410Z",

                "sortPrice": 9,
                "price": [{
                    "specialPrice": "9",
                    "pname": "Full",
                    "value": "9"
                }, {
                    "specialPrice": "7",
                    "value": "7",
                    "pname": "Half"
                }],
                "noOfRating": 6,
                "rating": 3.3,
                "totalRating": 20,
                "extraIngredients": [{
                    "selected": "1",
                    "name": "Butter"
                }]
            }, {
                "_id": "59b92b23a187de0012620f87",

                "discount": 0,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307426/ujfcr8q1ttubuu3ncrva.jpg",
                "categoryTitle": "Slice",
                "category": "59b92a39a187de0012620f82",

                "description": "Filet Slice",
                "title": "Filet Slice",
                "__v": 0,
                "createdAt": "2017-09-13T12:57:07.595Z",

                "sortPrice": 20,
                "price": [{
                    "specialPrice": "20",
                    "pname": "Full",
                    "value": "20"
                }],
                "noOfRating": 0,
                "rating": 0,
                "totalRating": 0,
                "extraIngredients": [{}]
            }, {
                "_id": "59b92adaa187de0012620f85",

                "discount": 0,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307353/s9jvrrplnllwxhvxfpng.jpg",
                "categoryTitle": "Slice",
                "category": "59b92a39a187de0012620f82",

                "description": "Sandnwich Slice",
                "title": "Sandnwich Slice",
                "__v": 0,
                "createdAt": "2017-09-13T12:55:54.410Z",

                "sortPrice": 7,
                "price": [{
                    "specialPrice": "7",
                    "pname": "Full",
                    "value": "7"
                }],
                "noOfRating": 0,
                "rating": 0,
                "totalRating": 0,
                "extraIngredients": [{}]
            }, {
                "_id": "59b92b9ca187de0012620f8a",

                "discount": 0,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307547/rreuhf3jdjeyczqy1dup.jpg",
                "categoryTitle": "Main Course",
                "category": "59b929c3a187de0012620f80",
                "description": "Vegetable MIx",
                "title": "Vegetable MIx",
                "__v": 0,
                "createdAt": "2017-09-13T12:59:08.864Z",

                "sortPrice": 14,
                "price": [{
                    "specialPrice": "14",
                    "pname": "Half",
                    "value": "14"
                }, {
                    "specialPrice": "18",
                    "value": "18",
                    "pname": "Full"
                }],
                "noOfRating": 0,
                "rating": 0,
                "totalRating": 0,
                "extraIngredients": [{}]
            }, {
                "_id": "59b92abda187de0012620f84",

                "discount": 10,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307324/bpubaaehevrfmlttlxsj.jpg",
                "categoryTitle": "Slice",
                "category": "59b92a39a187de0012620f82",

                "description": "Mutton Slice",
                "title": "Mutton Slice",
                "__v": 0,
                "createdAt": "2017-09-13T12:55:25.194Z",

                "sortPrice": 49.5,
                "price": [{
                    "specialPrice": 49.5,
                    "pname": "Full",
                    "value": "55"
                }],
                "noOfRating": 1,
                "rating": 4,
                "totalRating": 4,
                "extraIngredients": [{
                    "selected": "2",
                    "name": "Extra Slice"
                }]
            }, {
                "_id": "59b92a9fa187de0012620f83",

                "discount": 10,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307294/ncbbsaypll41odqyegsc.jpg",
                "categoryTitle": "Starters",
                "category": "59b92a07a187de0012620f81",

                "description": "Souvlaki",
                "title": "Souvlaki",
                "__v": 0,
                "createdAt": "2017-09-13T12:54:55.256Z",

                "sortPrice": 16.2,
                "price": [{
                    "specialPrice": 16.2,
                    "pname": "Half",
                    "value": "18"
                }, {
                    "specialPrice": 31.5,
                    "value": "35",
                    "pname": "Full"
                }],
                "noOfRating": 5,
                "rating": 4.2,
                "totalRating": 21,
                "extraIngredients": [{}]
            }, {
                "_id": "59b92be6a187de0012620f8c",

                "discount": 0,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307621/fmo2foqcocqwwxjbrehc.jpg",
                "categoryTitle": "Desserts",
                "category": "59b9298ea187de0012620f7f",

                "description": "Cheesy Rosemary Rolls",
                "title": "Cheesy Rosemary Rolls",
                "__v": 0,
                "createdAt": "2017-09-13T13:00:22.839Z",

                "sortPrice": 16,
                "price": [{
                    "specialPrice": "16",
                    "pname": "Full",
                    "value": "16"
                }, {
                    "specialPrice": "10",
                    "value": "10",
                    "pname": "Half"
                }, {
                    "specialPrice": "8",
                    "value": "8",
                    "pname": "Quarter"
                }],
                "noOfRating": 0,
                "rating": 0,
                "totalRating": 0,
                "extraIngredients": [{
                    "selected": "2",
                    "name": "Extra Vegis"
                }]
            }, {
                "_id": "59b92bc3a187de0012620f8b",

                "discount": 10,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307586/mtbamwlubug2ur1abycx.jpg",
                "categoryTitle": "Main Course",
                "category": "59b929c3a187de0012620f80",

                "description": "King's Beef",
                "title": "King's Beef",
                "__v": 0,
                "createdAt": "2017-09-13T12:59:47.338Z",

                "sortPrice": 19.8,
                "price": [{
                    "specialPrice": 19.8,
                    "pname": "Half",
                    "value": "22"
                }, {
                    "specialPrice": 36,
                    "value": "40",
                    "pname": "Full"
                }],
                "noOfRating": 6,
                "rating": 3.6,
                "totalRating": 22,
                "extraIngredients": [{
                    "selected": "3",
                    "name": "Extra Slice"
                }]
            }, {
                "_id": "59b92b47a187de0012620f88",

                "discount": 5,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307462/wiplqsfgdlqgzdlbwlqc.jpg",
                "categoryTitle": "Slice",
                "category": "59b92a39a187de0012620f82",

                "description": "Greek Traditional Slice",
                "title": "Greek Traditional Slice",
                "__v": 0,
                "createdAt": "2017-09-13T12:57:43.744Z",

                "sortPrice": 7.125,
                "price": [{
                    "specialPrice": 7.125,
                    "pname": "Half",
                    "value": "7.5"
                }, {
                    "specialPrice": 14.25,
                    "value": "15",
                    "pname": "Full"
                }],
                "noOfRating": 0,
                "rating": 0,
                "totalRating": 0,
                "extraIngredients": [{
                    "selected": "2",
                    "name": "Extra Slice"
                }]
            }, {
                "_id": "59b92afea187de0012620f86",

                "discount": 3,
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307389/j0ekzw9bzpprcxu5z9wm.jpg",
                "categoryTitle": "Slice",
                "category": "59b92a39a187de0012620f82",

                "description": "Sweet Slice",
                "title": "Sweet Slice",
                "__v": 0,
                "createdAt": "2017-09-13T12:56:30.742Z",

                "sortPrice": 5.82,
                "price": [{
                    "specialPrice": 5.82,
                    "pname": "Half",
                    "value": "6"
                }, {
                    "specialPrice": 9.7,
                    "value": "10",
                    "pname": "Full"
                }],
                "noOfRating": 2,
                "rating": 3.5,
                "totalRating": 7,
                "extraIngredients": [{
                    "selected": "2",
                    "name": "Extra Sweet "
                }]
            }).then(function () {
                console.log('finished populating MenuItem');
            });
        });
        _notification2.default.find({}).remove().then(function () {
            _notification2.default.create({ "_id": "59d343a971fb9e16304e992e",

                "priceGrandTotal": 23.8,
                "orderID": 10087,
                "order": "59cce6fcab1e891f3c91a293",

                "createdAt": "2017-10-03T08:00:41.434Z",

                "readNotification": false,
                "__v": 0
            }).then(function () {
                return console.log('finished populating Notification');
            }).catch(function (err) {
                return console.log('error populating Notification', err);
            });
        });

        _order2.default.find({}).remove().then(function () {
            _notification2.default.find({}).remove().then(function () {
                _order2.default.create({
                    "_id": "5a098ebae82afd00124e2a7b",
                    "shippingAddress": {
                        "selected": true,
                        "primaryAddress": false,
                        "createdAt": "2017-09-30T10:30:01.951Z",
                        "__v": 0,
                        "contactNumber": 998876655,
                        "pincode": 560068,
                        "state": "karnataka",
                        "city": "bangalore",
                        "landmark": "near udupi signal",
                        "apartmentName": "pietech solution",
                        "homeNumber": 123,
                        "userName": "ajay",
                        "user": "59ccf50d3a2b240012c27e93",
                        "_id": "5995677d1cd02a1b10ca3a9c"
                    },
                    "user": "59ccf50d3a2b240012c27e93",
                    "grandTotal": 94.92999999999999,
                    "subTotal": 74,
                    "taxAmount": 3.33,
                    "couponDiscountPercentage": 10,
                    "deductedAmountByCoupon": 7.4,
                    "paymentOption": "COD",
                    "createdAt": "2017-11-13T12:23:22.118Z",
                    "status": "Delivered",
                    "cart": [{
                        "itemTotalPrice": 64,
                        "imageUrl": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307621/fmo2foqcocqwwxjbrehc.jpg",
                        "Quantity": "4",
                        "rating": 5,
                        "ratingFlag": 1,
                        "sizeOption": {
                            "value": "16",
                            "pname": "Full",
                            "specialPrice": "16"
                        },
                        "price": "16",
                        "name": "Cheesy Rosemary Rolls",
                        "_id": "59b92be6a187de0012620f8c",
                        "productId": "59b92be6a187de0012620f8c"
                    }, {
                        "itemTotalPrice": 10,
                        "imageUrl": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307497/y32yjy33hg4jyrfmxzis.jpg",
                        "Quantity": 1,
                        "rating": 0,
                        "ratingFlag": 0,
                        "sizeOption": {
                            "value": "10",
                            "pname": "Half",
                            "specialPrice": "10"
                        },
                        "price": 10,
                        "name": "Grilled Potatoes",
                        "_id": "59b92b6aa187de0012620f89",
                        "productId": "59b92b6aa187de0012620f89"
                    }],
                    "userNotification": [{
                        "time": 1510575802120,
                        "status": "Thank you for your order"
                    }, {
                        "time": 1510575802120,
                        "status": "Waiting for your payment to be processed."
                    }, {
                        "time": 1510575802120,
                        "status": "Awaiting confirmation from vendor."
                    }, {
                        "status": "Your order has been delivered,Share your experience with us.",
                        "time": 1510575890145
                    }],
                    "payment": {
                        "paymentStatus": false
                    },
                    "__v": 1
                }, {
                    "_id": "5a09902be82afd00124e2a81",
                    "shippingAddress": {
                        "selected": true,
                        "primaryAddress": false,
                        "createdAt": "2017-09-30T10:30:01.951Z",
                        "__v": 0,
                        "contactNumber": 998876655,
                        "pincode": 560068,
                        "state": "karnataka",
                        "city": "bangalore",
                        "landmark": "near udupi signal",
                        "apartmentName": "pietech solution",
                        "homeNumber": 123,
                        "userName": "ajay",
                        "user": "59ccf50d3a2b240012c27e93",
                        "_id": "5995677d1cd02a1b10ca3a9c"
                    },
                    "user": "59ccf50d3a2b240012c27e93",
                    "grandTotal": 35.483200000000004,
                    "subTotal": 12.48,
                    "taxAmount": 0.49920000000000003,
                    "couponDiscountPercentage": 20,
                    "deductedAmountByCoupon": 2.4960000000000004,
                    "paymentOption": "COD",
                    "createdAt": "2017-11-13T12:29:31.749Z",
                    "status": "Delivered",
                    "cart": [{
                        "itemTotalPrice": 12.48,
                        "imageUrl": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307680/jvlg56je15q5cpv4hkkq.jpg",
                        "Quantity": 1,
                        "rating": 3,
                        "ratingFlag": 1,
                        "sizeOption": {
                            "value": "13",
                            "pname": "Full",
                            "specialPrice": 12.48
                        },
                        "price": 12.48,
                        "name": "Chicken Sticks",
                        "_id": "59b92c21a187de0012620f8d",
                        "productId": "59b92c21a187de0012620f8d"
                    }],
                    "userNotification": [{
                        "time": 1510576171750,
                        "status": "Thank you for your order"
                    }, {
                        "time": 1510576171750,
                        "status": "Waiting for your payment to be processed."
                    }, {
                        "time": 1510576171750,
                        "status": "Awaiting confirmation from vendor."
                    }, {
                        "status": "Your order has been delivered,Share your experience with us.",
                        "time": 1510576197189
                    }],
                    "payment": {
                        "paymentStatus": false
                    },
                    "__v": 1
                }).then(function () {
                    console.log('finished populating');
                });
            });
        });

        _category2.default.find({}).remove().then(function () {
            _category2.default.create({
                "_id": "59b92942a187de0012620f7d",
                "title": "Salads",
                "description": "Start the meal off right with these delicious appetizer recipes for dips, finger foods and other tasty bites your guests can nibble on.",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505306944/m4gzofb4b7ojzrean6u0.jpg",
                "createdAt": "2017-09-13T12:49:06.220Z",
                "__v": 0
            }, {
                "_id": "59b9296da187de0012620f7e",
                "title": "Sides",
                "description": "Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that is so prevalent in Greek cuisine",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505306988/isxrjlbqu1hfhrecquoy.jpg",
                "createdAt": "2017-09-13T12:49:49.326Z",
                "__v": 0
            }, {
                "_id": "59b9298ea187de0012620f7f",
                "title": "Desserts",
                "description": "Serving authentic Italian Chicken Masala made by a 100% Italian from Chicago to Denver's front range. Vegan and Gluten free options available",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307020/tqhtelxgxysh9vgd8ug4.jpg",
                "createdAt": "2017-09-13T12:50:22.159Z",
                "__v": 0
            }, {
                "_id": "59b929c3a187de0012620f80",
                "title": "Main Course",
                "description": "Start the meal off right with these delicious appetizer recipes for dips, finger foods and other tasty bites your guests can nibble on.",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307075/ovfdhngzqdfi0fixexvo.jpg",
                "createdAt": "2017-09-13T12:51:15.848Z",
                "__v": 0
            }, {
                "_id": "59b92a07a187de0012620f81",
                "title": "Starters",
                "description": "Souvlaki features the fresh-tasting combination of lemon juice, garlic, and olive oil that is so prevalent in Greek cuisine",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307140/ylm95agrqulifyaeieew.jpg",
                "createdAt": "2017-09-13T12:52:23.224Z",
                "__v": 0
            }, {
                "_id": "59b92a39a187de0012620f82",
                "title": "Slice",
                "description": "Start the meal off right with these delicious appetizer recipes for dips, finger foods and other tasty bites your guests can nibble on.",
                "thumb": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307192/dkbqgjbjt9l4zxr2whw5.jpg",
                "createdAt": "2017-09-13T12:53:13.413Z",
                "__v": 0
            }).then(function () {
                console.log('finished populating Category');
            });
        });

        _business2.default.find({}).remove().then(function () {
            _business2.default.create({
                "_id": "598827f4e07ccd2ae0809512",
                "email": "ajay@gmail.com",
                "profession": "YourProfession",
                "description": "Description",
                "facebookUrl": "fbUrl",
                "instagramUrl": "instaUrl",
                "twitterUrl": "twitterUrl",
                "phoneNumber": 8654321234,
                "pinterestPage": "pinterestPage",
                "storeName": "store name would be here",
                "mapOriginLatitude": 12.971599,
                "mapOriginLongitude": 77.594563,
                "mapZoomLevel": 200,
                "createdAt": "2017-08-07T08:42:28.943Z",

                "mapAnnotation": ["MAP annotation"],
                "officeLocation": ["your Office Location"],
                "address": ["Address"],
                "__v": 0
            }).then(function () {
                return console.log('finished populating Businesses');
            }).catch(function (err) {
                return console.log('error populating Businesses', err);
            });
        });
        _order2.default.find({}).remove().then(function () {
            _order2.default.create({
                "_id": "59bf71672844e116bcdd1377",
                "orderID": 10066,
                "user": "598986e27994ee00114a58e6",
                "grandTotal": 20.4,
                "subTotal": 24,
                "taxAmount": 1.2,
                "couponDiscountPercentage": 20,
                "deductedAmountByCoupon": 4.8,
                "shippingAddress": {
                    "primaryAddress": false,
                    "createdAt": "2017-09-18T07:10:01.144Z",
                    "__v": 0,
                    "contactNumber": 9988776655,
                    "pincode": 560068,
                    "state": "karnataka",
                    "city": "bangalore",
                    "landmark": "near udupi signa;",
                    "apartmentName": "ngr layout",
                    "homeNumber": 123,
                    "userName": "sandeep",
                    "user": "598986e27994ee00114a58e6"
                },
                "paymentOption": "PayPal",
                "createdAt": "2017-09-18T07:10:31.177Z",
                "status": "pending",
                "cart": [{
                    "itemTotalPrice": 10,
                    "Quantity": 1,
                    "imageUrl": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307497/y32yjy33hg4jyrfmxzis.jpg",
                    "id": "59b92b6aa187de0012620f89",
                    "extraOption": [],
                    "sizeOption": {
                        "pname": "1",
                        "value": "10"
                    },
                    "name": "Grilled Potatoes"
                }, {
                    "itemTotalPrice": 14,
                    "Quantity": 2,
                    "imageUrl": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307353/s9jvrrplnllwxhvxfpng.jpg",
                    "id": "59b92adaa187de0012620f85",
                    "extraOption": [],
                    "sizeOption": {
                        "pname": "1",
                        "value": "7"
                    },
                    "name": "Sandnwich Slice"
                }],
                "userNotification": [{
                    "time": 1505718631179,
                    "status": "Thank you for your order"
                }, {
                    "time": 1505718631179,
                    "status": "Waiting for your payment to be processed."
                }],
                "payment": {
                    "paymentStatus": false
                },
                "__v": 0
            }, {
                "_id": "59bf71722844e116bcdd1379",

                "orderID": 10067,
                "user": "598986e27994ee00114a58e6",

                "grandTotal": 20.4,
                "subTotal": 24,
                "taxAmount": 1.2,
                "couponDiscountPercentage": 20,
                "deductedAmountByCoupon": 4.8,
                "shippingAddress": {
                    "primaryAddress": false,
                    "createdAt": "2017-09-18T07:10:01.144Z",
                    "__v": 0,
                    "contactNumber": 9988776655,
                    "pincode": 560068,
                    "state": "karnataka",
                    "city": "bangalore",
                    "landmark": "near udupi signa;",
                    "apartmentName": "ngr layout",
                    "homeNumber": 123,
                    "userName": "sandeep",
                    "user": "598986e27994ee00114a58e6"
                },
                "paymentOption": "COD",
                "createdAt": "2017-09-18T07:10:42.969Z",

                "status": "pending",
                "cart": [{
                    "itemTotalPrice": 10,
                    "Quantity": 1,
                    "imageUrl": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307497/y32yjy33hg4jyrfmxzis.jpg",
                    "id": "59b92b6aa187de0012620f89",
                    "extraOption": [],
                    "sizeOption": {
                        "pname": "1",
                        "value": "10"
                    },
                    "name": "Grilled Potatoes"
                }, {
                    "itemTotalPrice": 14,
                    "Quantity": 2,
                    "imageUrl": "http://res.cloudinary.com/ddboxana4/image/upload/v1505307353/s9jvrrplnllwxhvxfpng.jpg",
                    "id": "59b92adaa187de0012620f85",
                    "extraOption": [],
                    "sizeOption": {
                        "pname": "1",
                        "value": "7"
                    },
                    "name": "Sandnwich Slice"
                }],
                "userNotification": [{
                    "time": 1505718642970,
                    "status": "Thank you for your order"
                }, {
                    "time": 1505718642970,
                    "status": "Waiting for your payment to be processed."
                }, {
                    "time": 1505718642970,
                    "status": "Awaiting confirmation from vendor."
                }],
                "payment": {
                    "paymentStatus": false
                },
                "__v": 0
            }).then(function () {
                return console.log('finished populating Order');
            }).catch(function (err) {
                return console.log('error populating Order', err);
            });
        });
        _rating2.default.find({}).remove().then(function () {
            _rating2.default.create({
                "_id": "5a098f51e82afd00124e2a7f",
                "user": "5a16b9c74c1bb8d4086e5a91",
                "comment": "Product is good and healthy food....",
                "order": "5a098ebae82afd00124e2a7b",
                "menuItem": "59b92be6a187de0012620f8c",
                "createdAt": "2017-11-13T12:25:53.335Z",
                "rating": 5,
                "__v": 0
            }, {
                "_id": "5a098f85e82afd00124e2a80",
                "user": "5a16b9c74c1bb8d4086e5a91",
                "comment": "Nice food, happy to happy for..",
                "order": "5a098ebae82afd00124e2a7b",
                "menuItem": "59b92b6aa187de0012620f89",
                "createdAt": "2017-11-13T12:26:45.901Z",
                "rating": 4,
                "__v": 0
            }, {
                "_id": "5a09906be82afd00124e2a84",
                "user": "5a16b9c74c1bb8d4086e5a91",
                "comment": "nice food for non-vegi...",
                "order": "5a09902be82afd00124e2a81",
                "menuItem": "59b92c21a187de0012620f8d",
                "createdAt": "2017-11-13T12:30:35.934Z",
                "rating": 3,
                "__v": 0
            }).then(function () {
                console.log('finished populating Rating');
            });
        });

        _message2.default.find({}).remove().then(function () {
            _message2.default.create({
                "sentBy": "sender",
                "message": "gud evening",
                "receiverRead": true,
                "receiver": "59ccf50d3a2b240012c27e09",

                "sender": "59ccf50d3a2b240012c27e93",

                "timestamp": 1507029524000,

                "__v": 0
            }, {

                "sentBy": "sender",
                "message": "how is going?",
                "receiverRead": true,
                "receiver": "59ccf50d3a2b240012c27e09",

                "sender": "59ccf50d3a2b240012c27e93",

                "timestamp": 1507029751000,

                "__v": 0
            }, {

                "sentBy": "sender",
                "message": "whats up?????",
                "receiverRead": true,
                "receiver": "59ccf50d3a2b240012c27e09",

                "sender": "59ccf50d3a2b240012c27e93",

                "timestamp": 1507030279000,

                "__v": 0
            }, {

                "sentBy": "sender",
                "message": "heyyyy",
                "receiverRead": true,
                "receiver": "59ccf50d3a2b240012c27e09",

                "sender": "59ccf50d3a2b240012c27e93",

                "timestamp": 1507030436000,
                "__v": 0
            }, {

                "sentBy": "sender",
                "message": "Hiiiii",
                "receiverRead": true,
                "receiver": "59ccf50d3a2b240012c27e09",

                "sender": "59ccf50d3a2b240012c27e93",

                "timestamp": 1507030692000,

                "__v": 0
            }).then(function () {
                console.log('finished populating Message');
            });
        });
    }
}
//# sourceMappingURL=seed.js.map
