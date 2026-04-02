import * as React from "react";

import { Button } from "$app/components/Button";
import { Modal } from "$app/components/Modal";
import { Purchase } from "$app/components/Product";

type Props = {
  purchase: Purchase;
  checkoutUrl: string;
  onClose: () => void;
};

export const SubscriptionChoiceModal = ({ purchase, checkoutUrl, onClose }: Props) => {
  const open = checkoutUrl !== "";
  const newSubscriptionHref = React.useMemo(() => {
    if (!checkoutUrl) return "";
    const url = new URL(checkoutUrl, window.location.origin);
    url.searchParams.set("force_new_subscription", "true");
    return url.toString();
  }, [checkoutUrl]);

  if (purchase.subscription_has_lapsed && purchase.membership) {
    return (
      <Modal open={open} onClose={onClose} title="Resume your previous subscription?">
        <p>
          You've previously subscribed to this product. Would you like to <strong>pick up where you left off</strong>,
          or <strong>start fresh with a new subscription</strong>?
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button asChild>
            <a href={newSubscriptionHref} target="_top">
              Start a new subscription
            </a>
          </Button>
          <Button asChild color="black">
            <a href={purchase.membership.manage_url} target="_blank" rel="noreferrer">
              Resume subscription
            </a>
          </Button>
        </div>
      </Modal>
    );
  }

  if (!purchase.membership) return null;

  return (
    <Modal open={open} onClose={onClose} title="You already have an active subscription">
      <p>
        You currently have an active subscription to this product. Would you like to{" "}
        <strong>start a new subscription</strong>?
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Button onClick={onClose}>Cancel</Button>
        <Button asChild color="black">
          <a href={newSubscriptionHref} target="_top">
            Start a new subscription
          </a>
        </Button>
      </div>
    </Modal>
  );
};
