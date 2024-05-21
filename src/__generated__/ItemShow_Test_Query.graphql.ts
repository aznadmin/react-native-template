/**
 * @generated SignedSource<<c3e187072d976e432b49aaccf0a396fc>>
 * @relayHash 2d28804189ecc419f2efa5e4a5fc0bad
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2d28804189ecc419f2efa5e4a5fc0bad

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemShow_Test_Query$variables = Record<PropertyKey, never>;
export type ItemShow_Test_Query$data = {
  readonly show: {
    readonly " $fragmentSpreads": FragmentRefs<"ItemShow_show">;
  } | null | undefined;
};
export type ItemShow_Test_Query = {
  response: ItemShow_Test_Query$data;
  variables: ItemShow_Test_Query$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-show"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemShow_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemShow_show"
          }
        ],
        "storageKey": "show(id:\"test-show\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemShow_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "href",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "SHORT"
              }
            ],
            "kind": "ScalarField",
            "name": "exhibitionPeriod",
            "storageKey": "exhibitionPeriod(format:\"SHORT\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/)
                ],
                "type": "Partner",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v3/*: any*/),
                "type": "Node",
                "abstractKey": "__isNode"
              },
              {
                "kind": "InlineFragment",
                "selections": (v3/*: any*/),
                "type": "ExternalPartner",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "image",
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "coverImage",
            "plural": false,
            "selections": [
              {
                "alias": "thumbnailUrl",
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
        "storageKey": "show(id:\"test-show\")"
      }
    ]
  },
  "params": {
    "id": "2d28804189ecc419f2efa5e4a5fc0bad",
    "metadata": {},
    "name": "ItemShow_Test_Query",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "30121d70b646b252f018df055c6bfc9e";

export default node;
