/**
 * @generated SignedSource<<825259d4af6d4bf544a761c2b9b327d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GalleriesForYouScreen_partnersConnection$data = {
  readonly partnersConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"PartnerListItem_partner">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "GalleriesForYouScreen_partnersConnection";
};
export type GalleriesForYouScreen_partnersConnection$key = {
  readonly " $data"?: GalleriesForYouScreen_partnersConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"GalleriesForYouScreen_partnersConnection">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "partnersConnection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includePartnersNearIpBasedLocation"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includePartnersWithFollowedArtists"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "near"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./GalleriesForYouRefetchQuery.graphql')
    }
  },
  "name": "GalleriesForYouScreen_partnersConnection",
  "selections": [
    {
      "alias": "partnersConnection",
      "args": [
        {
          "kind": "Literal",
          "name": "defaultProfilePublic",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "eligibleForListing",
          "value": true
        },
        {
          "kind": "Literal",
          "name": "excludeFollowedPartners",
          "value": true
        },
        {
          "kind": "Variable",
          "name": "includePartnersNearIpBasedLocation",
          "variableName": "includePartnersNearIpBasedLocation"
        },
        {
          "kind": "Variable",
          "name": "includePartnersWithFollowedArtists",
          "variableName": "includePartnersWithFollowedArtists"
        },
        {
          "kind": "Literal",
          "name": "maxDistance",
          "value": 6371
        },
        {
          "kind": "Variable",
          "name": "near",
          "variableName": "near"
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "DISTANCE"
        },
        {
          "kind": "Literal",
          "name": "type",
          "value": "GALLERY"
        }
      ],
      "concreteType": "PartnerConnection",
      "kind": "LinkedField",
      "name": "__GalleriesForYouScreen_partnersConnection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PartnerEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Partner",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "internalID",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "PartnerListItem_partner"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "a0ca1ea451fd2c294d4135c7df0ee21e";

export default node;
