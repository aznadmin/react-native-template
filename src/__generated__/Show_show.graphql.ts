/**
 * @generated SignedSource<<a5c6c57aed939ee9014f438e8da39a07>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Show_show$data = {
  readonly counts: {
    readonly eligibleArtworks: any | null | undefined;
  } | null | undefined;
  readonly images: ReadonlyArray<{
    readonly __typename: "Image";
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly isActive: boolean | null | undefined;
  readonly slug: string;
  readonly viewingRoomIDs: ReadonlyArray<string>;
  readonly " $fragmentSpreads": FragmentRefs<"ShowArtworksEmptyState_show" | "ShowArtworks_show" | "ShowContextCard_show" | "ShowHeader_show" | "ShowInfo_show" | "ShowInstallShots_show" | "ShowViewingRoom_show">;
  readonly " $fragmentType": "Show_show";
};
export type Show_show$key = {
  readonly " $data"?: Show_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"Show_show">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Show_show",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isActive",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowHeader_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowInstallShots_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowInfo_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowViewingRoom_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowContextCard_show"
    },
    {
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "sort": "partner_show_position"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "ShowArtworks_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowArtworksEmptyState_show"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewingRoomIDs",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "default",
          "value": false
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        }
      ],
      "storageKey": "images(default:false)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ShowCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "eligibleArtworks",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "509775cec47e190761535a02991dce8e";

export default node;
