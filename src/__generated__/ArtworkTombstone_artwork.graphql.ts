/**
 * @generated SignedSource<<5448a5b145b155025ed60fcf4f963b1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkTombstone_artwork$data = {
  readonly date: string | null | undefined;
  readonly isForSale: boolean | null | undefined;
  readonly saleMessage: string | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkLotTimer_artwork" | "ArtworkMakerTitle_artwork">;
  readonly " $fragmentType": "ArtworkTombstone_artwork";
};
export type ArtworkTombstone_artwork$key = {
  readonly " $data"?: ArtworkTombstone_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkTombstone_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkTombstone_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkLotTimer_artwork"
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
      "name": "date",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isForSale",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkMakerTitle_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "1eb7294b8d38f54d5fd2d671705219c2";

export default node;
