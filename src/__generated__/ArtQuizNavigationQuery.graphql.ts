/**
 * @generated SignedSource<<aff40556605e20c33bc1ebbdd554732e>>
 * @relayHash c419c166bce48bba35440ca2404e8fd2
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c419c166bce48bba35440ca2404e8fd2

import { ConcreteRequest, Query } from 'relay-runtime';
export type ArtQuizNavigationQuery$variables = Record<PropertyKey, never>;
export type ArtQuizNavigationQuery$data = {
  readonly me: {
    readonly quiz: {
      readonly completedAt: string | null | undefined;
    };
  } | null | undefined;
};
export type ArtQuizNavigationQuery = {
  response: ArtQuizNavigationQuery$data;
  variables: ArtQuizNavigationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completedAt",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtQuizNavigationQuery",
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
            "concreteType": "Quiz",
            "kind": "LinkedField",
            "name": "quiz",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
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
    "name": "ArtQuizNavigationQuery",
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
            "concreteType": "Quiz",
            "kind": "LinkedField",
            "name": "quiz",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "c419c166bce48bba35440ca2404e8fd2",
    "metadata": {},
    "name": "ArtQuizNavigationQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "6b182ca4288d149e3695bc46946f4293";

export default node;
