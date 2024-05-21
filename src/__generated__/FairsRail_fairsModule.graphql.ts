/**
 * @generated SignedSource<<648a9326d933e357a1cffa7888bd44b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairsRail_fairsModule$data = {
  readonly results: ReadonlyArray<{
    readonly exhibitionPeriod: string | null | undefined;
    readonly followedArtistArtworks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly image: {
            readonly url: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly id: string;
    readonly image: {
      readonly url: string | null | undefined;
    } | null | undefined;
    readonly internalID: string;
    readonly location: {
      readonly city: string | null | undefined;
      readonly country: string | null | undefined;
    } | null | undefined;
    readonly name: string | null | undefined;
    readonly otherArtworks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly image: {
            readonly url: string | null | undefined;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly profile: {
      readonly slug: string;
    } | null | undefined;
    readonly slug: string;
  } | null | undefined>;
  readonly " $fragmentType": "FairsRail_fairsModule";
};
export type FairsRail_fairsModule$key = {
  readonly " $data"?: FairsRail_fairsModule$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairsRail_fairsModule">;
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
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
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
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 2
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FilterArtworksEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairsRail_fairsModule",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Fair",
      "kind": "LinkedField",
      "name": "results",
      "plural": true,
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
          "name": "internalID",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Profile",
          "kind": "LinkedField",
          "name": "profile",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
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
          "args": [
            {
              "kind": "Literal",
              "name": "format",
              "value": "SHORT"
            }
          ],
          "kind": "ScalarField",
          "name": "exhibitionPeriod",
          "storageKey": "exhibitionPeriod(format:\"SHORT\")"
        },
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "city",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "country",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": "followedArtistArtworks",
          "args": [
            (v2/*: any*/),
            {
              "kind": "Literal",
              "name": "input",
              "value": {
                "includeArtworksByFollowedArtists": true
              }
            }
          ],
          "concreteType": "FilterArtworksConnection",
          "kind": "LinkedField",
          "name": "filterArtworksConnection",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": "filterArtworksConnection(first:2,input:{\"includeArtworksByFollowedArtists\":true})"
        },
        {
          "alias": "otherArtworks",
          "args": [
            (v2/*: any*/)
          ],
          "concreteType": "FilterArtworksConnection",
          "kind": "LinkedField",
          "name": "filterArtworksConnection",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": "filterArtworksConnection(first:2)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HomePageFairsModule",
  "abstractKey": null
};
})();

(node as any).hash = "79f11152bc5d621a53349cf1388faf5b";

export default node;
