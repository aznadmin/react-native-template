/**
 * @generated SignedSource<<0242455f800a61931b24c79046fef4b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfileHeader_me$data = {
  readonly bio: string | null | undefined;
  readonly collectorProfile: {
    readonly confirmedBuyerAt: string | null | undefined;
  };
  readonly counts: {
    readonly followedArtists: number;
    readonly savedArtworks: number;
    readonly savedSearches: number;
  };
  readonly createdAt: string | null | undefined;
  readonly icon: {
    readonly url: string | null | undefined;
  } | null | undefined;
  readonly id: string;
  readonly isIdentityVerified: boolean | null | undefined;
  readonly location: {
    readonly display: string | null | undefined;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly otherRelevantPositions: string | null | undefined;
  readonly profession: string | null | undefined;
  readonly " $fragmentType": "MyProfileHeader_me";
} | null | undefined;
export type MyProfileHeader_me$key = {
  readonly " $data"?: MyProfileHeader_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyProfileHeader_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./MyProfileHeaderMyProfileHeaderFragmentRefetchQuery.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "MyProfileHeader_me",
  "selections": [
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
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MyLocation",
      "kind": "LinkedField",
      "name": "location",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "display",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "otherRelevantPositions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "profession",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "icon",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": "thumbnail"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"thumbnail\")"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isIdentityVerified",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "MeCounts",
        "kind": "LinkedField",
        "name": "counts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "followedArtists",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "savedArtworks",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "savedSearches",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "NONE",
      "path": "counts"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "CollectorProfileType",
        "kind": "LinkedField",
        "name": "collectorProfile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "confirmedBuyerAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "NONE",
      "path": "collectorProfile"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "0d1030f183c78b65fa4a84d3ddebe1d0";

export default node;
