/**
 * @generated SignedSource<<0d93e53891aff23bbcba449c15453400>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "IN_REVIEW" | "PENDING" | "PROCESSING_APPROVAL" | "REFUNDED" | "SUBMITTED" | "%future added value";
export type CommercePaymentMethodEnum = "CREDIT_CARD" | "SEPA_DEBIT" | "US_BANK_ACCOUNT" | "WIRE_TRANSFER" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type OrderDetails_order$data = {
  readonly lineItems: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly artwork: {
          readonly partner: {
            readonly name: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly paymentMethod: CommercePaymentMethodEnum | null | undefined;
  readonly requestedFulfillment: {
    readonly __typename: "CommercePickup";
  } | {
    readonly __typename: "CommerceShip";
    readonly name: string | null | undefined;
  } | {
    readonly __typename: "CommerceShipArta";
    readonly name: string | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null | undefined;
  readonly state: CommerceOrderStateEnum;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkInfoSection_artwork" | "OrderDetailsHeader_info" | "OrderDetailsPayment_order" | "ShipsToSection_address" | "SoldBySection_soldBy" | "SummarySection_section" | "TrackOrderSection_section" | "WirePaymentSection_order">;
  readonly " $fragmentType": "OrderDetails_order";
};
export type OrderDetails_order$key = {
  readonly " $data"?: OrderDetails_order$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderDetails_order">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderDetails_order",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "state",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "paymentMethod",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "requestedFulfillment",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v2/*: any*/),
          "type": "CommerceShip",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v2/*: any*/),
          "type": "CommerceShipArta",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/)
          ],
          "type": "CommercePickup",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "CommerceLineItemConnection",
      "kind": "LinkedField",
      "name": "lineItems",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommerceLineItemEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "CommerceLineItem",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Artwork",
                  "kind": "LinkedField",
                  "name": "artwork",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Partner",
                      "kind": "LinkedField",
                      "name": "partner",
                      "plural": false,
                      "selections": [
                        (v1/*: any*/)
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "lineItems(first:1)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OrderDetailsHeader_info"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkInfoSection_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SummarySection_section"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OrderDetailsPayment_order"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TrackOrderSection_section"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShipsToSection_address"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SoldBySection_soldBy"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WirePaymentSection_order"
    }
  ],
  "type": "CommerceOrder",
  "abstractKey": "__isCommerceOrder"
};
})();

(node as any).hash = "a4e0a6146d869b2846dd72d3c0685d81";

export default node;
