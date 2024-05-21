/**
 * @generated SignedSource<<391c96b845cc6bdb1c666d74f23fa8a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkModuleRail_rail$data = {
  readonly context: {
    readonly __typename: "HomePageRelatedArtistArtworkModule";
    readonly artist?: {
      readonly href: string | null | undefined;
      readonly internalID: string;
      readonly slug: string;
    } | null | undefined;
    readonly basedOn?: {
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly href?: string | null | undefined;
  } | null | undefined;
  readonly key: string | null | undefined;
  readonly results: ReadonlyArray<{
    readonly slug: string;
    readonly " $fragmentSpreads": FragmentRefs<"LargeArtworkRail_artworks">;
  } | null | undefined> | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "ArtworkModuleRail_rail";
};
export type ArtworkModuleRail_rail$key = {
  readonly " $data"?: ArtworkModuleRail_rail$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkModuleRail_rail">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v2 = [
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkModuleRail_rail",
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
      "kind": "ScalarField",
      "name": "key",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artwork",
      "kind": "LinkedField",
      "name": "results",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LargeArtworkRail_artworks"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "context",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "artist",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                },
                (v1/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "basedOn",
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
            }
          ],
          "type": "HomePageRelatedArtistArtworkModule",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "artist",
              "plural": false,
              "selections": (v2/*: any*/),
              "storageKey": null
            }
          ],
          "type": "HomePageFollowedArtistArtworkModule",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v2/*: any*/),
          "type": "Fair",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v2/*: any*/),
          "type": "Gene",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v2/*: any*/),
          "type": "Sale",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HomePageArtworkModule",
  "abstractKey": null
};
})();

(node as any).hash = "0257da6cc822c15fd8840a2874759f93";

export default node;
