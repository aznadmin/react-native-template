/**
 * @generated SignedSource<<83b025eead85f10211e3ca1e5761adc8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtistTargetSupplyPriority = "FALSE" | "TRUE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type InfiniteScrollArtworksGrid_connection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly artist: {
        readonly targetSupply: {
          readonly priority: ArtistTargetSupplyPriority | null | undefined;
        };
      } | null | undefined;
      readonly id: string;
      readonly image: {
        readonly aspectRatio: number;
        readonly blurhash: string | null | undefined;
      } | null | undefined;
      readonly slug: string;
      readonly " $fragmentSpreads": FragmentRefs<"ArtworkGridItem_artwork" | "MyCollectionArtworkGridItem_artwork">;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly pageInfo: {
    readonly endCursor: string | null | undefined;
    readonly hasNextPage: boolean;
    readonly startCursor: string | null | undefined;
  };
  readonly " $fragmentType": "InfiniteScrollArtworksGrid_connection";
};
export type InfiniteScrollArtworksGrid_connection$key = {
  readonly " $data"?: InfiniteScrollArtworksGrid_connection$data;
  readonly " $fragmentSpreads": FragmentRefs<"InfiniteScrollArtworksGrid_connection">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "includeAllImages",
    "value": false
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "skipMyCollection"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "InfiniteScrollArtworksGrid_connection",
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
      "concreteType": null,
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
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "includeAll",
                  "value": false
                }
              ],
              "concreteType": "Image",
              "kind": "LinkedField",
              "name": "image",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "aspectRatio",
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
              "storageKey": "image(includeAll:false)"
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "artist",
              "plural": false,
              "selections": [
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
                      "name": "priority",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": (v0/*: any*/),
              "kind": "FragmentSpread",
              "name": "ArtworkGridItem_artwork"
            },
            {
              "condition": "skipMyCollection",
              "kind": "Condition",
              "passingValue": false,
              "selections": [
                {
                  "args": (v0/*: any*/),
                  "kind": "FragmentSpread",
                  "name": "MyCollectionArtworkGridItem_artwork"
                }
              ]
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArtworkConnectionInterface",
  "abstractKey": "__isArtworkConnectionInterface"
};
})();

(node as any).hash = "b5f072f5687ddcff903cc0b9cb964e6c";

export default node;
