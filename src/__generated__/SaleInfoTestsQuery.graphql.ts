/**
 * @generated SignedSource<<931a3c3f2475391726e8a24b8717b11f>>
 * @relayHash 093b574fc805af0ad7d076c8ad5c8bcf
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 093b574fc805af0ad7d076c8ad5c8bcf

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleInfoTestsQuery$variables = {
  saleID: string;
};
export type SaleInfoTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"SaleInfo_me">;
  } | null | undefined;
  readonly sale: {
    readonly " $fragmentSpreads": FragmentRefs<"SaleInfo_sale">;
  } | null | undefined;
};
export type SaleInfoTestsQuery = {
  response: SaleInfoTestsQuery$data;
  variables: SaleInfoTestsQuery$variables;
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
    "kind": "Variable",
    "name": "id",
    "variableName": "saleID"
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
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleInfoTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SaleInfo_sale"
          }
        ],
        "storageKey": null
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
            "name": "SaleInfo_me"
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
    "name": "SaleInfoTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
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
            "name": "startAt",
            "storageKey": null
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
            "name": "requireIdentityVerification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Bidder",
            "kind": "LinkedField",
            "name": "registrationStatus",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "qualifiedForBidding",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
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
            "name": "name",
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
            "name": "timeZone",
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
            "concreteType": "BuyersPremium",
            "kind": "LinkedField",
            "name": "buyersPremium",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "amount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "percent",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
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
            "alias": "biddedLots",
            "args": [
              {
                "kind": "Variable",
                "name": "saleID",
                "variableName": "saleID"
              }
            ],
            "concreteType": "LotStanding",
            "kind": "LinkedField",
            "name": "lotStandings",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SaleArtwork",
                "kind": "LinkedField",
                "name": "saleArtwork",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
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
    "id": "093b574fc805af0ad7d076c8ad5c8bcf",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.biddedLots": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "LotStanding"
        },
        "me.biddedLots.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "me.biddedLots.saleArtwork.id": (v3/*: any*/),
        "me.id": (v3/*: any*/),
        "sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "sale.buyersPremium": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "BuyersPremium"
        },
        "sale.buyersPremium.amount": (v4/*: any*/),
        "sale.buyersPremium.percent": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Float"
        },
        "sale.description": (v4/*: any*/),
        "sale.endAt": (v4/*: any*/),
        "sale.id": (v3/*: any*/),
        "sale.internalID": (v3/*: any*/),
        "sale.isWithBuyersPremium": (v5/*: any*/),
        "sale.liveStartAt": (v4/*: any*/),
        "sale.name": (v4/*: any*/),
        "sale.registrationEndsAt": (v4/*: any*/),
        "sale.registrationStatus": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Bidder"
        },
        "sale.registrationStatus.id": (v3/*: any*/),
        "sale.registrationStatus.qualifiedForBidding": (v5/*: any*/),
        "sale.requireIdentityVerification": (v5/*: any*/),
        "sale.slug": (v3/*: any*/),
        "sale.startAt": (v4/*: any*/),
        "sale.timeZone": (v4/*: any*/)
      }
    },
    "name": "SaleInfoTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "090b81ce95b6ea2da225c9238019db57";

export default node;
