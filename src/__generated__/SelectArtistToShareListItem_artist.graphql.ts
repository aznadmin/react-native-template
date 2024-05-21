/**
 * @generated SignedSource<<6e39c43a82584128ae1e8ce7b01ce045>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SelectArtistToShareListItem_artist$data = {
  readonly internalID: string;
  readonly name: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistListItem_artist">;
  readonly " $fragmentType": "SelectArtistToShareListItem_artist";
};
export type SelectArtistToShareListItem_artist$key = {
  readonly " $data"?: SelectArtistToShareListItem_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"SelectArtistToShareListItem_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectArtistToShareListItem_artist",
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
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistListItem_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "d5ae9ce0065163bede3121aa1ff4e800";

export default node;
