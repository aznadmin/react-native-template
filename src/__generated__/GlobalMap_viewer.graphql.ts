/**
 * @generated SignedSource<<59be0d4462d4fb363f115e29e7d2ee5c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GlobalMap_viewer$data = {
  readonly city: {
    readonly coordinates: {
      readonly lat: number | null | undefined;
      readonly lng: number | null | undefined;
    } | null | undefined;
    readonly fairs: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly counts: {
            readonly partners: any | null | undefined;
          } | null | undefined;
          readonly end_at: string | null | undefined;
          readonly exhibition_period: string | null | undefined;
          readonly id: string;
          readonly image: {
            readonly aspect_ratio: number;
            readonly image_url: string | null | undefined;
            readonly url: string | null | undefined;
          } | null | undefined;
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
          readonly slug: string;
          readonly start_at: string | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly name: string;
    readonly shows: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly cover_image: {
            readonly url: string | null | undefined;
          } | null | undefined;
          readonly end_at: string | null | undefined;
          readonly exhibition_period: string | null | undefined;
          readonly href: string | null | undefined;
          readonly id: string;
          readonly internalID: string;
          readonly isStubShow: boolean | null | undefined;
          readonly is_followed: boolean | null | undefined;
          readonly location: {
            readonly coordinates: {
              readonly lat: number | null | undefined;
              readonly lng: number | null | undefined;
            } | null | undefined;
          } | null | undefined;
          readonly name: string | null | undefined;
          readonly partner: {
            readonly name?: string | null | undefined;
            readonly profile?: {
              readonly image: {
                readonly url: string | null | undefined;
              } | null | undefined;
            } | null | undefined;
            readonly type?: string | null | undefined;
          } | null | undefined;
          readonly slug: string;
          readonly start_at: string | null | undefined;
          readonly status: string | null | undefined;
          readonly type: string | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly slug: string;
    readonly upcomingShows: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly cover_image: {
            readonly url: string | null | undefined;
          } | null | undefined;
          readonly end_at: string | null | undefined;
          readonly exhibition_period: string | null | undefined;
          readonly href: string | null | undefined;
          readonly id: string;
          readonly internalID: string;
          readonly isStubShow: boolean | null | undefined;
          readonly is_followed: boolean | null | undefined;
          readonly location: {
            readonly coordinates: {
              readonly lat: number | null | undefined;
              readonly lng: number | null | undefined;
            } | null | undefined;
          } | null | undefined;
          readonly name: string | null | undefined;
          readonly partner: {
            readonly name?: string | null | undefined;
            readonly profile?: {
              readonly image: {
                readonly url: string | null | undefined;
              } | null | undefined;
            } | null | undefined;
            readonly type?: string | null | undefined;
          } | null | undefined;
          readonly slug: string;
          readonly start_at: string | null | undefined;
          readonly status: string | null | undefined;
          readonly type: string | null | undefined;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "GlobalMap_viewer";
};
export type GlobalMap_viewer$key = {
  readonly " $data"?: GlobalMap_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"GlobalMap_viewer">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
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
},
v3 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "maxInt"
},
v4 = {
  "kind": "Literal",
  "name": "includeStubShows",
  "value": true
},
v5 = {
  "kind": "Literal",
  "name": "sort",
  "value": "START_AT_ASC"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v9 = {
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
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "Location",
  "kind": "LinkedField",
  "name": "location",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v13 = {
  "alias": "start_at",
  "args": null,
  "kind": "ScalarField",
  "name": "startAt",
  "storageKey": null
},
v14 = {
  "alias": "end_at",
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v15 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ShowEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isStubShow",
            "storageKey": null
          },
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          (v8/*: any*/),
          {
            "alias": "is_followed",
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowed",
            "storageKey": null
          },
          (v9/*: any*/),
          {
            "alias": "cover_image",
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "coverImage",
            "plural": false,
            "selections": [
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v0/*: any*/),
                  (v12/*: any*/),
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
                        "name": "image",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "square"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"square\")"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Partner",
                "abstractKey": null
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
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "citySlug"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "maxInt"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "GlobalMap_viewer",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "citySlug"
        }
      ],
      "concreteType": "City",
      "kind": "LinkedField",
      "name": "city",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": "upcomingShows",
          "args": [
            {
              "kind": "Literal",
              "name": "dayThreshold",
              "value": 14
            },
            (v3/*: any*/),
            (v4/*: any*/),
            (v5/*: any*/),
            {
              "kind": "Literal",
              "name": "status",
              "value": "UPCOMING"
            }
          ],
          "concreteType": "ShowConnection",
          "kind": "LinkedField",
          "name": "showsConnection",
          "plural": false,
          "selections": (v15/*: any*/),
          "storageKey": null
        },
        {
          "alias": "shows",
          "args": [
            (v3/*: any*/),
            (v4/*: any*/),
            {
              "kind": "Literal",
              "name": "sort",
              "value": "PARTNER_ASC"
            },
            {
              "kind": "Literal",
              "name": "status",
              "value": "RUNNING"
            }
          ],
          "concreteType": "ShowConnection",
          "kind": "LinkedField",
          "name": "showsConnection",
          "plural": false,
          "selections": (v15/*: any*/),
          "storageKey": null
        },
        {
          "alias": "fairs",
          "args": [
            (v3/*: any*/),
            (v5/*: any*/),
            {
              "kind": "Literal",
              "name": "status",
              "value": "CURRENT"
            }
          ],
          "concreteType": "FairConnection",
          "kind": "LinkedField",
          "name": "fairsConnection",
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
                    (v7/*: any*/),
                    (v1/*: any*/),
                    (v0/*: any*/),
                    (v9/*: any*/),
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
                    (v11/*: any*/),
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
                        (v10/*: any*/)
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
                            (v6/*: any*/),
                            (v8/*: any*/),
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
                        (v7/*: any*/),
                        (v1/*: any*/),
                        (v0/*: any*/)
                      ],
                      "storageKey": null
                    },
                    (v13/*: any*/),
                    (v14/*: any*/)
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "2f2a9c2b6339f6681c3a6202d92982d0";

export default node;
