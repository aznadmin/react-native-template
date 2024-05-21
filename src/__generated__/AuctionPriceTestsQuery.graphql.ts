/**
 * @generated SignedSource<<cb6ce6ae08b726703d720ae37c82faea>>
 * @relayHash 6d244de9906e4602332d1cf51d127e2b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 6d244de9906e4602332d1cf51d127e2b

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionPriceTestsQuery$variables = Record<PropertyKey, never>;
export type AuctionPriceTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"AuctionPrice_artwork">;
  } | null | undefined;
};
export type AuctionPriceTestsQuery$rawResponse = {
  readonly artwork: {
    readonly id: string;
    readonly myLotStanding: ReadonlyArray<{
      readonly activeBid: {
        readonly id: string;
        readonly isWinning: boolean | null | undefined;
      } | null | undefined;
      readonly mostRecentBid: {
        readonly id: string;
        readonly maxBid: {
          readonly display: string | null | undefined;
        } | null | undefined;
      } | null | undefined;
    }> | null | undefined;
    readonly sale: {
      readonly id: string;
      readonly internalID: string;
      readonly isClosed: boolean | null | undefined;
      readonly isLiveOpen: boolean | null | undefined;
      readonly isWithBuyersPremium: boolean | null | undefined;
    } | null | undefined;
    readonly saleArtwork: {
      readonly counts: {
        readonly bidderPositions: any | null | undefined;
      } | null | undefined;
      readonly currentBid: {
        readonly display: string | null | undefined;
      } | null | undefined;
      readonly id: string;
      readonly reserveMessage: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type AuctionPriceTestsQuery = {
  rawResponse: AuctionPriceTestsQuery$rawResponse;
  response: AuctionPriceTestsQuery$data;
  variables: AuctionPriceTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "auction_artwork_estimate_premium"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "BidderPosition"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuctionPriceTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionPrice_artwork"
          }
        ],
        "storageKey": "artwork(id:\"auction_artwork_estimate_premium\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuctionPriceTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
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
                "name": "isWithBuyersPremium",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isClosed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isLiveOpen",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtwork",
            "kind": "LinkedField",
            "name": "saleArtwork",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "reserveMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtworkCurrentBid",
                "kind": "LinkedField",
                "name": "currentBid",
                "plural": false,
                "selections": (v2/*: any*/),
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bidderPositions",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "live",
                "value": true
              }
            ],
            "concreteType": "LotStanding",
            "kind": "LinkedField",
            "name": "myLotStanding",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "activeBid",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isWinning",
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "mostRecentBid",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BidderPositionMaxBid",
                    "kind": "LinkedField",
                    "name": "maxBid",
                    "plural": false,
                    "selections": (v2/*: any*/),
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "myLotStanding(live:true)"
          },
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"auction_artwork_estimate_premium\")"
      }
    ]
  },
  "params": {
    "id": "6d244de9906e4602332d1cf51d127e2b",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.id": (v3/*: any*/),
        "artwork.myLotStanding": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "LotStanding"
        },
        "artwork.myLotStanding.activeBid": (v4/*: any*/),
        "artwork.myLotStanding.activeBid.id": (v3/*: any*/),
        "artwork.myLotStanding.activeBid.isWinning": (v5/*: any*/),
        "artwork.myLotStanding.mostRecentBid": (v4/*: any*/),
        "artwork.myLotStanding.mostRecentBid.id": (v3/*: any*/),
        "artwork.myLotStanding.mostRecentBid.maxBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "BidderPositionMaxBid"
        },
        "artwork.myLotStanding.mostRecentBid.maxBid.display": (v6/*: any*/),
        "artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artwork.sale.id": (v3/*: any*/),
        "artwork.sale.internalID": (v3/*: any*/),
        "artwork.sale.isClosed": (v5/*: any*/),
        "artwork.sale.isLiveOpen": (v5/*: any*/),
        "artwork.sale.isWithBuyersPremium": (v5/*: any*/),
        "artwork.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artwork.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "artwork.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "artwork.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "artwork.saleArtwork.currentBid.display": (v6/*: any*/),
        "artwork.saleArtwork.id": (v3/*: any*/),
        "artwork.saleArtwork.reserveMessage": (v6/*: any*/)
      }
    },
    "name": "AuctionPriceTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "2350f604b8d9175a92dabc22306ad78f";

export default node;
