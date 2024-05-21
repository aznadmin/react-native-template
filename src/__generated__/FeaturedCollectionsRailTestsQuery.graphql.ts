/**
 * @generated SignedSource<<cdf06d2f105031a9bf1458b5c223c212>>
 * @relayHash a71def6f967b6103e3715abfb89cda4d
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID a71def6f967b6103e3715abfb89cda4d

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarketingCollectionGroupTypeEnum = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
export type FeaturedCollectionsRailTestsQuery$variables = Record<PropertyKey, never>;
export type FeaturedCollectionsRailTestsQuery$data = {
  readonly marketingCollection: {
    readonly linkedCollections: ReadonlyArray<{
      readonly groupType: MarketingCollectionGroupTypeEnum;
      readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsRail_collectionGroup">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsRail_collection">;
  } | null | undefined;
};
export type FeaturedCollectionsRailTestsQuery$rawResponse = {
  readonly marketingCollection: {
    readonly id: string;
    readonly linkedCollections: ReadonlyArray<{
      readonly groupType: MarketingCollectionGroupTypeEnum;
      readonly members: ReadonlyArray<{
        readonly descriptionMarkdown: string | null | undefined;
        readonly featuredCollectionArtworks: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly image: {
                readonly blurhash: string | null | undefined;
                readonly url: string | null | undefined;
              } | null | undefined;
            } | null | undefined;
          } | null | undefined> | null | undefined;
          readonly id: string;
        } | null | undefined;
        readonly id: string;
        readonly priceGuidance: number | null | undefined;
        readonly slug: string;
        readonly title: string;
      }>;
      readonly name: string;
    }>;
    readonly slug: string;
  } | null | undefined;
};
export type FeaturedCollectionsRailTestsQuery = {
  rawResponse: FeaturedCollectionsRailTestsQuery$rawResponse;
  response: FeaturedCollectionsRailTestsQuery$data;
  variables: FeaturedCollectionsRailTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "post-war"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "groupType",
  "storageKey": null
},
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FeaturedCollectionsRailTestsQuery",
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
            "name": "FeaturedCollectionsRail_collection"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionGroup",
            "kind": "LinkedField",
            "name": "linkedCollections",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FeaturedCollectionsRail_collectionGroup"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "marketingCollection(slug:\"post-war\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FeaturedCollectionsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionGroup",
            "kind": "LinkedField",
            "name": "linkedCollections",
            "plural": true,
            "selections": [
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
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "members",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "priceGuidance",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "descriptionMarkdown",
                    "storageKey": null
                  },
                  {
                    "alias": "featuredCollectionArtworks",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "aggregations",
                        "value": [
                          "TOTAL"
                        ]
                      },
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 1
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
                        "concreteType": "FilterArtworksEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "node",
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
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "blurhash",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": "artworksConnection(aggregations:[\"TOTAL\"],first:1,sort:\"-decayed_merch\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "marketingCollection(slug:\"post-war\")"
      }
    ]
  },
  "params": {
    "id": "a71def6f967b6103e3715abfb89cda4d",
    "metadata": {},
    "name": "FeaturedCollectionsRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "98a14bb9f2b4d0e312406ba7a5900987";

export default node;
