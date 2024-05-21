/**
 * @generated SignedSource<<6e18a634107e0be2648810e425781be8>>
 * @relayHash f99d8f927f6aebe703cea51ce4465a9b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID f99d8f927f6aebe703cea51ce4465a9b

import { ConcreteRequest, Query } from 'relay-runtime';
export type ArtistAutosuggestQuery$variables = Record<PropertyKey, never>;
export type ArtistAutosuggestQuery$data = {
  readonly me: {
    readonly userInterestsConnection: {
      readonly edges: ReadonlyArray<{
        readonly internalID: string;
        readonly node: {
          readonly __typename: "Artist";
          readonly counts: {
            readonly artworks: any | null | undefined;
          } | null | undefined;
          readonly displayLabel: string | null | undefined;
          readonly formattedNationalityAndBirthday: string | null | undefined;
          readonly imageUrl: string | null | undefined;
          readonly initials: string | null | undefined;
          readonly internalID: string;
          readonly isPersonalArtist: boolean | null | undefined;
          readonly slug: string;
          readonly targetSupply: {
            readonly isP1: boolean | null | undefined;
          };
        } | {
          // This will never be '%other', but we need some
          // value in case none of the concrete values match.
          readonly __typename: "%other";
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type ArtistAutosuggestQuery = {
  response: ArtistAutosuggestQuery$data;
  variables: ArtistAutosuggestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "Literal",
  "name": "category",
  "value": "COLLECTED_BEFORE"
},
v1 = {
  "kind": "Literal",
  "name": "interestType",
  "value": "ARTIST"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
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
          "name": "artworks",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistTargetSupply",
      "kind": "LinkedField",
      "name": "targetSupply",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isP1",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayLabel",
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
      "name": "imageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "initials",
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPersonalArtist",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = [
  (v0/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  },
  (v1/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistAutosuggestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": "userInterestsConnection",
            "args": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "concreteType": "UserInterestConnection",
            "kind": "LinkedField",
            "name": "__MyCollectionCollectedArtistsRail_userInterestsConnection_connection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserInterestEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": "__MyCollectionCollectedArtistsRail_userInterestsConnection_connection(category:\"COLLECTED_BEFORE\",interestType:\"ARTIST\")"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistAutosuggestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v7/*: any*/),
            "concreteType": "UserInterestConnection",
            "kind": "LinkedField",
            "name": "userInterestsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserInterestEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v8/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": "userInterestsConnection(category:\"COLLECTED_BEFORE\",first:100,interestType:\"ARTIST\")"
          },
          {
            "alias": null,
            "args": (v7/*: any*/),
            "filters": [
              "category",
              "interestType"
            ],
            "handle": "connection",
            "key": "MyCollectionCollectedArtistsRail_userInterestsConnection",
            "kind": "LinkedHandle",
            "name": "userInterestsConnection"
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "f99d8f927f6aebe703cea51ce4465a9b",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "me",
            "userInterestsConnection"
          ]
        }
      ]
    },
    "name": "ArtistAutosuggestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "0918a523a12d8206bdc4b75310833913";

export default node;
