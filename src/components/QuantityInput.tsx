"use client";

import { useState } from "react";

export default function QuantityInput({
  initialValue = 1,
  value,
  onChange,
}: {
  initialValue?: number;
  value?: number;
  onChange?: (value: number) => void;
}) {
  const [local, setLocal] = useState(initialValue);
  const quantity = value ?? local;
  function update(next: number) {
    const safe = Math.max(1, Math.min(99, Math.floor(next) || 1));
    setLocal(safe);
    onChange?.(safe);
  }
  return (
    <div className="quantity-edit">
      <button
        type="button"
        className="button decrement"
        aria-label="Decrease quantity"
        onClick={() => update(quantity - 1)}
      >
        −
      </button>
      <input
        type="number"
        min="1"
        max="99"
        className="input"
        aria-label="Quantity"
        value={quantity}
        onChange={(event) => update(Number(event.target.value))}
      />
      <button
        type="button"
        className="button increment plus"
        aria-label="Increase quantity"
        onClick={() => update(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
