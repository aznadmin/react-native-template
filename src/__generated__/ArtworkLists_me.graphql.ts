/**
 * @generated SignedSource<<23b33ea87704f1dda031acb29fd90327>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkLists_me$data = {
  readonly artworkLists: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly customArtworkLists: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
        readonly isSavedArtwork?: boolean;
        readonly shareableWithPartners: boolean;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_item">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly savedArtworksArtworkList: {
    readonly internalID: string;
    readonly isSavedArtwork?: boolean;
    readonly shareableWithPartners: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkListItem_item">;
  } | null | undefined;
  readonly " $fragmentType": "ArtworkLists_me";
};
export type ArtworkLists_me$key = {
  readonly " $data"?: ArtworkLists_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkLists_me">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
  "kind": "Variable",
  "name": "artworkID",
  "variableName": "artworkID"
},
v3 = {
  "condition": "includeArtwork",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": [
        (v2/*: any*/)
      ],
      "kind": "ScalarField",
      "name": "isSavedArtwork",
      "storageKey": null
    }
  ]
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shareableWithPartners",
  "storageKey": null
},
v5 = {
  "args": [
    (v2/*: any*/),
    {
      "kind": "Variable",
      "name": "includeArtwork",
      "variableName": "includeArtwork"
    }
  ],
  "kind": "FragmentSpread",
  "name": "ArtworkListItem_item"
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "artworkID"
    },
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "includeArtwork"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ArtworkLists_meRefetch.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ArtworkLists_me",
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
        (v3/*: any*/),
        (v4/*: any*/),
        (v5/*: any*/)
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
                (v3/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/),
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
    },
    {
      "alias": "artworkLists",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        },
        {
          "kind": "Variable",
          "name": "includesArtworkID",
          "variableName": "artworkID"
        },
        {
          "kind": "Literal",
          "name": "saves",
          "value": true
        }
      ],
      "concreteType": "CollectionsConnection",
      "kind": "LinkedField",
      "name": "collectionsConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "f05f1b6aa8df3bbb372c74db90168d77";

export default node;
