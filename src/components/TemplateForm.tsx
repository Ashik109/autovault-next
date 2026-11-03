"use client";

import { useState, type FormHTMLAttributes, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  "action" | "onSubmit"
> & { context: string };

export default function TemplateForm({ children, context, ...props }: Props) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.textContent?.toLowerCase() || "";
    const searchField = Array.from(
      form.querySelectorAll<HTMLInputElement>("input"),
    ).find((input) => /search/i.test(input.placeholder));
    if (searchField?.value.trim()) {
      router.push(
        `${context.startsWith("/shop") ? context : "/portfolio"}?q=${encodeURIComponent(searchField.value.trim())}`,
      );
      return;
    }
    if (
      form.querySelector("select") &&
      !form.querySelector('input[type="email"]') &&
      !form.classList.contains("checkout")
    ) {
      const terms = Array.from(form.querySelectorAll("select"))
        .map((select) =>
          select.selectedIndex > 0
            ? select.selectedOptions[0]?.textContent?.trim()
            : "",
        )
        .filter(Boolean);
      router.push(
        `/portfolio${terms.length ? `?q=${encodeURIComponent(terms.join(" "))}` : ""}`,
      );
      return;
    }
    if (form.querySelector('[name="coupon_code"]'))
      setMessage("No active coupons are configured for this demo.");
    else if (/subscribe/.test(text))
      setMessage(
        "Newsletter delivery is not configured. Please contact AutoVault directly.",
      );
    else if (context === "/account")
      setMessage(
        "Account services are not connected yet. No account has been created and no credentials have been sent.",
      );
    else if (context === "/checkout")
      setMessage(
        "Payment processing is not connected. No order or payment has been submitted.",
      );
    else
      setMessage(
        "Online submissions are not connected yet. Please use the phone or email shown on this page to contact AutoVault.",
      );
  }

  return (
    <form {...props} onSubmit={submit}>
      {children}
      {message && (
        <p className="form-feedback" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
