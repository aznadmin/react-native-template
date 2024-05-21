/**
 * @generated SignedSource<<b8cdc80fffd785378005a44a320eea89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistAbout_artist$data = {
  readonly articlesConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"Articles_articles">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly counts: {
    readonly articles: number | null | undefined;
    readonly relatedArtists: number | null | undefined;
  } | null | undefined;
  readonly hasArtistInsights: ReadonlyArray<{
    readonly entities: ReadonlyArray<string>;
  }>;
  readonly hasArtistSeriesConnection: {
    readonly totalCount: number;
  } | null | undefined;
  readonly hasArtistShows: {
    readonly totalCount: number | null | undefined;
  } | null | undefined;
  readonly hasBiographyBlurb: {
    readonly text: string | null | undefined;
  } | null | undefined;
  readonly internalID: string;
  readonly related: {
    readonly artistsConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"RelatedArtistsRail_artists">;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly genes: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly " $fragmentSpreads": FragmentRefs<"ArtistAboutRelatedGenes_genes">;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"Articles_artist" | "ArtistAboutShows_artist" | "ArtistCareerHighlights_artist" | "ArtistSeriesMoreSeries_artist" | "Biography_artist" | "RelatedArtistsRailCell_artist">;
  readonly " $fragmentType": "ArtistAbout_artist";
};
export type ArtistAbout_artist$key = {
  readonly " $data"?: ArtistAbout_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistAbout_artist">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "first",
  "value": 1
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistAbout_artist",
  "selections": [
    {
      "alias": "hasArtistSeriesConnection",
      "args": [
        (v0/*: any*/)
      ],
      "concreteType": "ArtistSeriesConnection",
      "kind": "LinkedField",
      "name": "artistSeriesConnection",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "artistSeriesConnection(first:1)"
    },
    {
      "alias": "hasBiographyBlurb",
      "args": [
        {
          "kind": "Literal",
          "name": "format",
          "value": "PLAIN"
        },
        {
          "kind": "Literal",
          "name": "partnerBio",
          "value": false
        }
      ],
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
      "storageKey": "biographyBlurb(format:\"PLAIN\",partnerBio:false)"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": "hasArtistInsights",
      "args": null,
      "concreteType": "ArtistInsight",
      "kind": "LinkedField",
      "name": "insights",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "entities",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "hasArtistShows",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "sort",
          "value": "END_AT_ASC"
        },
        {
          "kind": "Literal",
          "name": "status",
          "value": "running"
        }
      ],
      "concreteType": "ShowConnection",
      "kind": "LinkedField",
      "name": "showsConnection",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "showsConnection(first:1,sort:\"END_AT_ASC\",status:\"running\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Biography_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistSeriesMoreSeries_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Articles_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistAboutShows_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistCareerHighlights_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RelatedArtistsRailCell_artist"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "articles",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "relatedArtists",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistRelatedData",
      "kind": "LinkedField",
      "name": "related",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 12
            }
          ],
          "concreteType": "ArtistConnection",
          "kind": "LinkedField",
          "name": "artistsConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ArtistEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Artist",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "RelatedArtistsRail_artists"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "artistsConnection(first:12)"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "GeneConnection",
          "kind": "LinkedField",
          "name": "genes",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "GeneEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Gene",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ArtistAboutRelatedGenes_genes"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
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
          "value": 5
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
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Article",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Articles_articles"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "articlesConnection(first:5)"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
})();

(node as any).hash = "d364977e66a4d3b4493220811e7bbcef";

export default node;
