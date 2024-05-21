/**
 * @generated SignedSource<<31620f32299a22faa4db170817f2bbbd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistShow_show$data = {
  readonly coverImage: {
    readonly blurhash: string | null | undefined;
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly href: string | null | undefined;
  readonly internalID: string;
  readonly is_fair_booth: boolean | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"Metadata_show">;
  readonly " $fragmentType": "ArtistShow_show";
};
export type ArtistShow_show$key = {
  readonly " $data"?: ArtistShow_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistShow_show">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistShow_show",
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
      "name": "href",
      "storageKey": null
    },
    {
      "alias": "is_fair_booth",
      "args": null,
      "kind": "ScalarField",
      "name": "isFairBooth",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "coverImage",
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
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Metadata_show"
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "ba68fb08e7bc0fab312d851c75ec6671";

export default node;
