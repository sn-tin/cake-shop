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

// Export the Express API
module.exports = app;