/**
 * @generated SignedSource<<6485887e06566c49f8f39817e59f9f33>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SalesRail_salesModule$data = {
  readonly results: ReadonlyArray<{
    readonly artworksConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly image: {
            readonly url: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly formattedStartDateTime: string | null | undefined;
    readonly href: string | null | undefined;
    readonly id: string;
    readonly internalID: string;
    readonly liveURLIfOpen: string | null | undefined;
    readonly name: string | null | undefined;
    readonly saleArtworksConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly artwork: {
            readonly image: {
              readonly url: string | null | undefined;
            } | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly slug: string;
  } | null | undefined>;
  readonly " $fragmentType": "SalesRail_salesModule";
};
export type SalesRail_salesModule$key = {
  readonly " $data"?: SalesRail_salesModule$data;
  readonly " $fragmentSpreads": FragmentRefs<"SalesRail_salesModule">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v1 = [
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
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SalesRail_salesModule",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "results",
      "plural": true,
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
          "name": "internalID",
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
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "liveURLIfOpen",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "formattedStartDateTime",
          "storageKey": null
        },
        {
          "alias": null,
          "args": (v0/*: any*/),
          "concreteType": "SaleArtworkConnection",
          "kind": "LinkedField",
          "name": "saleArtworksConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SaleArtworkEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "SaleArtwork",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Artwork",
                      "kind": "LinkedField",
                      "name": "artwork",
                      "plural": false,
                      "selections": (v1/*: any*/),
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "saleArtworksConnection(first:3)"
        },
        {
          "alias": null,
          "args": (v0/*: any*/),
          "concreteType": "ArtworkConnection",
          "kind": "LinkedField",
          "name": "artworksConnection",
          "plural": false,
          "selections": [
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
                  "selections": (v1/*: any*/),
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "artworksConnection(first:3)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HomePageSalesModule",
  "abstractKey": null
};
})();

(node as any).hash = "9be60d334a6d4288c2fae2086b2150b9";

export default node;
