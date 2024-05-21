/**
 * @generated SignedSource<<54376eb2794a2d8b8eaa7fde66b9ead4>>
 * @relayHash 97236f7d4b5cf2d06abfff2ab91b779c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 97236f7d4b5cf2d06abfff2ab91b779c

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type ArtworkPublishedNotificationFollowArtistMutation$variables = {
  input: FollowArtistInput;
};
export type ArtworkPublishedNotificationFollowArtistMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly isFollowed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtworkPublishedNotificationFollowArtistMutation = {
  response: ArtworkPublishedNotificationFollowArtistMutation$data;
  variables: ArtworkPublishedNotificationFollowArtistMutation$variables;
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
    "name": "ArtworkPublishedNotificationFollowArtistMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtworkPublishedNotificationFollowArtistMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "97236f7d4b5cf2d06abfff2ab91b779c",
    "metadata": {},
    "name": "ArtworkPublishedNotificationFollowArtistMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "8b5c1188b715ad7dbaee9af518164efe";

export default node;
