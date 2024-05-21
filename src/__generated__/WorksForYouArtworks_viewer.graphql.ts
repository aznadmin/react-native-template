/**
 * @generated SignedSource<<93caa675938af0cbfed1d0c19a023d91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WorksForYouArtworks_viewer$data = {
  readonly artworks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly href: string | null | undefined;
        readonly id: string;
        readonly image: {
          readonly aspectRatio: number;
          readonly blurhash: string | null | undefined;
        } | null | undefined;
        readonly slug: string;
        readonly " $fragmentSpreads": FragmentRefs<"ArtworkGridItem_artwork">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "WorksForYouArtworks_viewer";
};
export type WorksForYouArtworks_viewer$key = {
  readonly " $data"?: WorksForYouArtworks_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"WorksForYouArtworks_viewer">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "artworks"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 100,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "maxWorksPerArtist"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "onlyAtAuction"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "version"
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
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": require('./WorksForYouArtworks_viewerRefetch.graphql')
    }
  },
  "name": "WorksForYouArtworks_viewer",
  "selections": [
    {
      "alias": "artworks",
      "args": null,
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "__NewWorksForYou_artworks_connection",
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
          "concreteType": "ArtworkEdge",
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
                  "name": "id",
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
                  "name": "href",
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
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "includeAllImages",
                      "value": false
                    }
                  ],
                  "kind": "FragmentSpread",
                  "name": "ArtworkGridItem_artwork"
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
  "type": "Viewer",
  "abstractKey": null
};
})();

(node as any).hash = "802e29cb2e1701fb8be0989bc0a5ba37";

export default node;
