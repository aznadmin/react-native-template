/**
 * @generated SignedSource<<b6bc8d0d719041b779ebcd81c5484f7d>>
 * @relayHash fb826cd3f2990521af598a96452a90e5
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID fb826cd3f2990521af598a96452a90e5

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type ArticleFeaturedArtistNotificationFollowArtistMutation$variables = {
  input: FollowArtistInput;
};
export type ArticleFeaturedArtistNotificationFollowArtistMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly isFollowed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArticleFeaturedArtistNotificationFollowArtistMutation = {
  response: ArticleFeaturedArtistNotificationFollowArtistMutation$data;
  variables: ArticleFeaturedArtistNotificationFollowArtistMutation$variables;
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
    "name": "ArticleFeaturedArtistNotificationFollowArtistMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArticleFeaturedArtistNotificationFollowArtistMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "fb826cd3f2990521af598a96452a90e5",
    "metadata": {},
    "name": "ArticleFeaturedArtistNotificationFollowArtistMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "e7453e8407e51889ac2203807cc8d0ab";

export default node;
