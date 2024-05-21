/**
 * @generated SignedSource<<aa857f05902806f0614e83dfb1e77cee>>
 * @relayHash 4434cff676a09730b45382a407db9ac1
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 4434cff676a09730b45382a407db9ac1

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FullFeaturedArtistListTestsQuery$variables = Record<PropertyKey, never>;
export type FullFeaturedArtistListTestsQuery$data = {
  readonly marketingCollection: {
    readonly " $fragmentSpreads": FragmentRefs<"FullFeaturedArtistList_collection">;
  } | null | undefined;
};
export type FullFeaturedArtistListTestsQuery$rawResponse = {
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
  } | null | undefined;
};
export type FullFeaturedArtistListTestsQuery = {
  rawResponse: FullFeaturedArtistListTestsQuery$rawResponse;
  response: FullFeaturedArtistListTestsQuery$data;
  variables: FullFeaturedArtistListTestsQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v3 = {
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
    "name": "FullFeaturedArtistListTestsQuery",
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
            "name": "FullFeaturedArtistList_collection"
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
    "name": "FullFeaturedArtistListTestsQuery",
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
                "args": null,
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
                  (v1/*: any*/),
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
                "storageKey": null
              },
              (v1/*: any*/)
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
              (v1/*: any*/)
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
          (v1/*: any*/)
        ],
        "storageKey": "marketingCollection(slug:\"emerging-photographers\")"
      }
    ]
  },
  "params": {
    "id": "4434cff676a09730b45382a407db9ac1",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "marketingCollection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MarketingCollection"
        },
        "marketingCollection.artworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "marketingCollection.artworksConnection.id": (v2/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "marketingCollection.artworksConnection.merchandisableArtists.birthday": (v3/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.deathday": (v3/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.href": (v3/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.id": (v2/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "marketingCollection.artworksConnection.merchandisableArtists.image.url": (v3/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.initials": (v3/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.internalID": (v2/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.is_followed": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "marketingCollection.artworksConnection.merchandisableArtists.name": (v3/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.nationality": (v3/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.slug": (v2/*: any*/),
        "marketingCollection.featuredArtistExclusionIds": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "String"
        },
        "marketingCollection.id": (v2/*: any*/),
        "marketingCollection.query": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "MarketingCollectionQuery"
        },
        "marketingCollection.query.artistIDs": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "String"
        },
        "marketingCollection.query.id": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        }
      }
    },
    "name": "FullFeaturedArtistListTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "baf60598c0087e51a1db686084068668";

export default node;
