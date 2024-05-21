/**
 * @generated SignedSource<<25e775b47c2a8f692200992cd0e33ff6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkListEmptyState_me$data = {
  readonly artworkList: {
    readonly default: boolean;
    readonly internalID: string;
    readonly name: string;
    readonly shareableWithPartners: boolean;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkListHeader_me">;
  readonly " $fragmentType": "ArtworkListEmptyState_me";
};
export type ArtworkListEmptyState_me$key = {
  readonly " $data"?: ArtworkListEmptyState_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkListEmptyState_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "listID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkListEmptyState_me",
  "selections": [
    {
      "alias": "artworkList",
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "listID"
        }
      ],
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "default",
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
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "shareableWithPartners",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": [
        {
          "kind": "Variable",
          "name": "listID",
          "variableName": "listID"
        }
      ],
      "kind": "FragmentSpread",
      "name": "ArtworkListHeader_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "9d7bdd57301338601b2913664fceaa6b";

export default node;
