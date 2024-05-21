/**
 * @generated SignedSource<<4dcaef061c5e711432f5d90783b459b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Sale_sale$data = {
  readonly cascadingEndTimeIntervalMinutes: number | null | undefined;
  readonly endAt: string | null | undefined;
  readonly extendedBiddingIntervalMinutes: number | null | undefined;
  readonly internalID: string;
  readonly isClosed: boolean | null | undefined;
  readonly liveStartAt: string | null | undefined;
  readonly registrationEndsAt: string | null | undefined;
  readonly slug: string;
  readonly startAt: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"BuyNowArtworksRail_sale" | "NewBuyNowArtworksRail_sale" | "RegisterToBidButton_sale" | "SaleHeader_sale">;
  readonly " $fragmentType": "Sale_sale";
};
export type Sale_sale$key = {
  readonly " $data"?: Sale_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"Sale_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Sale_sale",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SaleHeader_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RegisterToBidButton_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BuyNowArtworksRail_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NewBuyNowArtworksRail_sale"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liveStartAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "registrationEndsAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cascadingEndTimeIntervalMinutes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extendedBiddingIntervalMinutes",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isClosed",
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "fc74fe67f56f96a581c627c92553955d";

export default node;
