//  Resturant Data
 const resturantData = [
    {
      "title": "Pasta Palace",
      "imgUrl": "https://example.com/images/pasta-palace.jpg",
      "foods": ["Pasta", "Pizza", "Salad"],
      "time": "10:00 AM - 10:00 PM",
      "pickup": true,
      "delivery": true,
      "isOpen": true,
      "logoUrl": "https://example.com/images/pasta-palace-logo.png",
      "ratting": 4.5,
      "rattingCount": "150",
      "code": "PSTA123",
      "location": {
        "id": "1",
        "latitude": 40.730610,
        "latitudeDelta": 0.005,
        "longitude": -73.935242,
        "longitudeDelta": 0.005,
        "address": "123 Pasta Lane, New York, NY",
        "title": "Pasta Palace Location"
      }
    },
    {
      "title": "Burger Bonanza",
      "imgUrl": "https://example.com/images/burger-bonanza.jpg",
      "foods": ["Burgers", "Fries", "Milkshakes"],
      "time": "11:00 AM - 11:00 PM",
      "pickup": true,
      "delivery": false,
      "isOpen": true,
      "logoUrl": "https://example.com/images/burger-bonanza-logo.png",
      "ratting": 4.0,
      "rattingCount": "200",
      "code": "BRGR456",
      "location": {
        "id": "2",
        "latitude": 34.052235,
        "latitudeDelta": 0.005,
        "longitude": -118.243683,
        "longitudeDelta": 0.005,
        "address": "456 Burger Blvd, Los Angeles, CA",
        "title": "Burger Bonanza Location"
      }
    },
    {
      "title": "Sushi Central",
      "imgUrl": "https://example.com/images/sushi-central.jpg",
      "foods": ["Sushi", "Sashimi", "Tempura"],
      "time": "12:00 PM - 9:00 PM",
      "pickup": false,
      "delivery": true,
      "isOpen": true,
      "logoUrl": "https://example.com/images/sushi-central-logo.png",
      "ratting": 4.7,
      "rattingCount": "85",
      "code": "SUSH789",
      "location": {
        "id": "3",
        "latitude": 51.507351,
        "latitudeDelta": 0.005,
        "longitude": -0.127758,
        "longitudeDelta": 0.005,
        "address": "789 Sushi St, London, UK",
        "title": "Sushi Central Location"
      }
    },
    {
      "title": "Taco Town",
      "imgUrl": "https://example.com/images/taco-town.jpg",
      "foods": ["Tacos", "Burritos", "Nachos"],
      "time": "9:00 AM - 9:00 PM",
      "pickup": true,
      "delivery": true,
      "isOpen": false,
      "logoUrl": "https://example.com/images/taco-town-logo.png",
      "ratting": 3.8,
      "rattingCount": "120",
      "code": "TACO101",
      "location": {
        "id": "4",
        "latitude": 35.689487,
        "latitudeDelta": 0.005,
        "longitude": 139.691711,
        "longitudeDelta": 0.005,
        "address": "101 Taco Road, Tokyo, Japan",
        "title": "Taco Town Location"
      }
    },
    {
      "title": "Curry Corner",
      "imgUrl": "https://example.com/images/curry-corner.jpg",
      "foods": ["Curry", "Naan", "Biryani"],
      "time": "11:00 AM - 10:00 PM",
      "pickup": true,
      "delivery": false,
      "isOpen": true,
      "logoUrl": "https://example.com/images/curry-corner-logo.png",
      "ratting": 4.2,
      "rattingCount": "95",
      "code": "CURRY202",
      "location": {
        "id": "5",
        "latitude": 28.704060,
        "latitudeDelta": 0.005,
        "longitude": 77.102493,
        "longitudeDelta": 0.005,
        "address": "202 Curry Ave, New Delhi, India",
        "title": "Curry Corner Location"
      }
    }
  ]
  

  // Food Data
  const foodData = [
    [
      {
        "title": "Margherita Pizza",
        "desc": "Classic margherita pizza with fresh mozzarella and basil.",
        "price": 12.99,
        "imgUrl": "https://example.com/images/margherita_pizza.jpg",
        "foodTags": "Vegetarian,Italian",
        "category": "Pizza",
        "code": "PZ001",
        "isAvalable": true,
        "resturant": "64cb1f97b8f20c2bc9dceb4f"
      },
      {
        "title": "Spicy Chicken Wings",
        "desc": "Crispy chicken wings tossed in a spicy sauce.",
        "price": 8.99,
        "imgUrl": "https://example.com/images/spicy_chicken_wings.jpg",
        "foodTags": "Spicy,Chicken,Appetizer",
        "category": "Appetizers",
        "code": "AP001",
        "isAvalable": true,
        "resturant": "64cb1f97b8f20c2bc9dceb4f"
      },
      {
        "title": "Caesar Salad",
        "desc": "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
        "price": 7.50,
        "imgUrl": "https://example.com/images/caesar_salad.jpg",
        "foodTags": "Salad,Vegetarian,Healthy",
        "category": "Salads",
        "code": "SD001",
        "isAvalable": true,
        "resturant": "64cb1f97b8f20c2bc9dceb50"
      },
      {
        "title": "Beef Burger",
        "desc": "Juicy beef patty with lettuce, tomato, cheese, and a special sauce.",
        "price": 10.99,
        "imgUrl": "https://example.com/images/beef_burger.jpg",
        "foodTags": "Burger,Beef,American",
        "category": "Burgers",
        "code": "BG001",
        "isAvalable": false,
        "resturant": "64cb1f97b8f20c2bc9dceb51"
      },
      {
        "title": "Chocolate Cake",
        "desc": "Rich chocolate cake with a smooth, creamy frosting.",
        "price": 5.99,
        "imgUrl": "https://example.com/images/chocolate_cake.jpg",
        "foodTags": "Dessert,Chocolate,Sweet",
        "category": "Desserts",
        "code": "DS001",
        "isAvalable": true,
        "resturant": "64cb1f97b8f20c2bc9dceb52"
      }
    ]
    
  ]