"use client";

import { CartProvider } from "use-shopping-cart";
export default function CartProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      cancelUrl="http://localhost:3000/stripe/error"
      successUrl="http://localhost:3000/stripe/success"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
