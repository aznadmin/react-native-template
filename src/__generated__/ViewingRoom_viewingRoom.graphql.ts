/**
 * @generated SignedSource<<7b5d4b57619e0c37963497b9b8c2bf20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoom_viewingRoom$data = {
  readonly artworks: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly body: string | null | undefined;
  readonly internalID: string;
  readonly introStatement: string | null | undefined;
  readonly partner: {
    readonly href: string | null | undefined;
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly pullQuote: string | null | undefined;
  readonly slug: string;
  readonly status: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomArtworkRail_viewingRoom" | "ViewingRoomHeader_viewingRoom" | "ViewingRoomSubsections_viewingRoom" | "ViewingRoomViewWorksButton_viewingRoom">;
  readonly " $fragmentType": "ViewingRoom_viewingRoom";
};
export type ViewingRoom_viewingRoom$key = {
  readonly " $data"?: ViewingRoom_viewingRoom$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoom_viewingRoom">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoom_viewingRoom",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "introStatement",
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
      "alias": null,
      "args": null,
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pullQuote",
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
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": "artworks",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
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
      "storageKey": "artworksConnection(first:10)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ViewingRoomViewWorksButton_viewingRoom"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ViewingRoomSubsections_viewingRoom"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ViewingRoomArtworkRail_viewingRoom"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ViewingRoomHeader_viewingRoom"
    }
  ],
  "type": "ViewingRoom",
  "abstractKey": null
};

(node as any).hash = "2868de706326992d349d98839e9e0e85";

export default node;
