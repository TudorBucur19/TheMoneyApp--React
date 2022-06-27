import { MdLocalGroceryStore, MdKitchen, MdRestaurant, MdMusicNote } from 'react-icons/md';
import { IoIosGift } from 'react-icons/io';
import { GiClothes, GiMoneyStack, GiMeal } from 'react-icons/gi';

export const defaultExpenses = [
    {name: "groceries", icon: MdLocalGroceryStore, color: "yellow", type: "expense"},
    {name: "household", icon: MdKitchen, color: "green", type: "expense"},
    {name: "eating out", icon: MdRestaurant, color: "red", type: "expense"},
    {name: "fun", icon: MdMusicNote, color: "pink", type: "expense"},
    {name: "gifts", icon: IoIosGift, color: "lightPink", type: "expense"},
    {name: "clothes", icon: GiClothes, color: "lightBlue", type: "expense"},
];

export const defaultIncomes = [
    {name: "salary", icon: GiMoneyStack, color: "green", type: "income"},
    {name: "mealTikets", icon: GiMeal, color: "green", type: "income"},
]