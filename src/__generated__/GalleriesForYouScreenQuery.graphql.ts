/**
 * @generated SignedSource<<f21baac47e65f355bd26a34c35ff0f27>>
 * @relayHash b242153ed345baae717eca98ad5a1d17
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID b242153ed345baae717eca98ad5a1d17

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GalleriesForYouScreenQuery$variables = {
  after?: string | null | undefined;
  count?: number | null | undefined;
  includePartnersNearIpBasedLocation: boolean;
  includePartnersWithFollowedArtists?: boolean | null | undefined;
  near?: string | null | undefined;
};
export type GalleriesForYouScreenQuery$data = {
  readonly requestLocation?: {
    readonly coordinates: {
      readonly lat: number | null | undefined;
      readonly lng: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"GalleriesForYouScreen_partnersConnection">;
};
export type GalleriesForYouScreenQuery = {
  response: GalleriesForYouScreenQuery$data;
  variables: GalleriesForYouScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "includePartnersNearIpBasedLocation"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "includePartnersWithFollowedArtists"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "near"
},
v5 = {
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
v6 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v7 = {
  "kind": "Variable",
  "name": "includePartnersNearIpBasedLocation",
  "variableName": "includePartnersNearIpBasedLocation"
},
v8 = {
  "kind": "Variable",
  "name": "includePartnersWithFollowedArtists",
  "variableName": "includePartnersWithFollowedArtists"
},
v9 = {
  "kind": "Variable",
  "name": "near",
  "variableName": "near"
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = [
  (v6/*: any*/),
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
    "name": "first",
    "variableName": "count"
  },
  (v7/*: any*/),
  (v8/*: any*/),
  {
    "kind": "Literal",
    "name": "maxDistance",
    "value": 6371
  },
  (v9/*: any*/),
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
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "GalleriesForYouScreenQuery",
    "selections": [
      {
        "condition": "includePartnersNearIpBasedLocation",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RequestLocation",
            "kind": "LinkedField",
            "name": "requestLocation",
            "plural": false,
            "selections": [
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ]
      },
      {
        "args": [
          (v6/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "GalleriesForYouScreen_partnersConnection"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "GalleriesForYouScreenQuery",
    "selections": [
      {
        "condition": "includePartnersNearIpBasedLocation",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RequestLocation",
            "kind": "LinkedField",
            "name": "requestLocation",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          }
        ]
      },
      {
        "alias": null,
        "args": (v11/*: any*/),
        "concreteType": "PartnerConnection",
        "kind": "LinkedField",
        "name": "partnersConnection",
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
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "initials",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 20
                      }
                    ],
                    "concreteType": "LocationConnection",
                    "kind": "LinkedField",
                    "name": "locationsConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "LocationEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Location",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "city",
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "locationsConnection(first:20)"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFollowed",
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
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "wide"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"wide\")"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
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
      },
      {
        "alias": null,
        "args": (v11/*: any*/),
        "filters": [
          "eligibleForListing",
          "excludeFollowedPartners",
          "includePartnersNearIpBasedLocation",
          "includePartnersWithFollowedArtists",
          "defaultProfilePublic",
          "sort",
          "maxDistance",
          "near",
          "type"
        ],
        "handle": "connection",
        "key": "GalleriesForYouScreen_partnersConnection",
        "kind": "LinkedHandle",
        "name": "partnersConnection"
      }
    ]
  },
  "params": {
    "id": "b242153ed345baae717eca98ad5a1d17",
    "metadata": {},
    "name": "GalleriesForYouScreenQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "1e8e46edc0e7852ab37b98ded1094a68";

export default node;
