/**
 * @generated SignedSource<<3671520bf3743a9e78a5009274378a76>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkSaveButton_artwork$data = {
  readonly sale: {
    readonly isAuction: boolean | null | undefined;
    readonly isClosed: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"useSaveArtworkToArtworkLists_artwork">;
  readonly " $fragmentType": "ArtworkSaveButton_artwork";
};
export type ArtworkSaveButton_artwork$key = {
  readonly " $data"?: ArtworkSaveButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkSaveButton_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkSaveButton_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
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
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSaveArtworkToArtworkLists_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "d4299ee0a597d9b50369f047d647962f";

export default node;
