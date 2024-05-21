/**
 * @generated SignedSource<<f60e4e7384162b24313b2c8740a2567c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TrendingArtistCard_artist$data = {
  readonly coverArtwork: {
    readonly image: {
      readonly url: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly formattedNationalityAndBirthday: string | null | undefined;
  readonly href: string | null | undefined;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "TrendingArtistCard_artist";
};
export type TrendingArtistCard_artist$key = {
  readonly " $data"?: TrendingArtistCard_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"TrendingArtistCard_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TrendingArtistCard_artist",
  "selections": [
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
      "name": "formattedNationalityAndBirthday",
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
                  "value": "small"
                }
              ],
              "kind": "ScalarField",
              "name": "url",
              "storageKey": "url(version:\"small\")"
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

(node as any).hash = "15fbf6b9fb3addba99143a25e9370f70";

export default node;
