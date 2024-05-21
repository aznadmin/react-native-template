/**
 * @generated SignedSource<<10425bd156fe081d4688605220d01fa5>>
 * @relayHash aa02219232bf26115edb5bd532eb04ad
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID aa02219232bf26115edb5bd532eb04ad

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleArtworkTileRailCardTestsQuery$variables = Record<PropertyKey, never>;
export type SaleArtworkTileRailCardTestsQuery$data = {
  readonly saleArtwork: {
    readonly " $fragmentSpreads": FragmentRefs<"SaleArtworkTileRailCard_saleArtwork">;
  } | null | undefined;
};
export type SaleArtworkTileRailCardTestsQuery = {
  response: SaleArtworkTileRailCardTestsQuery$data;
  variables: SaleArtworkTileRailCardTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "the-sale"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleArtworkTileRailCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SaleArtworkTileRailCard_saleArtwork"
          }
        ],
        "storageKey": "saleArtwork(id:\"the-sale\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SaleArtworkTileRailCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "artistNames",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "date",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "href",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": "imageURL",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": [
                          "large"
                        ]
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(version:[\"large\"])"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "aspectRatio",
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
              (v1/*: any*/),
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
                "name": "saleMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "realizedPrice",
                "storageKey": null
              },
              (v2/*: any*/)
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bidderPositions",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtworkCurrentBid",
            "kind": "LinkedField",
            "name": "currentBid",
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "extendedBiddingEndAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lotLabel",
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
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAuction",
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
                "name": "displayTimelyAt",
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
                "name": "startAt",
                "storageKey": null
              },
              (v3/*: any*/),
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
                "name": "timeZone",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "saleArtwork(id:\"the-sale\")"
      }
    ]
  },
  "params": {
    "id": "aa02219232bf26115edb5bd532eb04ad",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "saleArtwork.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "saleArtwork.artwork.artistNames": (v4/*: any*/),
        "saleArtwork.artwork.date": (v4/*: any*/),
        "saleArtwork.artwork.href": (v4/*: any*/),
        "saleArtwork.artwork.id": (v5/*: any*/),
        "saleArtwork.artwork.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "saleArtwork.artwork.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "saleArtwork.artwork.image.blurhash": (v4/*: any*/),
        "saleArtwork.artwork.image.imageURL": (v4/*: any*/),
        "saleArtwork.artwork.internalID": (v5/*: any*/),
        "saleArtwork.artwork.realizedPrice": (v4/*: any*/),
        "saleArtwork.artwork.saleMessage": (v4/*: any*/),
        "saleArtwork.artwork.slug": (v5/*: any*/),
        "saleArtwork.artwork.title": (v4/*: any*/),
        "saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "saleArtwork.currentBid.display": (v4/*: any*/),
        "saleArtwork.endAt": (v4/*: any*/),
        "saleArtwork.extendedBiddingEndAt": (v4/*: any*/),
        "saleArtwork.id": (v5/*: any*/),
        "saleArtwork.lotLabel": (v4/*: any*/),
        "saleArtwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "saleArtwork.sale.cascadingEndTimeIntervalMinutes": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Int"
        },
        "saleArtwork.sale.displayTimelyAt": (v4/*: any*/),
        "saleArtwork.sale.endAt": (v4/*: any*/),
        "saleArtwork.sale.id": (v5/*: any*/),
        "saleArtwork.sale.internalID": (v5/*: any*/),
        "saleArtwork.sale.isAuction": (v6/*: any*/),
        "saleArtwork.sale.isClosed": (v6/*: any*/),
        "saleArtwork.sale.liveStartAt": (v4/*: any*/),
        "saleArtwork.sale.startAt": (v4/*: any*/),
        "saleArtwork.sale.timeZone": (v4/*: any*/)
      }
    },
    "name": "SaleArtworkTileRailCardTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "6984680176745967effebe8d3fdbcccb";

export default node;
