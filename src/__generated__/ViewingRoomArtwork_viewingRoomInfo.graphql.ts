/**
 * @generated SignedSource<<dc14f49a3c9f3dba04bb722903f5c7eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomArtwork_viewingRoomInfo$data = {
  readonly distanceToClose: string | null | undefined;
  readonly distanceToOpen: string | null | undefined;
  readonly heroImage: {
    readonly imageURLs: {
      readonly normalized: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly internalID: string;
  readonly partner: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly status: string;
  readonly title: string;
  readonly " $fragmentType": "ViewingRoomArtwork_viewingRoomInfo";
};
export type ViewingRoomArtwork_viewingRoomInfo$key = {
  readonly " $data"?: ViewingRoomArtwork_viewingRoomInfo$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomArtwork_viewingRoomInfo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomArtwork_viewingRoomInfo",
  "selections": [
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
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
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
      "alias": "heroImage",
      "args": null,
      "concreteType": "ARImage",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageURLs",
          "kind": "LinkedField",
          "name": "imageURLs",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "normalized",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
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
      "name": "distanceToOpen",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "distanceToClose",
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
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "ViewingRoom",
  "abstractKey": null
};

(node as any).hash = "30e75ea0f2337f01fdde1e4147c17ff2";

export default node;
