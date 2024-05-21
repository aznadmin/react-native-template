/**
 * @generated SignedSource<<aab3fe121a5c30a14c7793b3ec6ef288>>
 * @relayHash 097a08761f38f922edf914b44ea03b9e
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 097a08761f38f922edf914b44ea03b9e

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionsRailTestsQuery$variables = Record<PropertyKey, never>;
export type CollectionsRailTestsQuery$data = {
  readonly homePage: {
    readonly marketingCollectionsModule: {
      readonly " $fragmentSpreads": FragmentRefs<"CollectionsRail_collectionsModule">;
    } | null | undefined;
  } | null | undefined;
};
export type CollectionsRailTestsQuery$rawResponse = {
  readonly homePage: {
    readonly marketingCollectionsModule: {
      readonly results: ReadonlyArray<{
        readonly artworksConnection: {
          readonly counts: {
            readonly total: any | null | undefined;
          } | null | undefined;
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
              readonly image: {
                readonly url: string | null | undefined;
              } | null | undefined;
            } | null | undefined;
          } | null | undefined> | null | undefined;
          readonly id: string;
        } | null | undefined;
        readonly id: string;
        readonly slug: string;
        readonly title: string;
      } | null | undefined>;
    } | null | undefined;
  } | null | undefined;
};
export type CollectionsRailTestsQuery = {
  rawResponse: CollectionsRailTestsQuery$rawResponse;
  response: CollectionsRailTestsQuery$data;
  variables: CollectionsRailTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "CollectionsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageMarketingCollectionsModule",
            "kind": "LinkedField",
            "name": "marketingCollectionsModule",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CollectionsRail_collectionsModule"
              }
            ],
            "storageKey": null
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
    "name": "CollectionsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageMarketingCollectionsModule",
            "kind": "LinkedField",
            "name": "marketingCollectionsModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
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
                    "name": "slug",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 5
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
                        "concreteType": "FilterArtworksCounts",
                        "kind": "LinkedField",
                        "name": "counts",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "total",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
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
                              (v0/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ],
                    "storageKey": "artworksConnection(first:5,sort:\"-decayed_merch\")"
                  },
                  (v0/*: any*/)
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
    "id": "097a08761f38f922edf914b44ea03b9e",
    "metadata": {},
    "name": "CollectionsRailTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1515b35dee6e677382437e445a880a03";

export default node;
