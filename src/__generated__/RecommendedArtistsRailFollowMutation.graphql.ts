/**
 * @generated SignedSource<<87f81b2a1e3d78f83824315059f383f5>>
 * @relayHash 4977eb4752d7fcf8cf11ce5fa90f5cb3
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 4977eb4752d7fcf8cf11ce5fa90f5cb3

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type RecommendedArtistsRailFollowMutation$variables = {
  input: FollowArtistInput;
};
export type RecommendedArtistsRailFollowMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly isFollowed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type RecommendedArtistsRailFollowMutation = {
  response: RecommendedArtistsRailFollowMutation$data;
  variables: RecommendedArtistsRailFollowMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "FollowArtistPayload",
    "kind": "LinkedField",
    "name": "followArtist",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
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
    "name": "RecommendedArtistsRailFollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecommendedArtistsRailFollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "4977eb4752d7fcf8cf11ce5fa90f5cb3",
    "metadata": {},
    "name": "RecommendedArtistsRailFollowMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "054a8b1ef7f810861f694bb25111efc8";

export default node;
