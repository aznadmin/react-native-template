/**
 * @generated SignedSource<<8052f22a3155f197a8eda6852ec07fc8>>
 * @relayHash a729fe196068313b2d35dc082cd7ded5
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a729fe196068313b2d35dc082cd7ded5

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BidResultTestsQuery$variables = Record<PropertyKey, never>;
export type BidResultTestsQuery$data = {
  readonly saleArtwork: {
    readonly " $fragmentSpreads": FragmentRefs<"BidResult_sale_artwork">;
  } | null | undefined;
};
export type BidResultTestsQuery$rawResponse = {
  readonly saleArtwork: {
    readonly endAt: string | null | undefined;
    readonly extendedBiddingEndAt: string | null | undefined;
    readonly id: string;
    readonly sale: {
      readonly cascadingEndTimeIntervalMinutes: number | null | undefined;
      readonly endAt: string | null | undefined;
      readonly id: string;
      readonly liveStartAt: string | null | undefined;
      readonly slug: string;
    } | null | undefined;
  } | null | undefined;
};
export type BidResultTestsQuery = {
  rawResponse: BidResultTestsQuery$rawResponse;
  response: BidResultTestsQuery$data;
  variables: BidResultTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "saleArtworkId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
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
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BidResultTestsQuery",
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
            "name": "BidResult_sale_artwork"
          }
        ],
        "storageKey": "saleArtwork(id:\"saleArtworkId\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BidResultTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "liveStartAt",
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
                "name": "cascadingEndTimeIntervalMinutes",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "saleArtwork(id:\"saleArtworkId\")"
      }
    ]
  },
  "params": {
    "id": "a729fe196068313b2d35dc082cd7ded5",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "saleArtwork.endAt": (v3/*: any*/),
        "saleArtwork.extendedBiddingEndAt": (v3/*: any*/),
        "saleArtwork.id": (v4/*: any*/),
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
        "saleArtwork.sale.endAt": (v3/*: any*/),
        "saleArtwork.sale.id": (v4/*: any*/),
        "saleArtwork.sale.liveStartAt": (v3/*: any*/),
        "saleArtwork.sale.slug": (v4/*: any*/)
      }
    },
    "name": "BidResultTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c33e94bcd1da8172cd7c1759c6000b02";

export default node;
