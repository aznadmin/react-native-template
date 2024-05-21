/**
 * @generated SignedSource<<2c740cf0497c9e09808780b15b6a41a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CitySectionList_city$data = {
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
    readonly pageInfo: {
      readonly endCursor: string | null | undefined;
      readonly hasNextPage: boolean;
    };
  } | null | undefined;
  readonly " $fragmentType": "CitySectionList_city";
};
export type CitySectionList_city$key = {
  readonly " $data"?: CitySectionList_city$data;
  readonly " $fragmentSpreads": FragmentRefs<"CitySectionList_city">;
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
  "name": "type",
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
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "dayThreshold"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "partnerType"
    },
    {
      "defaultValue": "PARTNER_ASC",
      "kind": "LocalArgument",
      "name": "sort"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "status"
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
          "shows"
        ]
      }
    ]
  },
  "name": "CitySectionList_city",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "shows",
      "args": [
        {
          "kind": "Variable",
          "name": "dayThreshold",
          "variableName": "dayThreshold"
        },
        {
          "kind": "Literal",
          "name": "includeStubShows",
          "value": true
        },
        {
          "kind": "Variable",
          "name": "partnerType",
          "variableName": "partnerType"
        },
        {
          "kind": "Variable",
          "name": "sort",
          "variableName": "sort"
        },
        {
          "kind": "Variable",
          "name": "status",
          "variableName": "status"
        }
      ],
      "concreteType": "ShowConnection",
      "kind": "LinkedField",
      "name": "__CitySectionList_shows_connection",
      "plural": false,
      "selections": [
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
        },
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
                  "name": "slug",
                  "storageKey": null
                },
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
                  "name": "isStubShow",
                  "storageKey": null
                },
                {
                  "alias": "is_followed",
                  "args": null,
                  "kind": "ScalarField",
                  "name": "isFollowed",
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
                  "name": "status",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "href",
                  "storageKey": null
                },
                (v1/*: any*/),
                (v0/*: any*/),
                {
                  "alias": "cover_image",
                  "args": null,
                  "concreteType": "Image",
                  "kind": "LinkedField",
                  "name": "coverImage",
                  "plural": false,
                  "selections": [
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
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "partner",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v0/*: any*/),
                        (v1/*: any*/),
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "City",
  "abstractKey": null
};
})();

(node as any).hash = "cd214fe6da1406073edc632f82a5894c";

export default node;
