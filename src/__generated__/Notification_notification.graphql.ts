/**
 * @generated SignedSource<<143ce115cff12150b76ef7140a21de28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Notification_notification$data = {
  readonly artists: string | null | undefined;
  readonly artworks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly artists: ReadonlyArray<{
          readonly href: string | null | undefined;
        } | null | undefined> | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"GenericGrid_artworks">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly image: {
    readonly resized: {
      readonly url: string;
    } | null | undefined;
  } | null | undefined;
  readonly summary: string | null | undefined;
  readonly " $fragmentType": "Notification_notification";
};
export type Notification_notification$key = {
  readonly " $data"?: Notification_notification$data;
  readonly " $fragmentSpreads": FragmentRefs<"Notification_notification">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Notification_notification",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artists",
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
          "concreteType": "ArtworkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "shallow",
                      "value": true
                    }
                  ],
                  "concreteType": "Artist",
                  "kind": "LinkedField",
                  "name": "artists",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "href",
                      "storageKey": null
                    }
                  ],
                  "storageKey": "artists(shallow:true)"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "GenericGrid_artworks"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "artworksConnection(first:10)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 80
            },
            {
              "kind": "Literal",
              "name": "width",
              "value": 80
            }
          ],
          "concreteType": "ResizedImageUrl",
          "kind": "LinkedField",
          "name": "resized",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            }
          ],
          "storageKey": "resized(height:80,width:80)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FollowedArtistsArtworksGroup",
  "abstractKey": null
};

(node as any).hash = "0de17c33986f81a634195f7d3e29d97c";

export default node;
