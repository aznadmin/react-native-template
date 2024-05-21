/**
 * @generated SignedSource<<29430539c06373bb393695b903510f84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Visibility = "LISTED" | "UNLISTED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type Artwork_artworkAboveTheFold$data = {
  readonly availability: string | null | undefined;
  readonly editionSets: ReadonlyArray<{
    readonly internalID: string;
  } | null | undefined> | null | undefined;
  readonly internalID: string;
  readonly isAcquireable: boolean | null | undefined;
  readonly isBiddable: boolean | null | undefined;
  readonly isInAuction: boolean | null | undefined;
  readonly isInquireable: boolean | null | undefined;
  readonly isOfferable: boolean | null | undefined;
  readonly isPurchasable: boolean | null | undefined;
  readonly isUnlisted: boolean;
  readonly sale: {
    readonly internalID: string;
    readonly isClosed: boolean | null | undefined;
    readonly isPreview: boolean | null | undefined;
    readonly liveStartAt: string | null | undefined;
  } | null | undefined;
  readonly saleArtwork: {
    readonly internalID: string;
  } | null | undefined;
  readonly slug: string;
  readonly visibilityLevel: Visibility | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkAuctionCreateAlertHeader_artwork" | "ArtworkDetails_artwork" | "ArtworkEditionSetInformation_artwork" | "ArtworkHeader_artwork" | "ArtworkLotDetails_artwork" | "ArtworkPartnerOfferNote_artwork" | "ArtworkPrice_artwork" | "ArtworkScreenHeader_artwork" | "ArtworkStickyBottomContent_artwork">;
  readonly " $fragmentType": "Artwork_artworkAboveTheFold";
};
export type Artwork_artworkAboveTheFold$key = {
  readonly " $data"?: Artwork_artworkAboveTheFold$data;
  readonly " $fragmentSpreads": FragmentRefs<"Artwork_artworkAboveTheFold">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artwork_artworkAboveTheFold",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkAuctionCreateAlertHeader_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkScreenHeader_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkHeader_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkLotDetails_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkStickyBottomContent_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkDetails_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkEditionSetInformation_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkPartnerOfferNote_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkPrice_artwork"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isAcquireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isOfferable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isBiddable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInquireable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isInAuction",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPurchasable",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isUnlisted",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availability",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "visibilityLevel",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isClosed",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isPreview",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "liveStartAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SaleArtwork",
      "kind": "LinkedField",
      "name": "saleArtwork",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EditionSet",
      "kind": "LinkedField",
      "name": "editionSets",
      "plural": true,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "5cb3c5c29fd480efbc67903080f93901";

export default node;
