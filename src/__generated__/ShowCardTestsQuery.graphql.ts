/**
 * @generated SignedSource<<c628d22e9a35bb08a6867cfb23ae2d8d>>
 * @relayHash 60fe5afb92f6c23fa8b608f94169cca6
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 60fe5afb92f6c23fa8b608f94169cca6

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowCardTestsQuery$variables = Record<PropertyKey, never>;
export type ShowCardTestsQuery$data = {
  readonly show: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowCard_show">;
  } | null | undefined;
};
export type ShowCardTestsQuery$rawResponse = {
  readonly show: {
    readonly city: string | null | undefined;
    readonly formattedEndAt: string | null | undefined;
    readonly formattedStartAt: string | null | undefined;
    readonly href: string | null | undefined;
    readonly id: string;
    readonly metaImage: {
      readonly url: string | null | undefined;
    } | null | undefined;
    readonly name: string | null | undefined;
    readonly partner: {
      readonly __typename: "ExternalPartner";
      readonly __isNode: "ExternalPartner";
      readonly city: string | null | undefined;
      readonly id: string;
      readonly name: string | null | undefined;
    } | {
      readonly __typename: "Partner";
      readonly __isNode: "Partner";
      readonly cities: ReadonlyArray<string | null | undefined> | null | undefined;
      readonly id: string;
      readonly name: string | null | undefined;
    } | {
      readonly __typename: string;
      readonly __isNode: string;
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type ShowCardTestsQuery = {
  rawResponse: ShowCardTestsQuery$rawResponse;
  response: ShowCardTestsQuery$data;
  variables: ShowCardTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MMM D"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "city",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowCard_show"
          }
        ],
        "storageKey": "show(id:\"test\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShowCardTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": "formattedStartAt",
            "args": (v2/*: any*/),
            "kind": "ScalarField",
            "name": "startAt",
            "storageKey": "startAt(format:\"MMM D\")"
          },
          {
            "alias": "formattedEndAt",
            "args": (v2/*: any*/),
            "kind": "ScalarField",
            "name": "endAt",
            "storageKey": "endAt(format:\"MMM D\")"
          },
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
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "metaImage",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "small"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"small\")"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "partner",
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
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cities",
                    "storageKey": null
                  }
                ],
                "type": "Partner",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "type": "ExternalPartner",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": "show(id:\"test\")"
      }
    ]
  },
  "params": {
    "id": "60fe5afb92f6c23fa8b608f94169cca6",
    "metadata": {},
    "name": "ShowCardTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "da8ad2a407eee9ece14f1e01a0be3953";

export default node;
