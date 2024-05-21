/**
 * @generated SignedSource<<d76ca25fc9f7e745679066ad35a8eae0>>
 * @relayHash 3960f85b2ede3eeda1d48fe7915aa558
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 3960f85b2ede3eeda1d48fe7915aa558

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomViewWorksButtonTestsQuery$variables = Record<PropertyKey, never>;
export type ViewingRoomViewWorksButtonTestsQuery$data = {
  readonly viewingRoom: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomViewWorksButton_viewingRoom">;
  } | null | undefined;
};
export type ViewingRoomViewWorksButtonTestsQuery = {
  response: ViewingRoomViewWorksButtonTestsQuery$data;
  variables: ViewingRoomViewWorksButtonTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "unused"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewingRoomViewWorksButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ViewingRoom",
        "kind": "LinkedField",
        "name": "viewingRoom",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ViewingRoomViewWorksButton_viewingRoom"
          }
        ],
        "storageKey": "viewingRoom(id:\"unused\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewingRoomViewWorksButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ViewingRoom",
        "kind": "LinkedField",
        "name": "viewingRoom",
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
            "name": "internalID",
            "storageKey": null
          },
          {
            "alias": "artworksForCount",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              }
            ],
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              }
            ],
            "storageKey": "artworksConnection(first:1)"
          }
        ],
        "storageKey": "viewingRoom(id:\"unused\")"
      }
    ]
  },
  "params": {
    "id": "3960f85b2ede3eeda1d48fe7915aa558",
    "metadata": {},
    "name": "ViewingRoomViewWorksButtonTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e152f6981fa5beacc0e6b5874c62c16d";

export default node;
