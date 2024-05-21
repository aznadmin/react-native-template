/**
 * @generated SignedSource<<3bfa0acd826cd4441245bcf60f940f6c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtworkConsignmentSubmissionState = "APPROVED" | "CLOSED" | "DRAFT" | "HOLD" | "PUBLISHED" | "REJECTED" | "SUBMITTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkHeader_artwork$data = {
  readonly artist: {
    readonly href: string | null | undefined;
    readonly isPersonalArtist: boolean | null | undefined;
  } | null | undefined;
  readonly artistNames: string | null | undefined;
  readonly consignmentSubmission: {
    readonly state: ArtworkConsignmentSubmissionState;
  } | null | undefined;
  readonly date: string | null | undefined;
  readonly figures: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ImageCarousel_figures">;
  }>;
  readonly internalID: string;
  readonly slug: string;
  readonly submissionId: string | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkSubmissionStatus_submissionState">;
  readonly " $fragmentType": "MyCollectionArtworkHeader_artwork";
};
export type MyCollectionArtworkHeader_artwork$key = {
  readonly " $data"?: MyCollectionArtworkHeader_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkHeader_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkHeader_artwork",
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
          "name": "href",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isPersonalArtist",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "artistNames",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "includeAll",
          "value": true
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "figures",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageCarousel_figures"
        }
      ],
      "storageKey": "figures(includeAll:true)"
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
      "concreteType": "ArtworkConsignmentSubmission",
      "kind": "LinkedField",
      "name": "consignmentSubmission",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "state",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "submissionId",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkSubmissionStatus_submissionState"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "70b9d61c9a477f3d1844a003aa4bacc6";

export default node;
