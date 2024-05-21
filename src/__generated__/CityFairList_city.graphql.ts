/**
 * @generated SignedSource<<740c3dd4af43fa96462a2c4eca67e4bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CityFairList_city$data = {
  readonly fairs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly counts: {
          readonly partners: any | null | undefined;
        } | null | undefined;
        readonly end_at: string | null | undefined;
        readonly exhibition_period: string | null | undefined;
        readonly image: {
          readonly aspect_ratio: number;
          readonly image_url: string | null | undefined;
          readonly url: string | null | undefined;
        } | null | undefined;
        readonly internalID: string;
        readonly location: {
          readonly coordinates: {
            readonly lat: number | null | undefined;
            readonly lng: number | null | undefined;
          } | null | undefined;
        } | null | undefined;
        readonly name: string | null | undefined;
        readonly profile: {
          readonly icon: {
            readonly height: number | null | undefined;
            readonly href: string | null | undefined;
            readonly internalID: string | null | undefined;
            readonly url: string | null | undefined;
            readonly width: number | null | undefined;
          } | null | undefined;
          readonly id: string;
          readonly name: string | null | undefined;
          readonly slug: string;
        } | null | undefined;
        readonly start_at: string | null | undefined;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentType": "CityFairList_city";
};
export type CityFairList_city$key = {
  readonly " $data"?: CityFairList_city$data;
  readonly " $fragmentSpreads": FragmentRefs<"CityFairList_city">;
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
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "fairs"
        ]
      }
    ]
  },
  "name": "CityFairList_city",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "fairs",
      "args": [
        {
          "kind": "Literal",
          "name": "sort",
          "value": "START_AT_ASC"
        },
        {
          "kind": "Literal",
          "name": "status",
          "value": "CURRENT"
        }
      ],
      "concreteType": "FairConnection",
      "kind": "LinkedField",
      "name": "__CityFairList_fairs_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FairEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Fair",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                {
                  "alias": "exhibition_period",
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
                      "name": "partners",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
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
                      "concreteType": "LatLng",
                      "kind": "LinkedField",
                      "name": "coordinates",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "lat",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "lng",
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
                  "args": null,
                  "concreteType": "Image",
                  "kind": "LinkedField",
                  "name": "image",
                  "plural": false,
                  "selections": [
                    {
                      "alias": "image_url",
                      "args": null,
                      "kind": "ScalarField",
                      "name": "imageURL",
                      "storageKey": null
                    },
                    {
                      "alias": "aspect_ratio",
                      "args": null,
                      "kind": "ScalarField",
                      "name": "aspectRatio",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Profile",
                  "kind": "LinkedField",
                  "name": "profile",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Image",
                      "kind": "LinkedField",
                      "name": "icon",
                      "plural": false,
                      "selections": [
                        (v1/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "href",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "height",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "width",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "version",
                              "value": "square140"
                            }
                          ],
                          "kind": "ScalarField",
                          "name": "url",
                          "storageKey": "url(version:\"square140\")"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "id",
                      "storageKey": null
                    },
                    (v0/*: any*/),
                    (v2/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "alias": "start_at",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "startAt",
                  "storageKey": null
                },
                {
                  "alias": "end_at",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endAt",
                  "storageKey": null
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
      "storageKey": "__CityFairList_fairs_connection(sort:\"START_AT_ASC\",status:\"CURRENT\")"
    }
  ],
  "type": "City",
  "abstractKey": null
};
})();

(node as any).hash = "4d534fc0a2d179b15e977afd9315bcae";

export default node;
