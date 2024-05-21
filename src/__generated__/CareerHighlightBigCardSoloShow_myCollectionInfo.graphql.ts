/**
 * @generated SignedSource<<9003cf2501acbbfd23a949e3ce225f7b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtistInsightKind = "ACTIVE_SECONDARY_MARKET" | "ARTSY_VANGUARD_YEAR" | "AWARDS" | "BIENNIAL" | "COLLECTED" | "CRITICALLY_ACCLAIMED" | "CURATORS_PICK_EMERGING" | "GAINING_FOLLOWERS" | "GROUP_SHOW" | "HIGH_AUCTION_RECORD" | "PRIVATE_COLLECTIONS" | "RECENT_CAREER_EVENT" | "RESIDENCIES" | "REVIEWED" | "SOLO_SHOW" | "TRENDING_NOW" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CareerHighlightBigCardSoloShow_myCollectionInfo$data = {
  readonly soloShowInsights: ReadonlyArray<{
    readonly artist: {
      readonly birthday: string | null | undefined;
      readonly deathday: string | null | undefined;
      readonly id: string;
      readonly image: {
        readonly url: string | null | undefined;
      } | null | undefined;
      readonly initials: string | null | undefined;
      readonly name: string | null | undefined;
      readonly nationality: string | null | undefined;
    } | null | undefined;
    readonly entities: ReadonlyArray<string>;
    readonly kind: ArtistInsightKind | null | undefined;
    readonly label: string;
  }>;
  readonly " $fragmentType": "CareerHighlightBigCardSoloShow_myCollectionInfo";
};
export type CareerHighlightBigCardSoloShow_myCollectionInfo$key = {
  readonly " $data"?: CareerHighlightBigCardSoloShow_myCollectionInfo$data;
  readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightBigCardSoloShow_myCollectionInfo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CareerHighlightBigCardSoloShow_myCollectionInfo",
  "selections": [
    {
      "alias": "soloShowInsights",
      "args": [
        {
          "kind": "Literal",
          "name": "kind",
          "value": "SOLO_SHOW"
        }
      ],
      "concreteType": "ArtistInsight",
      "kind": "LinkedField",
      "name": "artistInsights",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Artist",
          "kind": "LinkedField",
          "name": "artist",
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
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "birthday",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "deathday",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "initials",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "nationality",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "kind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "entities",
          "storageKey": null
        }
      ],
      "storageKey": "artistInsights(kind:\"SOLO_SHOW\")"
    }
  ],
  "type": "MyCollectionInfo",
  "abstractKey": null
};

(node as any).hash = "a3e7b9aa62f693201756b5df3895d5c1";

export default node;
