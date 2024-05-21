/**
 * @generated SignedSource<<94cb6ffdb70930898ae8eb3e8b078815>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtistInsightKind = "ACTIVE_SECONDARY_MARKET" | "ARTSY_VANGUARD_YEAR" | "AWARDS" | "BIENNIAL" | "COLLECTED" | "CRITICALLY_ACCLAIMED" | "CURATORS_PICK_EMERGING" | "GAINING_FOLLOWERS" | "GROUP_SHOW" | "HIGH_AUCTION_RECORD" | "PRIVATE_COLLECTIONS" | "RECENT_CAREER_EVENT" | "RESIDENCIES" | "REVIEWED" | "SOLO_SHOW" | "TRENDING_NOW" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CareerHighlightBigCardBiennial_myCollectionInfo$data = {
  readonly biennialInsights: ReadonlyArray<{
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
  readonly " $fragmentType": "CareerHighlightBigCardBiennial_myCollectionInfo";
};
export type CareerHighlightBigCardBiennial_myCollectionInfo$key = {
  readonly " $data"?: CareerHighlightBigCardBiennial_myCollectionInfo$data;
  readonly " $fragmentSpreads": FragmentRefs<"CareerHighlightBigCardBiennial_myCollectionInfo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CareerHighlightBigCardBiennial_myCollectionInfo",
  "selections": [
    {
      "alias": "biennialInsights",
      "args": [
        {
          "kind": "Literal",
          "name": "kind",
          "value": "BIENNIAL"
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
      "storageKey": "artistInsights(kind:\"BIENNIAL\")"
    }
  ],
  "type": "MyCollectionInfo",
  "abstractKey": null
};

(node as any).hash = "2e4879e73ab397264017822821cbd421";

export default node;
