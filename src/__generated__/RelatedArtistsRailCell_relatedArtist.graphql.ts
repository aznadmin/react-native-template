/**
 * @generated SignedSource<<d2ad82129fe0eab78915d9c5eb493f84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedArtistsRailCell_relatedArtist$data = {
  readonly coverArtwork: {
    readonly image: {
      readonly url: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly formattedNationalityAndBirthday: string | null | undefined;
  readonly href: string;
  readonly id: string;
  readonly internalID: string;
  readonly isFollowed: boolean | null | undefined;
  readonly name: string;
  readonly slug: string;
  readonly " $fragmentType": "RelatedArtistsRailCell_relatedArtist";
} | null | undefined;
export type RelatedArtistsRailCell_relatedArtist$key = {
  readonly " $data"?: RelatedArtistsRailCell_relatedArtist$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedArtistsRailCell_relatedArtist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedArtistsRailCell_relatedArtist",
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
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "internalID",
        "storageKey": null
      },
      "action": "NONE",
      "path": "internalID"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      "action": "NONE",
      "path": "name"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "href",
        "storageKey": null
      },
      "action": "NONE",
      "path": "href"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "formattedNationalityAndBirthday",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFollowed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artwork",
      "kind": "LinkedField",
      "name": "coverArtwork",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "0cd22690eafdb54880576bc5c06a6e75";

export default node;
