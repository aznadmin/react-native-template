/**
 * @generated SignedSource<<bbb7a873e3448d5baddf46eb525959aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Lot_saleArtwork$data = {
  readonly artwork: {
    readonly artistNames: string | null | undefined;
    readonly image: {
      readonly url: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly lotLabel: string | null | undefined;
  readonly " $fragmentType": "Lot_saleArtwork";
};
export type Lot_saleArtwork$key = {
  readonly " $data"?: Lot_saleArtwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"Lot_saleArtwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Lot_saleArtwork",
  "selections": [
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
                  "value": "medium"
                }
              ],
              "kind": "ScalarField",
              "name": "url",
              "storageKey": "url(version:\"medium\")"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};

(node as any).hash = "67ed7697ca2bf6eb7b5370c5451c43eb";

export default node;
