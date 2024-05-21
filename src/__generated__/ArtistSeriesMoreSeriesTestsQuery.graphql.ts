/**
 * @generated SignedSource<<b7fcb50d3b11740f9fafeca17646d147>>
 * @relayHash d8d87f134f026e2877fdd9d2ed76c47b
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID d8d87f134f026e2877fdd9d2ed76c47b

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesMoreSeriesTestsQuery$variables = Record<PropertyKey, never>;
export type ArtistSeriesMoreSeriesTestsQuery$data = {
  readonly artistSeries: {
    readonly artist: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesMoreSeries_artist">;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type ArtistSeriesMoreSeriesTestsQuery$rawResponse = {
  readonly artistSeries: {
    readonly artist: ReadonlyArray<{
      readonly artistSeriesConnection: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly artworksCountMessage: string | null | undefined;
            readonly featured: boolean;
            readonly image: {
              readonly url: string | null | undefined;
            } | null | undefined;
            readonly internalID: string;
            readonly slug: string;
            readonly title: string;
          } | null | undefined;
        } | null | undefined> | null | undefined;
        readonly totalCount: number;
      } | null | undefined;
      readonly id: string;
      readonly internalID: string;
      readonly slug: string;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type ArtistSeriesMoreSeriesTestsQuery = {
  rawResponse: ArtistSeriesMoreSeriesTestsQuery$rawResponse;
  response: ArtistSeriesMoreSeriesTestsQuery$data;
  variables: ArtistSeriesMoreSeriesTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "pumpkins"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": 1
  }
],
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
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesMoreSeriesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          {
            "alias": "artist",
            "args": (v1/*: any*/),
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ArtistSeriesMoreSeries_artist"
              }
            ],
            "storageKey": "artists(size:1)"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistSeriesMoreSeriesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          {
            "alias": "artist",
            "args": (v1/*: any*/),
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 4
                  }
                ],
                "concreteType": "ArtistSeriesConnection",
                "kind": "LinkedField",
                "name": "artistSeriesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistSeriesEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ArtistSeries",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v2/*: any*/),
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
                            "name": "featured",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artworksCountMessage",
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artistSeriesConnection(first:4)"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": "artists(size:1)"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ]
  },
  "params": {
    "id": "d8d87f134f026e2877fdd9d2ed76c47b",
    "metadata": {},
    "name": "ArtistSeriesMoreSeriesTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "5bf5ba76c7fb3490b2d0d102614bc680";

export default node;
