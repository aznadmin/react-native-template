/**
 * @generated SignedSource<<84fa654e0226778d6b3626aa86148a51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActiveBid_bid$data = {
  readonly is_leading_bidder: boolean | null | undefined;
  readonly most_recent_bid: {
    readonly id: string;
    readonly sale_artwork: {
      readonly artwork: {
        readonly artist_names: string | null | undefined;
        readonly href: string | null | undefined;
        readonly image: {
          readonly blurhash: string | null | undefined;
          readonly url: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
      readonly counts: {
        readonly bidder_positions: any | null | undefined;
      } | null | undefined;
      readonly highest_bid: {
        readonly display: string | null | undefined;
      } | null | undefined;
      readonly lot_label: string | null | undefined;
      readonly reserve_status: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly sale: {
    readonly href: string | null | undefined;
    readonly is_live_open: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ActiveBid_bid";
};
export type ActiveBid_bid$key = {
  readonly " $data"?: ActiveBid_bid$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActiveBid_bid">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActiveBid_bid",
  "selections": [
    {
      "alias": "is_leading_bidder",
      "args": null,
      "kind": "ScalarField",
      "name": "isLeadingBidder",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": "is_live_open",
          "args": null,
          "kind": "ScalarField",
          "name": "isLiveOpen",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "most_recent_bid",
      "args": null,
      "concreteType": "BidderPosition",
      "kind": "LinkedField",
      "name": "mostRecentBid",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": "sale_artwork",
          "args": null,
          "concreteType": "SaleArtwork",
          "kind": "LinkedField",
          "name": "saleArtwork",
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Image",
                  "kind": "LinkedField",
                  "name": "image",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "blurhash",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": "artist_names",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "artistNames",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SaleArtworkCounts",
              "kind": "LinkedField",
              "name": "counts",
              "plural": false,
              "selections": [
                {
                  "alias": "bidder_positions",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "bidderPositions",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": "highest_bid",
              "args": null,
              "concreteType": "SaleArtworkHighestBid",
              "kind": "LinkedField",
              "name": "highestBid",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "display",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": "lot_label",
              "args": null,
              "kind": "ScalarField",
              "name": "lotLabel",
              "storageKey": null
            },
            {
              "alias": "reserve_status",
              "args": null,
              "kind": "ScalarField",
              "name": "reserveStatus",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LotStanding",
  "abstractKey": null
};
})();

(node as any).hash = "5aa997a2621c22b76ff107b88b17f1cd";

export default node;
