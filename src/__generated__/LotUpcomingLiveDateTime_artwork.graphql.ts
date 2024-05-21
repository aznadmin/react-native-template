/**
 * @generated SignedSource<<b593c348f05ce6007af8f8dbc661c94b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LotUpcomingLiveDateTime_artwork$data = {
  readonly sale: {
    readonly liveStartAt: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "LotUpcomingLiveDateTime_artwork";
};
export type LotUpcomingLiveDateTime_artwork$key = {
  readonly " $data"?: LotUpcomingLiveDateTime_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"LotUpcomingLiveDateTime_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LotUpcomingLiveDateTime_artwork",
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
          "name": "liveStartAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "7f192132468b47bec15e4e447287ea3e";

export default node;
