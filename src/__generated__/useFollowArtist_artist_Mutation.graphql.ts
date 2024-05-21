/**
 * @generated SignedSource<<f6f8db3a99df059403ea99c7fe2f1581>>
 * @relayHash 15f6a4fbb34259b1468837f6a3c34ed1
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 15f6a4fbb34259b1468837f6a3c34ed1

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type useFollowArtist_artist_Mutation$variables = {
  input: FollowArtistInput;
};
export type useFollowArtist_artist_Mutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly isFollowed: boolean | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"ArtistHeaderNavRight_artist" | "useFollowArtist_artist">;
    } | null | undefined;
  } | null | undefined;
};
export type useFollowArtist_artist_Mutation = {
  response: useFollowArtist_artist_Mutation$data;
  variables: useFollowArtist_artist_Mutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useFollowArtist_artist_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "useFollowArtist_artist"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ArtistHeaderNavRight_artist"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useFollowArtist_artist_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
                "storageKey": null
              },
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
                "concreteType": "ArtistCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "follows",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "15f6a4fbb34259b1468837f6a3c34ed1",
    "metadata": {},
    "name": "useFollowArtist_artist_Mutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "03befa706167229c6a41c87ba23ff21d";

export default node;
