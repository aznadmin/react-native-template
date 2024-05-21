/**
 * @generated SignedSource<<7511e96f32586d4470bcb1463249fe45>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleArtworkTileRailCard_saleArtwork$data = {
  readonly artwork: {
    readonly artistNames: string | null | undefined;
    readonly date: string | null | undefined;
    readonly href: string | null | undefined;
    readonly image: {
      readonly aspectRatio: number;
      readonly blurhash: string | null | undefined;
      readonly imageURL: string | null | undefined;
    } | null | undefined;
    readonly internalID: string;
    readonly realizedPrice: string | null | undefined;
    readonly saleMessage: string | null | undefined;
    readonly slug: string;
    readonly title: string | null | undefined;
  } | null | undefined;
  readonly counts: {
    readonly bidderPositions: any | null | undefined;
  } | null | undefined;
  readonly currentBid: {
    readonly display: string | null | undefined;
  } | null | undefined;
  readonly endAt: string | null | undefined;
  readonly extendedBiddingEndAt: string | null | undefined;
  readonly lotLabel: string | null | undefined;
  readonly sale: {
    readonly cascadingEndTimeIntervalMinutes: number | null | undefined;
    readonly displayTimelyAt: string | null | undefined;
    readonly endAt: string | null | undefined;
    readonly internalID: string;
    readonly isAuction: boolean | null | undefined;
    readonly isClosed: boolean | null | undefined;
    readonly liveStartAt: string | null | undefined;
    readonly startAt: string | null | undefined;
    readonly timeZone: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "SaleArtworkTileRailCard_saleArtwork";
};
export type SaleArtworkTileRailCard_saleArtwork$key = {
  readonly " $data"?: SaleArtworkTileRailCard_saleArtwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleArtworkTileRailCard_saleArtwork">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleArtworkTileRailCard_saleArtwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Artwork",
      "kind": "LinkedField",
      "name": "artwork",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artistNames",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "date",
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
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "alias": "imageURL",
              "args": [
                {
                  "kind": "Literal",
                  "name": "version",
                  "value": [
                    "large"
                  ]
                }
              ],
              "kind": "ScalarField",
              "name": "url",
              "storageKey": "url(version:[\"large\"])"
            },
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
          "storageKey": null
        },
        (v0/*: any*/),
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
          "name": "saleMessage",
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
          "args": null,
          "kind": "ScalarField",
          "name": "realizedPrice",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtworkCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bidderPositions",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtworkCurrentBid",
      "kind": "LinkedField",
      "name": "currentBid",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "display",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extendedBiddingEndAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lotLabel",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isAuction",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isClosed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "displayTimelyAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cascadingEndTimeIntervalMinutes",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startAt",
          "storageKey": null
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "liveStartAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "timeZone",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};
})();

(node as any).hash = "59c70ec32444aee9b03d5ffd58363269";

export default node;
