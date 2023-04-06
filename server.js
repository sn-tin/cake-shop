// sk_test_51MtAaYGZRtKSKH8eLRMzqnzlbPSmvOoFWPmW8OWG1FdfUGFINIygYZCzZbNyIQ6K4PCFFa15Pps4IsL69zAUdzEe005T3woqjf
// Crown Princess: price_1MtAvtGZRtKSKH8eIuY4LcVh
// Vera Bear: price_1MtAxGGZRtKSKH8eaG0InzM0
// Romance Bear: price_1MtAxTGZRtKSKH8eNEHpzDgD
// Velvet Glow: price_1MtAxjGZRtKSKH8e1DNBf30u
// Ruby Duby: price_1MtAxvGZRtKSKH8ewNewnL8S
// Pearl: price_1MtAykGZRtKSKH8ejIrcwUGz
// First Love: price_1MtAzXGZRtKSKH8exqyGDbnz
// Adore: price_1MtB0nGZRtKSKH8elITpS3SZ
// Wo Ai Ni: price_1MtB17GZRtKSKH8eYxN0xRZz
// Devoted: price_1MtB1KGZRtKSKH8eqBDOAKUB
// Everlasting: price_1MtB1RGZRtKSKH8ev7LCHgvt
// Minis Monogram Cookie: price_1MtB23GZRtKSKH8eVkxrP0TY
// Floral Monogram Cookie: price_1MtB2DGZRtKSKH8enG4yGihg
// Ocean Pastels Monogram: price_1MtB2LGZRtKSKH8eOFyPbfOT


const express = require("express");
let cors = require("cors")
const stripe = require("stripe")("sk_test_51MtAaYGZRtKSKH8eLRMzqnzlbPSmvOoFWPmW8OWG1FdfUGFINIygYZCzZbNyIQ6K4PCFFa15Pps4IsL69zAUdzEe005T3woqjf")

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
     console.log(req.body)
     const items = req.body.items;
     const lineItems = [];
     items.forEach((item) => {
        lineItems.push(
            {
                price: item.price_id,
                quantity: item.quantity
            }
        )
     });

     const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
     });

     res.send(JSON.stringify({
        url: session.url
     }))
});

app.listen(4000, () => console.log("Running on port 4000"))