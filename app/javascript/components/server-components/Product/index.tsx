import * as React from "react";
import { createCast } from "ts-safe-cast";

import { register } from "$app/utils/serverComponentUtil";

import { Layout, Props } from "$app/components/Product/Layout";

import { useLoggedInUser } from "$app/components/LoggedInUser";

import cx from "classnames";

const ProductPage = (props: Props) => {
  const loggedInUser = useLoggedInUser();

  return (
    <main className={cx("custom-sections", loggedInUser && "has-user")}>
      <Layout {...props} />
      <footer>
        Powered by <span className="logo-full" />
      </footer>
    </main>
  );
};

export default register({ component: ProductPage, propParser: createCast() });
