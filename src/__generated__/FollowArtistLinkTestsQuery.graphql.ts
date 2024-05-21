/**
 * @generated SignedSource<<511880873efec903e96b25bd915151e1>>
 * @relayHash 07ff4dc419cbdf0c5f7d6cd0bb12b008
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 07ff4dc419cbdf0c5f7d6cd0bb12b008

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FollowArtistLinkTestsQuery$variables = Record<PropertyKey, never>;
export type FollowArtistLinkTestsQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"FollowArtistLink_artist">;
  } | null | undefined;
};
export type FollowArtistLinkTestsQuery = {
  response: FollowArtistLinkTestsQuery$data;
  variables: FollowArtistLinkTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artistID"
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FollowArtistLinkTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FollowArtistLink_artist"
          }
        ],
        "storageKey": "artist(id:\"artistID\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FollowArtistLinkTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
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
        "storageKey": "artist(id:\"artistID\")"
      }
    ]
  },
  "params": {
    "id": "07ff4dc419cbdf0c5f7d6cd0bb12b008",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artist.id": (v1/*: any*/),
        "artist.internalID": (v1/*: any*/),
        "artist.is_followed": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "artist.slug": (v1/*: any*/)
      }
    },
    "name": "FollowArtistLinkTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "859b2d798e1ba3f929d35148ab162379";

export default node;
