import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { cast } from "ts-safe-cast";

import { Button } from "$app/components/Button";
import { Search } from "$app/components/Search";

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

type PageProps = {
  has_products: boolean;
  can_create_product: boolean;
};

export const HeaderButtons = ({ query, setQuery }: Props) => {
  const { can_create_product: canCreateProduct, has_products: hasProducts } = cast<PageProps>(usePage().props);

  return (
    <>
      {hasProducts ? <Search value={query} onSearch={setQuery} placeholder="Search products" /> : null}
      <Button asChild color="accent" disabled={!canCreateProduct}>
        <Link href={Routes.new_product_path()}>New product</Link>
      </Button>
    </>
  );
};
