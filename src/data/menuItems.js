import greekSalad from "../assets/foods/greek-salad.jpg";
import bruchetta from "../assets/foods/bruchetta.jpg";
import lemonDessert from "../assets/foods/lemon-dessert.jpg";
import pasta from "../assets/foods/pasta.jpg";
import grilledFish from "../assets/foods/grilled-fish.jpg";
import hummusPlate from "../assets/restauranfood.jpg";

export const menuItems = [
  {
    id: 1,
    title: "Greek Salad",
    price: 12.99,
    category: "lunch",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSalad,
    deliveryTime: "15 minutes",
    isSpecial: true,
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 9.99, // Base price 9.99 + 3 additions ($1 each) = $12.99 total in design mock
    category: "lunch",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes, oregano and fresh bazil.",
    image: bruchetta,
    deliveryTime: "20 minutes",
    isSpecial: true,
  },
  {
    id: 3,
    title: "Mediterranean Hummus Plate",
    price: 8.99,
    category: "A La Carte",
    description: "Creamy hummus served with olives, roasted cherry tomatoes, falafel and warm home-made pita bread.",
    image: hummusPlate,
    deliveryTime: "10 minutes",
    isSpecial: false,
  },
  {
    id: 4,
    title: "Creamy Pesto Pasta",
    price: 18.99,
    category: "mains",
    description: "Penne pasta tossed in our rich house-made basil pesto cream sauce, served with roasted pine nuts and parmesan.",
    image: pasta,
    deliveryTime: "25 minutes",
    isSpecial: false,
  },
  {
    id: 5,
    title: "Grilled Sea Bass",
    price: 22.99,
    category: "mains",
    description: "Freshly caught sea bass grilled with olive oil, rosemary, and lemon. Served with seasonal grilled vegetables.",
    image: grilledFish,
    deliveryTime: "30 minutes",
    isSpecial: false,
  },
  {
    id: 6,
    title: "Grandma's Lemon Dessert",
    price: 5.00,
    category: "desserts",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.",
    image: lemonDessert,
    deliveryTime: "10 minutes",
    isSpecial: true,
  },
  {
    id: 7,
    title: "Little Lemon Special",
    price: 10.00,
    category: "specials",
    description: "Our signature dessert with fresh lemon curd, baked in a crispy puff pastry crust, dusted with powdered sugar.",
    image: lemonDessert,
    deliveryTime: "15 minutes",
    isSpecial: false,
  },
];
