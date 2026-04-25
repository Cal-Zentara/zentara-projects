import type { OrganizationResources } from "@elevasis/sdk";
import * as operations from "./operations/index.js";
import * as example from "./example/index.js";
import * as personal from "./personal/index.js";

const org: OrganizationResources = {
  workflows: [
    ...operations.workflows,
    ...example.workflows,
    ...personal.workflows,
  ],
  agents: [...operations.agents, ...example.agents, ...personal.agents],
};
export default org;
