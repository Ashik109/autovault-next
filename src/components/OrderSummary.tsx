"use client";
import { useCart, formatMoney } from "@/lib/cart";
export default function OrderSummary() {
  const items = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <table className="ms-checkout-review-order-table shop_table woocommerce-checkout-review-order-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              {item.title} × {item.quantity}
            </td>
            <td>{formatMoney(item.price * item.quantity)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <td>{formatMoney(total)}</td>
        </tr>
      </tfoot>
    </table>
  );
}
