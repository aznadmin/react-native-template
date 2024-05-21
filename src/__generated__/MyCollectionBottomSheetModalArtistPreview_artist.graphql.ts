/**
 * @generated SignedSource<<425e25ea8bfeb5e8213f0eef904c21ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionBottomSheetModalArtistPreview_artist$data = {
  readonly isPersonalArtist: boolean | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistKindPills_artist" | "ArtistListItem_artist">;
  readonly " $fragmentType": "MyCollectionBottomSheetModalArtistPreview_artist";
};
export type MyCollectionBottomSheetModalArtistPreview_artist$key = {
  readonly " $data"?: MyCollectionBottomSheetModalArtistPreview_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionBottomSheetModalArtistPreview_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionBottomSheetModalArtistPreview_artist",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistListItem_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistKindPills_artist"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPersonalArtist",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "3635929ea82bada90c71e14ab7b18448";

export default node;
