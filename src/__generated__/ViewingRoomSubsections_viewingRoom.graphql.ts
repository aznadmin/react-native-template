/**
 * @generated SignedSource<<dd4dc4fee1bdbf5a1e6590ddfe3155a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomSubsections_viewingRoom$data = {
  readonly subsections: ReadonlyArray<{
    readonly body: string | null | undefined;
    readonly caption: string | null | undefined;
    readonly image: {
      readonly height: number | null | undefined;
      readonly imageURLs: {
        readonly normalized: string | null | undefined;
      } | null | undefined;
      readonly width: number | null | undefined;
    } | null | undefined;
    readonly title: string | null | undefined;
  }>;
  readonly " $fragmentType": "ViewingRoomSubsections_viewingRoom";
};
export type ViewingRoomSubsections_viewingRoom$key = {
  readonly " $data"?: ViewingRoomSubsections_viewingRoom$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomSubsections_viewingRoom">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomSubsections_viewingRoom",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ViewingRoomSubsection",
      "kind": "LinkedField",
      "name": "subsections",
      "plural": true,
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
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "caption",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ARImage",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "width",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            },
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ViewingRoom",
  "abstractKey": null
};

(node as any).hash = "4e54fe628a7263b72de4f5f1f2017e3a";

export default node;
