/**
 * @generated SignedSource<<a926e72777a44d282a6ea307c6f39ad8>>
 * @relayHash 235c855b459d32a081e1f045619bc616
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 235c855b459d32a081e1f045619bc616

import { ConcreteRequest, Query } from 'relay-runtime';
export type CreateNewArtworkListViewTestsQuery$variables = Record<PropertyKey, never>;
export type CreateNewArtworkListViewTestsQuery$data = {
  readonly me: {
    readonly internalID: string;
  } | null | undefined;
};
export type CreateNewArtworkListViewTestsQuery = {
  response: CreateNewArtworkListViewTestsQuery$data;
  variables: CreateNewArtworkListViewTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateNewArtworkListViewTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/)
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
    "name": "CreateNewArtworkListViewTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
    "id": "235c855b459d32a081e1f045619bc616",
    "metadata": {},
    "name": "CreateNewArtworkListViewTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "4fff324448e069aeac0176f6a7478ac0";

export default node;
