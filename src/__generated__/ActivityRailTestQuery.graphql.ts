/**
 * @generated SignedSource<<c3f73970e42d0f67d30e0d3b86eb52bd>>
 * @relayHash 92825f489293c0f093372ad80fdddb04
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 92825f489293c0f093372ad80fdddb04

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActivityRailTestQuery$variables = Record<PropertyKey, never>;
export type ActivityRailTestQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"ActivityRail_notificationsConnection">;
  } | null | undefined;
};
export type ActivityRailTestQuery = {
  response: ActivityRailTestQuery$data;
  variables: ActivityRailTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActivityRailTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ActivityRail_notificationsConnection"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ActivityRailTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NotificationConnection",
            "kind": "LinkedField",
            "name": "notificationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "NotificationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Notification",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "notificationType",
                        "storageKey": null
                      },
                      {
                        "alias": "artworks",
                        "args": null,
                        "concreteType": "ArtworkConnection",
                        "kind": "LinkedField",
                        "name": "artworksConnection",
                        "plural": false,
                        "selections": (v1/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "item",
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
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "first",
                                    "value": 1
                                  }
                                ],
                                "concreteType": "ViewingRoomsConnection",
                                "kind": "LinkedField",
                                "name": "viewingRoomsConnection",
                                "plural": false,
                                "selections": (v1/*: any*/),
                                "storageKey": "viewingRoomsConnection(first:1)"
                              }
                            ],
                            "type": "ViewingRoomPublishedNotificationItem",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Article",
                                "kind": "LinkedField",
                                "name": "article",
                                "plural": false,
                                "selections": [
                                  (v0/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "ArticleFeaturedArtistNotificationItem",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "available",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "expiresAt",
                                "storageKey": null
                              }
                            ],
                            "type": "PartnerOfferCreatedNotificationItem",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "headline",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "message",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "format",
                            "value": "RELATIVE"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "publishedAt",
                        "storageKey": "publishedAt(format:\"RELATIVE\")"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "targetHref",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isUnread",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "objectsCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "size",
                            "value": 1
                          }
                        ],
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "previewImages",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "blurhash",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "thumbnail"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"thumbnail\")"
                          }
                        ],
                        "storageKey": "previewImages(size:1)"
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
      }
    ]
  },
  "params": {
    "id": "92825f489293c0f093372ad80fdddb04",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Viewer"
        },
        "viewer.notificationsConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "NotificationConnection"
        },
        "viewer.notificationsConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "NotificationEdge"
        },
        "viewer.notificationsConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Notification"
        },
        "viewer.notificationsConnection.edges.node.artworks": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtworkConnection"
        },
        "viewer.notificationsConnection.edges.node.artworks.totalCount": (v3/*: any*/),
        "viewer.notificationsConnection.edges.node.headline": (v4/*: any*/),
        "viewer.notificationsConnection.edges.node.id": (v5/*: any*/),
        "viewer.notificationsConnection.edges.node.internalID": (v5/*: any*/),
        "viewer.notificationsConnection.edges.node.isUnread": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "viewer.notificationsConnection.edges.node.item": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "NotificationItem"
        },
        "viewer.notificationsConnection.edges.node.item.__typename": (v4/*: any*/),
        "viewer.notificationsConnection.edges.node.item.article": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Article"
        },
        "viewer.notificationsConnection.edges.node.item.article.id": (v5/*: any*/),
        "viewer.notificationsConnection.edges.node.item.article.internalID": (v5/*: any*/),
        "viewer.notificationsConnection.edges.node.item.available": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "viewer.notificationsConnection.edges.node.item.expiresAt": (v6/*: any*/),
        "viewer.notificationsConnection.edges.node.item.viewingRoomsConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ViewingRoomsConnection"
        },
        "viewer.notificationsConnection.edges.node.item.viewingRoomsConnection.totalCount": (v3/*: any*/),
        "viewer.notificationsConnection.edges.node.message": (v4/*: any*/),
        "viewer.notificationsConnection.edges.node.notificationType": {
          "enumValues": [
            "ARTICLE_FEATURED_ARTIST",
            "ARTWORK_ALERT",
            "ARTWORK_PUBLISHED",
            "PARTNER_OFFER_CREATED",
            "PARTNER_SHOW_OPENED",
            "VIEWING_ROOM_PUBLISHED"
          ],
          "nullable": false,
          "plural": false,
          "type": "NotificationTypesEnum"
        },
        "viewer.notificationsConnection.edges.node.objectsCount": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "viewer.notificationsConnection.edges.node.previewImages": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "Image"
        },
        "viewer.notificationsConnection.edges.node.previewImages.blurhash": (v6/*: any*/),
        "viewer.notificationsConnection.edges.node.previewImages.url": (v6/*: any*/),
        "viewer.notificationsConnection.edges.node.publishedAt": (v4/*: any*/),
        "viewer.notificationsConnection.edges.node.targetHref": (v4/*: any*/),
        "viewer.notificationsConnection.edges.node.title": (v4/*: any*/)
      }
    },
    "name": "ActivityRailTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "313f5c1165a200197e33904943a35acc";

export default node;
