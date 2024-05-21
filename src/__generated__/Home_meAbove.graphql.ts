/**
 * @generated SignedSource<<41bc93eebb0073d434fe230e773243c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_meAbove$data = {
  readonly counts: {
    readonly savedArtworks: number;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"EmailConfirmationBanner_me">;
  readonly " $fragmentType": "Home_meAbove";
};
export type Home_meAbove$key = {
  readonly " $data"?: Home_meAbove$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_meAbove">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_meAbove",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MeCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "savedArtworks",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EmailConfirmationBanner_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "8b3f29d1dd9934d0786eac1e5bcd0103";

export default node;
