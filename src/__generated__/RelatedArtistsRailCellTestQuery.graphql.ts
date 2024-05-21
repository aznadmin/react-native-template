/**
 * @generated SignedSource<<84a02a24440afe08a8d4552d1f7c4faa>>
 * @relayHash a05e7932ef9178d124d64552ffbfb108
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a05e7932ef9178d124d64552ffbfb108

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedArtistsRailCellTestQuery$variables = Record<PropertyKey, never>;
export type RelatedArtistsRailCellTestQuery$data = {
  readonly artist: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedArtistsRailCell_artist">;
  };
  readonly relatedArtist: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedArtistsRailCell_relatedArtist">;
  };
} | null | undefined;
export type RelatedArtistsRailCellTestQuery = {
  response: RelatedArtistsRailCellTestQuery$data;
  variables: RelatedArtistsRailCellTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "parent-artist-id"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artist-id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artist"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelatedArtistsRailCellTestQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
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
              "name": "RelatedArtistsRailCell_artist"
            }
          ],
          "storageKey": "artist(id:\"parent-artist-id\")"
        },
        "action": "NONE",
        "path": "artist"
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": "relatedArtist",
          "args": (v1/*: any*/),
          "concreteType": "Artist",
          "kind": "LinkedField",
          "name": "artist",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RelatedArtistsRailCell_relatedArtist"
            }
          ],
          "storageKey": "artist(id:\"artist-id\")"
        },
        "action": "NONE",
        "path": "relatedArtist"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelatedArtistsRailCellTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": "artist(id:\"parent-artist-id\")"
      },
      {
        "alias": "relatedArtist",
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "href",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "formattedNationalityAndBirthday",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artwork",
            "kind": "LinkedField",
            "name": "coverArtwork",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "version",
                        "value": "large"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": "url(version:\"large\")"
                  }
                ],
                "storageKey": null
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "artist(id:\"artist-id\")"
      }
    ]
  },
  "params": {
    "id": "a05e7932ef9178d124d64552ffbfb108",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": (v5/*: any*/),
        "artist.id": (v6/*: any*/),
        "artist.internalID": (v6/*: any*/),
        "artist.slug": (v6/*: any*/),
        "relatedArtist": (v5/*: any*/),
        "relatedArtist.coverArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "relatedArtist.coverArtwork.id": (v6/*: any*/),
        "relatedArtist.coverArtwork.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "relatedArtist.coverArtwork.image.url": (v7/*: any*/),
        "relatedArtist.formattedNationalityAndBirthday": (v7/*: any*/),
        "relatedArtist.href": (v7/*: any*/),
        "relatedArtist.id": (v6/*: any*/),
        "relatedArtist.internalID": (v6/*: any*/),
        "relatedArtist.isFollowed": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "relatedArtist.name": (v7/*: any*/),
        "relatedArtist.slug": (v6/*: any*/)
      }
    },
    "name": "RelatedArtistsRailCellTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "ce6c27623cb5ed8a1c2df081e39d6f7c";

export default node;
