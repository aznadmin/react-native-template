/**
 * @generated SignedSource<<3dd6737203e32b4c148878eff368d345>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkLists_collectionsConnection$data = {
  readonly me: {
    readonly customArtworkLists: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly internalID: string;
          readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_collection">;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly savedArtworksArtworkList: {
      readonly internalID: string;
      readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_collection">;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "ArtworkLists_collectionsConnection";
};
export type ArtworkLists_collectionsConnection$key = {
  readonly " $data"?: ArtworkLists_collectionsConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkLists_collectionsConnection">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "me",
  "customArtworkLists"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ArtworkListItem_collection"
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./ArtworkLists_collectionsConnectionRefetch.graphql')
    }
  },
  "name": "ArtworkLists_collectionsConnection",
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
          "alias": "savedArtworksArtworkList",
          "args": [
            {
              "kind": "Literal",
              "name": "id",
              "value": "saved-artwork"
            }
          ],
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": "collection(id:\"saved-artwork\")"
        },
        {
          "alias": "customArtworkLists",
          "args": null,
          "concreteType": "CollectionsConnection",
          "kind": "LinkedField",
          "name": "__ArtworkLists_customArtworkLists_connection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "CollectionsEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Collection",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    (v2/*: any*/),
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
            },
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
};
})();

(node as any).hash = "09995255304427c299cc90ea34a6d684";

export default node;
