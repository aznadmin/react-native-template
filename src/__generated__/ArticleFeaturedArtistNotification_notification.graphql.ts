/**
 * @generated SignedSource<<8c4379a0577bd0bb22780a73a1465cd4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleFeaturedArtistNotification_notification$data = {
  readonly item: {
    readonly article?: {
      readonly byline: string | null | undefined;
      readonly href: string | null | undefined;
      readonly internalID: string;
      readonly publishedAt: string | null | undefined;
      readonly slug: string | null | undefined;
      readonly thumbnailImage: {
        readonly url: string | null | undefined;
      } | null | undefined;
      readonly thumbnailTitle: string | null | undefined;
      readonly vertical: string | null | undefined;
    } | null | undefined;
    readonly artistsConnection?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly href: string | null | undefined;
          readonly id: string;
          readonly internalID: string;
          readonly isFollowed: boolean | null | undefined;
          readonly name: string | null | undefined;
          readonly slug: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly message: string;
  readonly " $fragmentType": "ArticleFeaturedArtistNotification_notification";
};
export type ArticleFeaturedArtistNotification_notification$key = {
  readonly " $data"?: ArticleFeaturedArtistNotification_notification$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleFeaturedArtistNotification_notification">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleFeaturedArtistNotification_notification",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Article",
              "kind": "LinkedField",
              "name": "article",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "publishedAt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Image",
                  "kind": "LinkedField",
                  "name": "thumbnailImage",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "version",
                          "value": "large"
                        }
                      ],
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": "url(version:\"large\")"
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "thumbnailTitle",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "vertical",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "byline",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "first",
                  "value": 10
                }
              ],
              "concreteType": "ArtistConnection",
              "kind": "LinkedField",
              "name": "artistsConnection",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ArtistEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Artist",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "id",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "name",
                          "storageKey": null
                        },
                        (v1/*: any*/),
                        (v0/*: any*/),
                        (v2/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "isFollowed",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": "artistsConnection(first:10)"
            }
          ],
          "type": "ArticleFeaturedArtistNotificationItem",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Notification",
  "abstractKey": null
};
})();

(node as any).hash = "3446043cf8f1b562cd6b9c40aabcf655";

export default node;
