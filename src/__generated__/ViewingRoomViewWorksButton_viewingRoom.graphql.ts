/**
 * @generated SignedSource<<5e89cec6840fbfb48ffac5324553734e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomViewWorksButton_viewingRoom$data = {
  readonly artworksForCount: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "ViewingRoomViewWorksButton_viewingRoom";
};
export type ViewingRoomViewWorksButton_viewingRoom$key = {
  readonly " $data"?: ViewingRoomViewWorksButton_viewingRoom$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomViewWorksButton_viewingRoom">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomViewWorksButton_viewingRoom",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": "artworksForCount",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "artworksConnection(first:1)"
    }
  ],
  "type": "ViewingRoom",
  "abstractKey": null
};

(node as any).hash = "184db16c33d614d3d7d46953422775f7";

export default node;
