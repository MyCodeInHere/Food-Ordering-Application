export const Categories = [
    {
        id: '1',
        name: 'Bruncherie',
        time: '25-35 min',
        type: 'Breakfast, lunch, desserts',
        price: 3.26,
        image: require('../../assets/images/categories/bruncherie.jpg'),
        popular: false,
        isNew: true,
        items: [
            {
                type: 'Sandwiches',
                item: [
                    {
                        name: 'Artichoke Sandwich',
                        describe: 'Artichoke, spinach, cheddar and mushrooms.',
                        cost: 7.50,
                        image: require('../../assets/images/categories/atichokeSandwich.jpg')
                    },
                    {
                        name: 'Egg Sandwich',
                        describe: 'Tomato, mozzarella topped with tried egg.',
                        cost: 5.70,
                        image: require('../../assets/images/categories/EggSandwich.jpg')
                    },
                    {
                        name: 'Chilli Chicken',
                        describe: 'Chicken, rocket and chili peppers with',
                        cost: 7.30,
                        image: require('../../assets/images/categories/ChilliChicken.jpg')
                    }
                ],
            },
            {
                type: 'Desserts',
                item: [
                    {
                        name: 'Strawberry Cake',
                        describe: 'Topped with fresh strawberries and mint.',
                        cost: 4.50,
                        image: require('../../assets/images/categories/StrawberryCake.jpg')
                    },
                    {
                        name: 'Lemon Mousse',
                        describe: 'Topped with fresh strawberries and mint.',
                        cost: 4.00,
                        image: require('../../assets/images/categories/ChilliChicken.jpg')
                    },
                    {
                        name: 'Homemade Granola',
                        describe: 'Granola, greek yogurt topped with fresh',
                        cost: 4.30,
                        image: require('../../assets/images/categories/HomemadeGranola.jpg')
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: "Pizza Place",
        time: "30-40 min",
        type: "Lunch, Dinner",
        price: 5.99,
        image: require("../../assets/images/categories/PizzaPlace.jpg"),
        popular: true,
        isNew: false,
        items: [
            {
                type: "Pizzas",
                item: [
                    {
                        name: "Margherita",
                        describe: "Fresh tomatoes, mozzarella, and basil.",
                        cost: 10.99,
                        image: require("../../assets/images/categories/Margherita.jpg")
                    },
                    {
                        name: "Pepperoni",
                        describe: "Classic pepperoni with melted cheese.",
                        cost: 12.99,
                        image: require("../../assets/images/categories/Pepperoni.jpg")
                    },
                    {
                        name: "Vegetarian",
                        describe: "Assorted vegetables and cheese blend.",
                        cost: 11.99,
                        image: require("../../assets/images/categories/Vegetarian.jpg")
                    }
                ]
            },
            {
                type: "Appetizers",
                item: [
                    {
                        name: "Garlic Bread",
                        describe: "Toasted bread with garlic butter.",
                        cost: 4.99,
                        image: require("../../assets/images/categories/GarlicBread.jpg")
                    },
                    {
                        name: "Chicken Wings",
                        describe: "Spicy buffalo wings with ranch dip.",
                        cost: 8.99,
                        image: require("../../assets/images/categories/ChickenWings.jpg")
                    },
                    {
                        name: "Mozzarella Sticks",
                        describe: "Deep-fried breaded mozzarella.",
                        cost: 7.99,
                        image: require("../../assets/images/categories/MozzarellaSticks.jpg")
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        name: "Sushi Bar",
        time: "20-30 min",
        type: "Lunch, Dinner",
        price: 0,
        image: require("../../assets/images/categories/SushiBar.jpg"),
        popular: true,
        isNew: true,
        items: [
            {
                type: "Nigiri Sushi",
                item: [
                    {
                        name: "Salmon Nigiri",
                        describe: "Fresh salmon slices on sushi rice.",
                        cost: 2.50,
                        image: require("../../assets/images/categories/SalmonNigiri.jpg")
                    },
                    {
                        name: "Tuna Nigiri",
                        describe: "Sushi-grade tuna on seasoned rice.",
                        cost: 3.00,
                        image: require("../../assets/images/categories/TunaNigiri.jpg")
                    },
                    {
                        name: "Ebi Nigiri",
                        describe: "Cooked shrimp on seasoned sushi rice.",
                        cost: 2.00,
                        image: require("../../assets/images/categories/EbiNigiri.jpg")
                    }
                ]
            },
            {
                type: "Maki Rolls",
                item: [
                    {
                        name: "California Roll",
                        describe: "Crab stick, avocado, cucumber.",
                        cost: 5.99,
                        image: require("../../assets/images/categories/CaliforniaRoll.jpg")
                    },
                    {
                        name: "Spicy Tuna Roll",
                        describe: "Spicy tuna, cucumber, and chili sauce.",
                        cost: 6.99,
                        image: require("../../assets/images/categories/SpicyTunaRoll.jpg")
                    },
                    {
                        name: "Vegetable Roll",
                        describe: "Assorted fresh vegetables and avocado.",
                        cost: 4.99,
                        image: require("../../assets/images/categories/VegetableRoll.jpg")
                    }
                ]
            }
        ]
    },
    {
        id: '4',
        name: "Thai Cuisine",
        time: "25-35 min",
        type: "Lunch, Dinner",
        price: 5.99,
        image: require("../../assets/images/categories/ThaiCuisine.jpg"),
        popular: true,
        isNew: false,
        items: [
            {
                type: "Curries",
                item: [
                    {
                        name: "Green Curry",
                        describe: "Spicy coconut curry with vegetables and choice of protein.",
                        cost: 9.99,
                        image: require("../../assets/images/categories/GreenCurry.jpg")
                    },
                    {
                        name: "Red Curry",
                        describe: "Mild coconut curry with bamboo shoots and choice of protein.",
                        cost: 9.99,
                        image: require("../../assets/images/categories/RedCurry.jpg")
                    },
                    {
                        name: "Massaman Curry",
                        describe: "Rich curry with potatoes, peanuts, and choice of protein.",
                        cost: 10.99,
                        image: require("../../assets/images/categories/MassamanCurry.jpg")
                    }
                ]
            },
            {
                type: "Noodles",
                item: [
                    {
                        name: "Pad Thai",
                        describe: "Stir-fried rice noodles with tofu, bean sprouts, and peanuts.",
                        cost: 8.99,
                        image: require("../../assets/images/categories/PadThai.jpg")
                    },
                    {
                        name: "Drunken Noodles",
                        describe: "Spicy stir-fried noodles with basil and choice of protein.",
                        cost: 9.99,
                        image: require("../../assets/images/categories/DrunkenNoodles.jpg")
                    },
                    {
                        name: "Pad See Ew",
                        describe: "Stir-fried wide rice noodles with broccoli and choice of protein.",
                        cost: 9.99,
                        image: require("../../assets/images/categories/PadSeeEw.jpg")
                    }
                ]
            }
        ]
    },
    {
        id: '5',
        name: "Italian Trattoria",
        time: "35-45 min",
        type: "Lunch, Dinner",
        price: 0,
        image: require("../../assets/images/categories/ItalianTrattoria.jpg"),
        popular: true,
        isNew: true,
        items: [
            {
                type: "Pasta",
                item: [
                    {
                        name: "Spaghetti Carbonara",
                        describe: "Pasta with creamy egg and bacon sauce.",
                        cost: 12.99,
                        image: require("../../assets/images/categories/SpaghettiCarbonara.jpg")
                    },
                    {
                        name: "Fettuccine Alfredo",
                        describe: "Pasta with creamy Parmesan sauce.",
                        cost: 11.99,
                        image: require("../../assets/images/categories/FettuccineAlfredo.jpg")
                    },
                    {
                        name: "Penne Arrabiata",
                        describe: "Pasta with spicy tomato sauce and chili flakes.",
                        cost: 10.99,
                        image: require("../../assets/images/categories/PenneArrabiata.jpg")
                    }
                ]
            },
            {
                type: "Pizza",
                item: [
                    {
                        name: "Quattro Formaggi",
                        describe: "Four cheese pizza with mozzarella, gorgonzola, fontina, and Parmesan.",
                        cost: 14.99,
                        image: require("../../assets/images/categories/QuattroFormaggi.jpg")
                    },
                    {
                        name: "Prosciutto e Funghi",
                        describe: "Pizza with prosciutto, mushrooms, mozzarella, and tomato sauce.",
                        cost: 13.99,
                        image: require("../../assets/images/categories/ProsciuttoeFunghi.jpg")
                    },
                    {
                        name: "Margherita Pizza",
                        describe: "Classic pizza with tomato sauce, mozzarella, and basil.",
                        cost: 10.99,
                        image: require("../../assets/images/categories/MargheritaPizza.jpg")
                    }
                ]
            }
        ]
    },
    {
        id: '6',
        name: "Mexican Cantina",
        time: "20-30 min",
        type: "Lunch, Dinner",
        price: 0,
        image: require("../../assets/images/categories/MexicanCantina.jpg"),
        popular: true,
        isNew: true,
        items: [
            {
                type: "Tacos",
                item: [
                    {
                        name: "Carnitas Tacos",
                        describe: "Slow-cooked pork with cilantro and onions.",
                        cost: 3.99,
                        image: require("../../assets/images/categories/CarnitasTacos.jpg")
                    },
                    {
                        name: "Fish Tacos",
                        describe: "Battered fish with slaw and chipotle mayo.",
                        cost: 4.49,
                        image: require("../../assets/images/categories/FishTacos.jpg")
                    },
                    {
                        name: "Barbacoa Tacos",
                        describe: "Shredded beef with onions and salsa.",
                        cost: 4.49,
                        image: require("../../assets/images/categories/BarbacoaTacos.jpg")
                    }
                ]
            },
            {
                type: "Burritos",
                item: [
                    {
                        name: "Carnitas Burrito",
                        describe: "Slow-cooked pork with rice, beans, and salsa.",
                        cost: 7.99,
                        image: require("../../assets/images/categories/CarnitasBurrito.jpg")
                    },
                    {
                        name: "Shrimp Burrito",
                        describe: "Grilled shrimp with rice, beans, and guacamole.",
                        cost: 8.99,
                        image: require("../../assets/images/categories/ShrimpBurrito.jpg")
                    },
                    {
                        name: "Vegetarian Burrito",
                        describe: "Grilled vegetables with rice, beans, and cheese.",
                        cost: 7.99,
                        image: require("../../assets/images/categories/VegetarianBurrito.jpg")
                    }
                ]
            }
        ]
    }
]