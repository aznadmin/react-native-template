/**
 * @generated SignedSource<<18effa0da54febd7703dc7947123e292>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Fair_fair$data = {
  readonly articles: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "ArticleEdge";
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly counts: {
    readonly artworks: any | null | undefined;
    readonly partnerShows: any | null | undefined;
  } | null | undefined;
  readonly followedArtistArtworks: {
    readonly edges: ReadonlyArray<{
      readonly __typename: "FilterArtworksEdge";
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly internalID: string;
  readonly isActive: boolean | null | undefined;
  readonly marketingCollections: ReadonlyArray<{
    readonly __typename: "MarketingCollection";
  } | null | undefined>;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"FairArtworks_fair" | "FairCollections_fair" | "FairEditorial_fair" | "FairEmptyState_fair" | "FairExhibitors_fair" | "FairFollowedArtistsRail_fair" | "FairHeader_fair">;
  readonly " $fragmentType": "Fair_fair";
};
export type Fair_fair$key = {
  readonly " $data"?: Fair_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"Fair_fair">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Fair_fair",
  "selections": [
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
      "name": "isActive",
      "storageKey": null
    },
    {
      "alias": "articles",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 5
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "PUBLISHED_AT_DESC"
        }
      ],
      "concreteType": "ArticleConnection",
      "kind": "LinkedField",
      "name": "articlesConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArticleEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": "articlesConnection(first:5,sort:\"PUBLISHED_AT_DESC\")"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": 5
        }
      ],
      "concreteType": "MarketingCollection",
      "kind": "LinkedField",
      "name": "marketingCollections",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": "marketingCollections(size:5)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FairCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artworks",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "partnerShows",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "followedArtistArtworks",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 20
        },
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
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FilterArtworksEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": "filterArtworksConnection(first:20,input:{\"includeArtworksByFollowedArtists\":true})"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FairHeader_fair"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FairEmptyState_fair"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FairEditorial_fair"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FairCollections_fair"
    },
    {
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "sort": "-decayed_merch"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "FairArtworks_fair"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FairExhibitors_fair"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FairFollowedArtistsRail_fair"
    }
  ],
  "type": "Fair",
  "abstractKey": null
};
})();

(node as any).hash = "aa41cce0bb52aaac081841b981c5dd3d";

export default node;
