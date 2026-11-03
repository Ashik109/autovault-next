"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart, setQuantity, removeCartItem, formatMoney } from "@/lib/cart";
import QuantityInput from "./QuantityInput";

export default function ShoppingCart() {
  const items = useCart();
  const [couponMessage, setCouponMessage] = useState("");
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <div className="ms-page-content">
      <div className="ms-default-page container">
        <div className="ms-woocommerce-cart-form-wrapper">
          {items.length ? (
            <>
              <div className="cart-table-scroll">
                <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                  <thead>
                    <tr>
                      <th aria-label="Remove" />
                      <th aria-label="Image" />
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr
                        className="woocommerce-cart-form__cart-item cart_item"
                        key={item.id}
                      >
                        <td className="product-remove">
                          <button
                            type="button"
                            className="remove"
                            aria-label={`Remove ${item.title}`}
                            onClick={() => removeCartItem(item.id)}
                          >
                            ×
                          </button>
                        </td>
                        <td className="product-thumbnail">
                          <Link href="/shop-details">
                            <img
                              src={item.image}
                              alt={item.title}
                              width={100}
                              height={80}
                            />
                          </Link>
                        </td>
                        <td className="product-name" data-title="Product">
                          <Link href="/shop-details">{item.title}</Link>
                        </td>
                        <td className="product-price" data-title="Price">
                          {formatMoney(item.price)}
                        </td>
                        <td>
                          <QuantityInput
                            value={item.quantity}
                            onChange={(quantity) =>
                              setQuantity(item.id, quantity)
                            }
                          />
                        </td>
                        <td className="product-subtotal" data-title="Subtotal">
                          {formatMoney(item.price * item.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <form
                className="woocommerce-cart-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setCouponMessage(
                    "No active coupons are configured for this demo.",
                  );
                }}
              >
                <div className="ms-actions-inner">
                  <label htmlFor="coupon-code">Coupon code</label>
                  <input
                    id="coupon-code"
                    type="text"
                    className="input-text"
                    placeholder="Coupon code"
                    required
                  />
                  <button type="submit" className="button rts-btn btn-primary">
                    Apply coupon
                  </button>
                </div>
                {couponMessage && <p role="status">{couponMessage}</p>}
              </form>
              <div className="ms-cart-collaterals cart-collaterals">
                <div className="ms-cart-totals cart_totals">
                  <h3>Cart totals</h3>
                  <table className="shop_table">
                    <tbody>
                      <tr>
                        <th>Subtotal</th>
                        <td data-testid="cart-subtotal">
                          {formatMoney(subtotal)}
                        </td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td data-testid="cart-total">
                          {formatMoney(subtotal)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="ms-proceed-to-checkout wc-proceed-to-checkout">
                    <Link className="rts-btn btn-primary" href="/checkout">
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <Link className="rts-btn btn-primary" href="/shop">
                Browse shop
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
