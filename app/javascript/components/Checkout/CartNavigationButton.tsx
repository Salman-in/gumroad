import { Cart } from "@boxicons/react";
import * as React from "react";

import { Button } from "$app/components/Button";
import { useCartItemsCount } from "$app/components/Checkout/useCartItemsCount";
import { useAppDomain } from "$app/components/DomainSettings";

export const CartNavigationButton = ({ className }: { className?: string }) => {
  const appDomain = useAppDomain();
  const cartItemsCount = useCartItemsCount();

  return cartItemsCount ? (
    <Button asChild className={className} color="filled">
      <a href={Routes.checkout_url({ host: appDomain })}>
        <Cart pack="filled" className="size-5" />
        {cartItemsCount === "not-available" ? null : cartItemsCount}
      </a>
    </Button>
  ) : null;
};
