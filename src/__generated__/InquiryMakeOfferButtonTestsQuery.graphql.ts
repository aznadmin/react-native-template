/**
 * @generated SignedSource<<33d623c9a5d14861d78a97313a22b7ed>>
 * @relayHash da6cd473326fc18a12dd16dadf24dfe5
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID da6cd473326fc18a12dd16dadf24dfe5

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InquiryMakeOfferButtonTestsQuery$variables = {
  id: string;
};
export type InquiryMakeOfferButtonTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"InquiryMakeOfferButton_artwork">;
  } | null | undefined;
};
export type InquiryMakeOfferButtonTestsQuery = {
  response: InquiryMakeOfferButtonTestsQuery$data;
  variables: InquiryMakeOfferButtonTestsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "InquiryMakeOfferButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "InquiryMakeOfferButton_artwork"
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
    "name": "InquiryMakeOfferButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": "da6cd473326fc18a12dd16dadf24dfe5",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artwork.id": (v2/*: any*/),
        "artwork.internalID": (v2/*: any*/)
      }
    },
    "name": "InquiryMakeOfferButtonTestsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "8df2bf6804ec5499775ba3df5afcc51b";

export default node;
