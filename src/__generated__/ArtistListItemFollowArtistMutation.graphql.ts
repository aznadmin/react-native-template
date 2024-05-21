/**
 * @generated SignedSource<<dd4ee2d25705b965765dd66397bdadc0>>
 * @relayHash d049c29f027bb21204ebd3afc42cb1a2
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d049c29f027bb21204ebd3afc42cb1a2

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FollowArtistInput = {
  artistID: string;
  clientMutationId?: string | null | undefined;
  unfollow?: boolean | null | undefined;
};
export type ArtistListItemFollowArtistMutation$variables = {
  input: FollowArtistInput;
};
export type ArtistListItemFollowArtistMutation$data = {
  readonly followArtist: {
    readonly artist: {
      readonly id: string;
      readonly is_followed: boolean | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtistListItemFollowArtistMutation = {
  response: ArtistListItemFollowArtistMutation$data;
  variables: ArtistListItemFollowArtistMutation$variables;
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
            "alias": "is_followed",
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
    "name": "ArtistListItemFollowArtistMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtistListItemFollowArtistMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "d049c29f027bb21204ebd3afc42cb1a2",
    "metadata": {},
    "name": "ArtistListItemFollowArtistMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "2ba11cda7d0e8b5e39e28d148fb56e94";

export default node;
