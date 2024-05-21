/**
 * @generated SignedSource<<55bb223380fc1daffdd9c2274cc24a8d>>
 * @relayHash 2acd51d4c1caa60e58c1786ff59c0047
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2acd51d4c1caa60e58c1786ff59c0047

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDislikeArtworkMutation$variables = {
  artworkID: string;
};
export type useDislikeArtworkMutation$data = {
  readonly dislikeArtwork: {
    readonly artwork: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type useDislikeArtworkMutation = {
  response: useDislikeArtworkMutation$data;
  variables: useDislikeArtworkMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "artworkID",
            "variableName": "artworkID"
          },
          {
            "kind": "Literal",
            "name": "remove",
            "value": false
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DislikeArtworkPayload",
    "kind": "LinkedField",
    "name": "dislikeArtwork",
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDislikeArtworkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDislikeArtworkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "2acd51d4c1caa60e58c1786ff59c0047",
    "metadata": {},
    "name": "useDislikeArtworkMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "95ffe008de2fe254e91c8f7624b59f76";

export default node;
