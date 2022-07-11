import express from "express";

import { cartitem } from "../cart/cartItems.cart";
import { cartItems } from "../types/cart.types";

export const cartRouter = express.Router()

cartRouter.get('/', (req, res) => {
    if (req.query.maxPrice) {
        const maxPriceCarts = cartitem.filter(cartIems => cartIems.price  <= Number(req.query.maxPrice))

        return res.status(200).json(maxPriceCarts)
    }
    res.status(200).json(cartitem)
})

cartRouter.get('/:id', (req, res) => {
    const cartId = cartitem.find((cartId: { id: number; }) => cartId.id === Number (req.params.id));

    if (!cartId) {
        return res.status(404).json({"error:" `error: ID not found`})
    } 

})

cartRouter.put('/:id', (req, res) => {
    const newCart: cartItems = {id: 045, product: "lotion", price: 7.00, quantity: 1,...req.body }
    cartitem.push(newCart)
    res.status(200).json(newCart);
})

cartRouter.delete('/:id', (req, res) => {
    const cartIndex = cartitem.findIndex(cartItem => cartItem.id);
    cartitem.splice(cartIndex, 2)
    res.status(204).json({});

})

