/**
 * @generated SignedSource<<b8fe6aeae8c3c5413bf21570d8be0e0b>>
 * @relayHash 13b984b3f3859ac50386ba1a208b556a
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 13b984b3f3859ac50386ba1a208b556a

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OpenInquiryModalButtonTestQuery$variables = Record<PropertyKey, never>;
export type OpenInquiryModalButtonTestQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"OpenInquiryModalButton_artwork">;
  } | null | undefined;
};
export type OpenInquiryModalButtonTestQuery = {
  response: OpenInquiryModalButtonTestQuery$data;
  variables: OpenInquiryModalButtonTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artwork-id"
  }
],
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OpenInquiryModalButtonTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OpenInquiryModalButton_artwork"
          }
        ],
        "storageKey": "artwork(id:\"artwork-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "OpenInquiryModalButtonTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "name": "isEdition",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isOfferable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isOfferableFromInquiry",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAcquireable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "EditionSet",
            "kind": "LinkedField",
            "name": "editionSets",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "artwork(id:\"artwork-id\")"
      }
    ]
  },
  "params": {
    "id": "13b984b3f3859ac50386ba1a208b556a",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.editionSets": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "EditionSet"
        },
        "artwork.editionSets.id": (v3/*: any*/),
        "artwork.editionSets.internalID": (v3/*: any*/),
        "artwork.id": (v3/*: any*/),
        "artwork.internalID": (v3/*: any*/),
        "artwork.isAcquireable": (v4/*: any*/),
        "artwork.isEdition": (v4/*: any*/),
        "artwork.isOfferable": (v4/*: any*/),
        "artwork.isOfferableFromInquiry": (v4/*: any*/),
        "artwork.slug": (v3/*: any*/)
      }
    },
    "name": "OpenInquiryModalButtonTestQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "3053def0d983487a2a27f47bf1440dea";

export default node;
