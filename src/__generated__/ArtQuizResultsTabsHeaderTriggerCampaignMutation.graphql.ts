/**
 * @generated SignedSource<<10a583f5fc61c06ad7f4d619ef1230a0>>
 * @relayHash 0b92447a834fdcadbd83c69d4abaf00c
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

// @relayRequestID 0b92447a834fdcadbd83c69d4abaf00c

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TriggerCampaignID = "ART_QUIZ" | "%future added value";
export type TriggerCampaignInput = {
  campaignID: TriggerCampaignID;
  clientMutationId?: string | null | undefined;
};
export type ArtQuizResultsTabsHeaderTriggerCampaignMutation$variables = {
  input: TriggerCampaignInput;
};
export type ArtQuizResultsTabsHeaderTriggerCampaignMutation$data = {
  readonly triggerCampaign: {
    readonly clientMutationId: string | null | undefined;
  } | null | undefined;
};
export type ArtQuizResultsTabsHeaderTriggerCampaignMutation = {
  response: ArtQuizResultsTabsHeaderTriggerCampaignMutation$data;
  variables: ArtQuizResultsTabsHeaderTriggerCampaignMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "TriggerCampaignPayload",
    "kind": "LinkedField",
    "name": "triggerCampaign",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtQuizResultsTabsHeaderTriggerCampaignMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArtQuizResultsTabsHeaderTriggerCampaignMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "0b92447a834fdcadbd83c69d4abaf00c",
    "metadata": {},
    "name": "ArtQuizResultsTabsHeaderTriggerCampaignMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "34c0667821fa4552d0897c604ed3b1fb";

export default node;
