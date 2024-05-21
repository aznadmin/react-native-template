/**
 * @generated SignedSource<<e03482d676fdb29cd9eee8ef3bae2655>>
 * @relayHash 2314eef68551c3d23c26c65e5d8532d8
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 2314eef68551c3d23c26c65e5d8532d8

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type ArtistListItemNewFollowArtistMutation$variables = {
  input: FollowArtistInput;
};
export type ArtistListItemNewFollowArtistMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly isFollowed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtistListItemNewFollowArtistMutation = {
  response: ArtistListItemNewFollowArtistMutation$data;
  variables: ArtistListItemNewFollowArtistMutation$variables;
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
    "name": "ArtistListItemNewFollowArtistMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtistListItemNewFollowArtistMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "2314eef68551c3d23c26c65e5d8532d8",
    "metadata": {},
    "name": "ArtistListItemNewFollowArtistMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "f21232b2da4e736c7ccc7ad66e67dee8";

export default node;
