/**
 * @generated SignedSource<<e079f3dd372e760b7e64bf77d19fac41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Artwork_artworkBelowTheFold$data = {
  readonly additionalInformation: string | null | undefined;
  readonly artist: {
    readonly artistSeriesConnection: {
      readonly totalCount: number;
    } | null | undefined;
    readonly biographyBlurb: {
      readonly text: string | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesMoreSeries_artist">;
  } | null | undefined;
  readonly artistSeriesConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly filterArtworksConnection: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly id: string;
            } | null | undefined;
          } | null | undefined> | null | undefined;
        } | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly artists: ReadonlyArray<{
    readonly isConsignable: boolean | null | undefined;
  } | null | undefined> | null | undefined;
  readonly context: {
    readonly __typename: "Sale";
    readonly isAuction: boolean | null | undefined;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  } | null | undefined;
  readonly contextGrids: ReadonlyArray<{
    readonly artworks: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined> | null | undefined;
  readonly description: string | null | undefined;
  readonly exhibitionHistory: string | null | undefined;
  readonly isEligibleForArtsyGuarantee: boolean;
  readonly isForSale: boolean | null | undefined;
  readonly literature: string | null | undefined;
  readonly partner: {
    readonly isInquireable: boolean;
    readonly type: string | null | undefined;
  } | null | undefined;
  readonly provenance: string | null | undefined;
  readonly sale: {
    readonly extendedBiddingIntervalMinutes: number | null | undefined;
    readonly isBenefit: boolean | null | undefined;
    readonly isGalleryAuction: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"AboutArtist_artwork" | "AboutWork_artwork" | "ArtworkConsignments_artwork" | "ArtworkHistory_artwork" | "ArtworksInSeriesRail_artwork" | "ContextCard_artwork" | "OtherWorks_artwork" | "PartnerCard_artwork" | "PrivateArtworkExclusiveAccess_artwork" | "PrivateArtworkMetadata_artwork" | "ShippingAndTaxes_artwork">;
  readonly " $fragmentType": "Artwork_artworkBelowTheFold";
};
export type Artwork_artworkBelowTheFold$key = {
  readonly " $data"?: Artwork_artworkBelowTheFold$data;
  readonly " $fragmentSpreads": FragmentRefs<"Artwork_artworkBelowTheFold">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "node",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
  "name": "Artwork_artworkBelowTheFold",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PrivateArtworkExclusiveAccess_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PartnerCard_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AboutWork_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OtherWorks_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AboutArtist_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContextCard_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkHistory_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworksInSeriesRail_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShippingAndTaxes_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkConsignments_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PrivateArtworkMetadata_artwork"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "additionalInformation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "provenance",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "exhibitionHistory",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "literature",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isForSale",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isInquireable",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
          "concreteType": "ArtistBlurb",
          "kind": "LinkedField",
          "name": "biographyBlurb",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 4
            }
          ],
          "concreteType": "ArtistSeriesConnection",
          "kind": "LinkedField",
          "name": "artistSeriesConnection",
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
          "storageKey": "artistSeriesConnection(first:4)"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArtistSeriesMoreSeries_artist"
        }
      ],
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isBenefit",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isGalleryAuction",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "extendedBiddingIntervalMinutes",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "context",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isAuction",
              "storageKey": null
            }
          ],
          "type": "Sale",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contextGrids",
      "plural": true,
      "selections": [
        {
          "alias": "artworks",
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 6
            }
          ],
          "concreteType": "ArtworkConnection",
          "kind": "LinkedField",
          "name": "artworksConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ArtworkEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": (v0/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": "artworksConnection(first:6)"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "ArtistSeriesConnection",
      "kind": "LinkedField",
      "name": "artistSeriesConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtistSeriesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ArtistSeries",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
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
                        "sort": "-decayed_merch"
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
                  "storageKey": "filterArtworksConnection(first:20,input:{\"sort\":\"-decayed_merch\"})"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "artistSeriesConnection(first:1)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isConsignable",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isEligibleForArtsyGuarantee",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};
})();

(node as any).hash = "d0465cfa633708adde0717fe915144f4";

export default node;
