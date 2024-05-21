/**
 * @generated SignedSource<<5027b7dd12bc3eebd7a456a3b7516557>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkListHeader_me$data = {
  readonly artworkList: {
    readonly default: boolean;
    readonly internalID: string;
    readonly name: string;
    readonly shareableWithPartners: boolean;
  } | null | undefined;
  readonly " $fragmentType": "ArtworkListHeader_me";
};
export type ArtworkListHeader_me$key = {
  readonly " $data"?: ArtworkListHeader_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkListHeader_me">;
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
  "name": "ArtworkListHeader_me",
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
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "fa3d347c1eaccfb58a01302b44a80e13";

export default node;
