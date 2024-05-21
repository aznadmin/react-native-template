/**
 * @generated SignedSource<<71cb905a41c6c92bbcebd55e9fabde05>>
 * @relayHash b5c02d0c955101f1fabdc57ad5991f26
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b5c02d0c955101f1fabdc57ad5991f26

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SelectMaxBidTestsQuery$variables = {
  saleID: string;
};
export type SelectMaxBidTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SelectMaxBid_me">;
  } | null | undefined;
  readonly sale_artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"SelectMaxBid_sale_artwork">;
  } | null | undefined;
};
export type SelectMaxBidTestsQuery = {
  response: SelectMaxBidTestsQuery$data;
  variables: SelectMaxBidTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleID"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "wow"
  }
],
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
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectMaxBidTestsQuery",
    "selections": [
      {
        "alias": "sale_artwork",
        "args": (v1/*: any*/),
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SelectMaxBid_sale_artwork"
          }
        ],
        "storageKey": "saleArtwork(id:\"wow\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SelectMaxBid_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectMaxBidTestsQuery",
    "selections": [
      {
        "alias": "sale_artwork",
        "args": (v1/*: any*/),
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "useMyMaxBid",
                "value": true
              }
            ],
            "concreteType": "BidIncrementsFormatted",
            "kind": "LinkedField",
            "name": "increments",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cents",
                "storageKey": null
              }
            ],
            "storageKey": "increments(useMyMaxBid:true)"
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": "live_start_at",
                "args": null,
                "kind": "ScalarField",
                "name": "liveStartAt",
                "storageKey": null
              },
              {
                "alias": "end_at",
                "args": null,
                "kind": "ScalarField",
                "name": "endAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isBenefit",
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
                "concreteType": "Partner",
                "kind": "LinkedField",
                "name": "partner",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "liveStartAt",
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artwork",
            "kind": "LinkedField",
            "name": "artwork",
            "plural": false,
            "selections": [
              (v4/*: any*/),
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
                "name": "date",
                "storageKey": null
              },
              {
                "alias": "artist_names",
                "args": null,
                "kind": "ScalarField",
                "name": "artistNames",
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
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": "small"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(version:\"small\")"
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
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
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "extendedBiddingEndAt",
            "storageKey": null
          }
        ],
        "storageKey": "saleArtwork(id:\"wow\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": "has_qualified_credit_cards",
            "args": null,
            "kind": "ScalarField",
            "name": "hasQualifiedCreditCards",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "saleID",
                "variableName": "saleID"
              }
            ],
            "concreteType": "Bidder",
            "kind": "LinkedField",
            "name": "bidders",
            "plural": true,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "b5c02d0c955101f1fabdc57ad5991f26",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.bidders": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Bidder"
        },
        "me.bidders.id": (v6/*: any*/),
        "me.has_qualified_credit_cards": (v7/*: any*/),
        "me.id": (v6/*: any*/),
        "sale_artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "sale_artwork.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "sale_artwork.artwork.artist_names": (v8/*: any*/),
        "sale_artwork.artwork.date": (v8/*: any*/),
        "sale_artwork.artwork.id": (v6/*: any*/),
        "sale_artwork.artwork.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "sale_artwork.artwork.image.url": (v8/*: any*/),
        "sale_artwork.artwork.slug": (v6/*: any*/),
        "sale_artwork.artwork.title": (v8/*: any*/),
        "sale_artwork.endAt": (v8/*: any*/),
        "sale_artwork.extendedBiddingEndAt": (v8/*: any*/),
        "sale_artwork.id": (v6/*: any*/),
        "sale_artwork.increments": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "BidIncrementsFormatted"
        },
        "sale_artwork.increments.cents": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Float"
        },
        "sale_artwork.increments.display": (v8/*: any*/),
        "sale_artwork.internalID": (v6/*: any*/),
        "sale_artwork.lot_label": (v8/*: any*/),
        "sale_artwork.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "sale_artwork.sale.cascadingEndTimeIntervalMinutes": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Int"
        },
        "sale_artwork.sale.endAt": (v8/*: any*/),
        "sale_artwork.sale.end_at": (v8/*: any*/),
        "sale_artwork.sale.id": (v6/*: any*/),
        "sale_artwork.sale.internalID": (v6/*: any*/),
        "sale_artwork.sale.isBenefit": (v7/*: any*/),
        "sale_artwork.sale.liveStartAt": (v8/*: any*/),
        "sale_artwork.sale.live_start_at": (v8/*: any*/),
        "sale_artwork.sale.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "sale_artwork.sale.partner.id": (v6/*: any*/),
        "sale_artwork.sale.partner.name": (v8/*: any*/),
        "sale_artwork.sale.slug": (v6/*: any*/)
      }
    },
    "name": "SelectMaxBidTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a7a1c4aaaf6a32b55b6d1f43f9871e3e";

export default node;
