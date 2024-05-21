/**
 * @generated SignedSource<<943b51b39029bf573cc65811982a604c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SavedSearchesList_me$data = {
  readonly alertsConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly artistSeriesIDs: ReadonlyArray<string | null | undefined> | null | undefined;
        readonly artworksConnection: {
          readonly counts: {
            readonly total: any | null | undefined;
          } | null | undefined;
        } | null | undefined;
        readonly internalID: string;
        readonly subtitle: string;
        readonly title: string;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
      readonly startCursor: string | null | undefined;
    };
  };
  readonly " $fragmentType": "SavedSearchesList_me";
};
export type SavedSearchesList_me$key = {
  readonly " $data"?: SavedSearchesList_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SavedSearchesList_me">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "artistIDs"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": "ENABLED_AT_DESC",
      "kind": "LocalArgument",
      "name": "sort"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "alertsConnection"
        ]
      }
    ]
  },
  "name": "SavedSearchesList_me",
  "selections": [
    {
      "alias": "alertsConnection",
      "args": [
        {
          "kind": "Variable",
          "name": "sort",
          "variableName": "sort"
        }
      ],
      "concreteType": "AlertConnection",
      "kind": "LinkedField",
      "name": "__SavedSearches_alertsConnection_connection",
      "plural": false,
      "selections": [
        {
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
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AlertEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Alert",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
                  "name": "artistSeriesIDs",
                  "storageKey": null
                },
                {
                  "alias": "title",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "only",
                      "value": (v0/*: any*/)
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "displayName",
                  "storageKey": "displayName(only:[\"artistIDs\"])"
                },
                {
                  "alias": "subtitle",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "except",
                      "value": (v0/*: any*/)
                    }
                  ],
                  "kind": "ScalarField",
                  "name": "displayName",
                  "storageKey": "displayName(except:[\"artistIDs\"])"
                },
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "first",
                      "value": 1
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
                    }
                  ],
                  "storageKey": "artworksConnection(first:1)"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "e99eead73d43cb10c7f5675c5a2324e4";

export default node;
