/**
 * @generated SignedSource<<28250c17626bed4b0f40d5aa48eb4b45>>
 * @relayHash 8239004fb79e98b0cb1201f591c899e5
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 8239004fb79e98b0cb1201f591c899e5

import { ConcreteRequest, Query } from 'relay-runtime';
export type MyCollectionArtworkFormDeleteArtworkModalQuery$variables = {
  artistID: string;
};
export type MyCollectionArtworkFormDeleteArtworkModalQuery$data = {
  readonly artist: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly me: {
    readonly myCollectionConnection: {
      readonly totalCount: number | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type MyCollectionArtworkFormDeleteArtworkModalQuery = {
  response: MyCollectionArtworkFormDeleteArtworkModalQuery$data;
  variables: MyCollectionArtworkFormDeleteArtworkModalQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  }
],
v1 = {
  "alias": null,
  "args": [
    {
      "items": [
        {
          "kind": "Variable",
          "name": "artistIDs.0",
          "variableName": "artistID"
        }
      ],
      "kind": "ListValue",
      "name": "artistIDs"
    }
  ],
  "concreteType": "MyCollectionConnection",
  "kind": "LinkedField",
  "name": "myCollectionConnection",
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
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkFormDeleteArtworkModalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "MyCollectionArtworkFormDeleteArtworkModalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "8239004fb79e98b0cb1201f591c899e5",
    "metadata": {},
    "name": "MyCollectionArtworkFormDeleteArtworkModalQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c5ca1840c8d8451f197437188c4acc7e";

export default node;
