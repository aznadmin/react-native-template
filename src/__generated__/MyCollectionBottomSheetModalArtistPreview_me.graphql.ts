/**
 * @generated SignedSource<<fc0a592bebfaccf277f86292c0e55a60>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionBottomSheetModalArtistPreview_me$data = {
  readonly myCollectionConnection: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly userInterest: {
    readonly id: string;
    readonly private: boolean;
  } | null | undefined;
  readonly " $fragmentType": "MyCollectionBottomSheetModalArtistPreview_me";
};
export type MyCollectionBottomSheetModalArtistPreview_me$key = {
  readonly " $data"?: MyCollectionBottomSheetModalArtistPreview_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionBottomSheetModalArtistPreview_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "artistID"
    },
    {
      "kind": "RootArgument",
      "name": "interestId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionBottomSheetModalArtistPreview_me",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "items": [
            {
              "kind": "Variable",
              "name": "artistIDs.0",
              "variableName": "artistID"
            }
          ],
          "kind": "ListValue",
          "name": "artistIDs"
        }
      ],
      "concreteType": "MyCollectionConnection",
      "kind": "LinkedField",
      "name": "myCollectionConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "interestId"
        }
      ],
      "concreteType": "UserInterest",
      "kind": "LinkedField",
      "name": "userInterest",
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
          "name": "private",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "1418946db3d19396494741a099af569b";

export default node;
