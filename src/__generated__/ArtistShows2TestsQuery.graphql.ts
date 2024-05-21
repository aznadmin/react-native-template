/**
 * @generated SignedSource<<960bb1ee1e71bd30fa9448cc781ffa9f>>
 * @relayHash c6117214eadb07a32fcdf95a92ef9be0
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID c6117214eadb07a32fcdf95a92ef9be0

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistShows2TestsQuery$variables = {
  artistID: string;
};
export type ArtistShows2TestsQuery$data = {
  readonly artist: {
    readonly slug: string;
    readonly " $fragmentSpreads": FragmentRefs<"ArtistShows2_artist">;
  } | null | undefined;
};
export type ArtistShows2TestsQuery = {
  response: ArtistShows2TestsQuery$data;
  variables: ArtistShows2TestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "status",
    "value": "closed"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistShows2TestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistShows2_artist"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtistShows2TestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "pastShows",
            "args": (v4/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsConnection",
            "plural": false,
            "selections": [
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
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "internalID",
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "href",
                        "storageKey": null
                      },
                      {
                        "alias": "is_fair_booth",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFairBooth",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "coverImage",
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "blurhash",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "kind",
                        "storageKey": null
                      },
                      (v3/*: any*/),
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
                        "alias": "status_update",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "statusUpdate",
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
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/),
                              (v5/*: any*/)
                            ],
                            "type": "ExternalPartner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
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
                            "kind": "ScalarField",
                            "name": "city",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
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
            "storageKey": "showsConnection(first:10,status:\"closed\")"
          },
          {
            "alias": "pastShows",
            "args": (v4/*: any*/),
            "filters": [
              "status"
            ],
            "handle": "connection",
            "key": "ArtistShows2_pastShows",
            "kind": "LinkedHandle",
            "name": "showsConnection"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "c6117214eadb07a32fcdf95a92ef9be0",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artist": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artist"
        },
        "artist.id": (v7/*: any*/),
        "artist.name": (v8/*: any*/),
        "artist.pastShows": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ShowConnection"
        },
        "artist.pastShows.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ShowEdge"
        },
        "artist.pastShows.edges.cursor": (v9/*: any*/),
        "artist.pastShows.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Show"
        },
        "artist.pastShows.edges.node.__typename": (v9/*: any*/),
        "artist.pastShows.edges.node.coverImage": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "artist.pastShows.edges.node.coverImage.blurhash": (v8/*: any*/),
        "artist.pastShows.edges.node.coverImage.url": (v8/*: any*/),
        "artist.pastShows.edges.node.exhibition_period": (v8/*: any*/),
        "artist.pastShows.edges.node.href": (v8/*: any*/),
        "artist.pastShows.edges.node.id": (v7/*: any*/),
        "artist.pastShows.edges.node.internalID": (v7/*: any*/),
        "artist.pastShows.edges.node.is_fair_booth": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "artist.pastShows.edges.node.kind": (v8/*: any*/),
        "artist.pastShows.edges.node.location": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Location"
        },
        "artist.pastShows.edges.node.location.city": (v8/*: any*/),
        "artist.pastShows.edges.node.location.id": (v7/*: any*/),
        "artist.pastShows.edges.node.name": (v8/*: any*/),
        "artist.pastShows.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "PartnerTypes"
        },
        "artist.pastShows.edges.node.partner.__isNode": (v9/*: any*/),
        "artist.pastShows.edges.node.partner.__typename": (v9/*: any*/),
        "artist.pastShows.edges.node.partner.id": (v7/*: any*/),
        "artist.pastShows.edges.node.partner.name": (v8/*: any*/),
        "artist.pastShows.edges.node.slug": (v7/*: any*/),
        "artist.pastShows.edges.node.status": (v8/*: any*/),
        "artist.pastShows.edges.node.status_update": (v8/*: any*/),
        "artist.pastShows.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "artist.pastShows.pageInfo.endCursor": (v8/*: any*/),
        "artist.pastShows.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "artist.slug": (v7/*: any*/)
      }
    },
    "name": "ArtistShows2TestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "9fa6bc1d1ea9dd2f690103f2e5461332";

export default node;
