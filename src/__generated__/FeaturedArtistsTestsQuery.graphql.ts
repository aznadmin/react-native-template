/**
 * @generated SignedSource<<8bff81b7e48134836bec82914ccbf4d8>>
 * @relayHash f89058226e8d41b3e432b966e4be1fd1
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID f89058226e8d41b3e432b966e4be1fd1

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedArtistsTestsQuery$variables = Record<PropertyKey, never>;
export type FeaturedArtistsTestsQuery$data = {
  readonly marketingCollection: {
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedArtists_collection">;
  } | null | undefined;
};
export type FeaturedArtistsTestsQuery$rawResponse = {
  readonly marketingCollection: {
    readonly artworksConnection: {
      readonly id: string;
      readonly merchandisableArtists: ReadonlyArray<{
        readonly birthday: string | null | undefined;
        readonly deathday: string | null | undefined;
        readonly href: string | null | undefined;
        readonly id: string;
        readonly image: {
          readonly url: string | null | undefined;
        } | null | undefined;
        readonly initials: string | null | undefined;
        readonly internalID: string;
        readonly is_followed: boolean | null | undefined;
        readonly name: string | null | undefined;
        readonly nationality: string | null | undefined;
        readonly slug: string;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly featuredArtistExclusionIds: ReadonlyArray<string>;
    readonly id: string;
    readonly query: {
      readonly artistIDs: ReadonlyArray<string> | null | undefined;
      readonly id: string | null | undefined;
    };
    readonly slug: string;
  } | null | undefined;
};
export type FeaturedArtistsTestsQuery = {
  rawResponse: FeaturedArtistsTestsQuery$rawResponse;
  response: FeaturedArtistsTestsQuery$data;
  variables: FeaturedArtistsTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "emerging-photographers"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
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
    "name": "FeaturedArtistsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FeaturedArtists_collection"
          }
        ],
        "storageKey": "marketingCollection(slug:\"emerging-photographers\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FeaturedArtistsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "MERCHANDISABLE_ARTISTS"
                ]
              },
              {
                "kind": "Literal",
                "name": "size",
                "value": 0
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "-decayed_merch"
              }
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": 4
                  }
                ],
                "concreteType": "Artist",
                "kind": "LinkedField",
                "name": "merchandisableArtists",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "internalID",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v1/*: any*/),
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
                    "name": "initials",
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
                    "alias": "is_followed",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isFollowed",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nationality",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "birthday",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "deathday",
                    "storageKey": null
                  },
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
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "merchandisableArtists(size:4)"
              },
              (v2/*: any*/)
            ],
            "storageKey": "artworksConnection(aggregations:[\"MERCHANDISABLE_ARTISTS\"],size:0,sort:\"-decayed_merch\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionQuery",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "artistIDs",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "featuredArtistExclusionIds",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "marketingCollection(slug:\"emerging-photographers\")"
      }
    ]
  },
  "params": {
    "id": "f89058226e8d41b3e432b966e4be1fd1",
    "metadata": {},
    "name": "FeaturedArtistsTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "b052d942acd32e0160c794935f46ac33";

export default node;
