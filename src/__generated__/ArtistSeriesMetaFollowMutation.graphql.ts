/**
 * @generated SignedSource<<4fe52dadd239c55f1b7867786912dac5>>
 * @relayHash 628973ab7893ef6c168d9a16152051e6
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 628973ab7893ef6c168d9a16152051e6

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type ArtistSeriesMetaFollowMutation$variables = {
  input: FollowArtistInput;
};
export type ArtistSeriesMetaFollowMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly isFollowed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtistSeriesMetaFollowMutation = {
  response: ArtistSeriesMetaFollowMutation$data;
  variables: ArtistSeriesMetaFollowMutation$variables;
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
  "name": "isFollowed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesMetaFollowMutation",
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
              (v2/*: any*/)
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
    "name": "ArtistSeriesMetaFollowMutation",
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
    ]
  },
  "params": {
    "id": "628973ab7893ef6c168d9a16152051e6",
    "metadata": {},
    "name": "ArtistSeriesMetaFollowMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "b3e0958b2c8727600b7c82ef0c74630f";

export default node;
