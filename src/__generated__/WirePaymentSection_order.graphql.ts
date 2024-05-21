/**
 * @generated SignedSource<<8ba8ac9670321763424800f7e1fe278e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CommerceOrderSourceEnum = "artwork_page" | "inquiry" | "partner_offer" | "private_sale" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type WirePaymentSection_order$data = {
  readonly code: string;
  readonly currencyCode: string;
  readonly source: CommerceOrderSourceEnum;
  readonly " $fragmentType": "WirePaymentSection_order";
};
export type WirePaymentSection_order$key = {
  readonly " $data"?: WirePaymentSection_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"WirePaymentSection_order">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WirePaymentSection_order",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "code",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currencyCode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "source",
      "storageKey": null
    }
  ],
  "type": "CommerceOrder",
  "abstractKey": "__isCommerceOrder"
};

(node as any).hash = "dafe2141ab0c019787b0e78da1760fef";

export default node;
