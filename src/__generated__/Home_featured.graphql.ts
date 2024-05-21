/**
 * @generated SignedSource<<c7d7523f4058027dd82c71c2969c5b1f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_featured$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomsListFeatured_featured">;
  readonly " $fragmentType": "Home_featured";
};
export type Home_featured$key = {
  readonly " $data"?: Home_featured$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_featured">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_featured",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ViewingRoomsListFeatured_featured"
    }
  ],
  "type": "ViewingRoomConnection",
  "abstractKey": null
};

(node as any).hash = "4d174acc6246fbadb42f085240d77e55";

export default node;
