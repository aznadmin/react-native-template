/**
 * @generated SignedSource<<3cad274cb95b9a0e91f6f116910738b8>>
 * @relayHash 014d8eb8d3a6bddce613684ce7dc31ba
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 014d8eb8d3a6bddce613684ce7dc31ba

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CuratedCollectionsQuery$variables = Record<PropertyKey, never>;
export type CuratedCollectionsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CuratedCollections_collections">;
};
export type CuratedCollectionsQuery = {
  response: CuratedCollectionsQuery$data;
  variables: CuratedCollectionsQuery$variables;
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
    "name": "CuratedCollectionsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CuratedCollections_collections"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CuratedCollectionsQuery",
    "selections": [
      {
        "alias": "collections",
        "args": [
          {
            "kind": "Literal",
            "name": "size",
            "value": 5
          }
        ],
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "curatedMarketingCollections",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "internalID",
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 3
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
            "storageKey": "artworksConnection(first:3)"
          },
          (v0/*: any*/)
        ],
        "storageKey": "curatedMarketingCollections(size:5)"
      }
    ]
  },
  "params": {
    "id": "014d8eb8d3a6bddce613684ce7dc31ba",
    "metadata": {},
    "name": "CuratedCollectionsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "db8b5fea8234adf00ca995972921635f";

export default node;
