# HEVON commerce activation

The customer website includes a browser-persistent launch cart and a Netlify Forms waitlist.
Checkout is closed by default. There is no payment collection or order creation while closed.

## Activate Shopify checkout
1. Connect the owner's Shopify store. Merchant must complete the plan/payment-provider and business verification steps.
2. Create PROFFEE Original with final approved label, ingredients/allergens, price, taxes, inventory and weight. Publish the product to the applicable sales channel.
3. Set shipping zones/rates, customer support and shipping/refund policies. Verify test checkout, order confirmation, payment status and fulfilment in Shopify.
4. Set the Netlify environment variables documented in `.env.example`. Use the numeric product variant ID and the store's canonical myshopify.com domain. Displayed price must match Shopify.
5. Update public product copy, nutrition, legal policies and availability to final approved details. The prelaunch FAQs must be changed before sales open.
6. Only then set sales open to true and rebuild/deploy. The server validates quantity and builds Shopify's documented cart permalink. Shopify verifies actual price, inventory, shipping and payment; the client never marks an order as paid.

## Validation
- Check empty cart, add, increment/decrement, removal, quantity cap and reload persistence.
- Verify POST /api/checkout returns 409 while sales are closed.
- Netlify recognizes the existing `hevon-waitlist` form through `public/__forms.html`. Confirm a designated test submission in the owner's Netlify dashboard before relying on lead collection; HTTP acceptance alone does not verify dashboard delivery.
