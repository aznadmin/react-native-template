/**
 * @generated SignedSource<<7f1c3d1f9f4d4c631cede5acbd8fe628>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Visibility = "LISTED" | "UNLISTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ArtworkHeader_artwork$data = {
  readonly artists: ReadonlyArray<{
    readonly name: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly figures: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ImageCarousel_figures">;
  }>;
  readonly href: string | null | undefined;
  readonly images: ReadonlyArray<{
    readonly __typename: "Image";
    readonly imageURL: string | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  }>;
  readonly internalID: string;
  readonly isSetVideoAsCover: boolean | null | undefined;
  readonly partner: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly title: string | null | undefined;
  readonly visibilityLevel: Visibility | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkActions_artwork" | "ArtworkTombstone_artwork">;
  readonly " $fragmentType": "ArtworkHeader_artwork";
};
export type ArtworkHeader_artwork$key = {
  readonly " $data"?: ArtworkHeader_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkHeader_artwork">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkHeader_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkActions_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkTombstone_artwork"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "figures",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageCarousel_figures"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "images",
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "figures",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "imageURL",
              "storageKey": null
            }
          ],
          "type": "Image",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSetVideoAsCover",
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
      "name": "href",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "visibilityLevel",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "a395f5c8ad6310a03cd99415c04cbf88";

export default node;
