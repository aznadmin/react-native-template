/**
 * @generated SignedSource<<38ea837edc5dd6ff48b89168f96c92cb>>
 * @relayHash 47562be5b3f02457d6f5e15dacfa52cf
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 47562be5b3f02457d6f5e15dacfa52cf

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditPriceRangeTestsQuery$variables = Record<PropertyKey, never>;
export type MyAccountEditPriceRangeTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditPriceRange_me">;
  } | null | undefined;
};
export type MyAccountEditPriceRangeTestsQuery = {
  response: MyAccountEditPriceRangeTestsQuery$data;
  variables: MyAccountEditPriceRangeTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Float"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditPriceRangeTestsQuery",
    "selections": [
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
            "name": "MyAccountEditPriceRange_me"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyAccountEditPriceRangeTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceRange",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceRangeMin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceRangeMax",
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "47562be5b3f02457d6f5e15dacfa52cf",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "me.priceRange": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "me.priceRangeMax": (v0/*: any*/),
        "me.priceRangeMin": (v0/*: any*/)
      }
    },
    "name": "MyAccountEditPriceRangeTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a0839053b0967e74fce1ba90afe7a263";

export default node;
