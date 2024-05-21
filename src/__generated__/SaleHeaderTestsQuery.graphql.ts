/**
 * @generated SignedSource<<df81b099e9f5f4182e45cd6d4a22c89c>>
 * @relayHash 6b1105a950cf1b825a6d6ec0383c8696
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 6b1105a950cf1b825a6d6ec0383c8696

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleHeaderTestsQuery$variables = Record<PropertyKey, never>;
export type SaleHeaderTestsQuery$data = {
  readonly sale: {
    readonly " $fragmentSpreads": FragmentRefs<"SaleHeader_sale">;
  } | null | undefined;
};
export type SaleHeaderTestsQuery = {
  response: SaleHeaderTestsQuery$data;
  variables: SaleHeaderTestsQuery$variables;
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
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v2 = {
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
    "name": "SaleHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Sale",
        "kind": "LinkedField",
        "name": "sale",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SaleHeader_sale"
          }
        ],
        "storageKey": "sale(id:\"the-sale\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SaleHeaderTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
            "name": "href",
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
            "name": "slug",
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
            "name": "endAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "endedAt",
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
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "coverImage",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "sale(id:\"the-sale\")"
      }
    ]
  },
  "params": {
    "id": "6b1105a950cf1b825a6d6ec0383c8696",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "sale.cascadingEndTimeIntervalMinutes": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Int"
        },
        "sale.coverImage": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "sale.coverImage.url": (v1/*: any*/),
        "sale.endAt": (v1/*: any*/),
        "sale.endedAt": (v1/*: any*/),
        "sale.href": (v1/*: any*/),
        "sale.id": (v2/*: any*/),
        "sale.internalID": (v2/*: any*/),
        "sale.liveStartAt": (v1/*: any*/),
        "sale.name": (v1/*: any*/),
        "sale.slug": (v2/*: any*/),
        "sale.startAt": (v1/*: any*/),
        "sale.timeZone": (v1/*: any*/)
      }
    },
    "name": "SaleHeaderTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "b9e8153d2ce7a746c081f6450eb14cff";

export default node;
