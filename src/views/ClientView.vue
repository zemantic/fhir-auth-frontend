<template>
  <Navbar />
  <LoadingBar v-if="loading" />
  <div class="container mx-auto">
    <div class="rounded-md bg-white p-6 space-y-4">
      <Notification
        v-if="hasNotification"
        :message="notificationMessage"
        type="warning"
      ></Notification>
      <h2 class="text-lg font-bold">Client Details</h2>
      <div class="control" v-if="mode === 'patch'">
        <label for="clientId" class="font-semibold text-sm">Client ID</label>
        <Input v-model="clientUUID" :disabled="true" />
        <!-- <input
          type="text"
          class="disabled:bg-gray-300 text-gray-600 block w-full rounded-md px-3 py-2 border-2 mt-1"
          v-model="clientUUID"
          disabled
        /> -->
      </div>
      <div class="control">
        <label for="clientName" class="font-semibold text-sm"
          >Client Name</label
        >
        <Input
          v-model="clientName"
          placeholder="Dead simple"
          feedback="You can add SVGs as addons before & After"
          :hasErrors="clientNameRequired"
        />
      </div>

      <div class="control">
        <label for="description" class="font-semibold text-sm"
          >Client Description</label
        >
        <Textarea
          v-model="clientDescription"
          name="description"
          id="description"
          placeHolder="Add a description about this client application for reference"
        />
      </div>

      <div class="control">
        <label class="font-semibold text-sm" for="host">Client Host</label>
        <Input
          v-model="clientHost"
          placeholder="Client host URL address"
          :errors="clientHostError"
          :hasErrors="hasClientHostError"
        />
        <!-- <input
          ref="clientHostInput"
          v-model="clientHost"
          type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="Host address of your client"
        /> -->
        <!-- <span v-if="hasClientHostError" class="text-red-600 text-sm">{{
          clientHostError
        }}</span> -->
      </div>

      <div class="control">
        <label for="authendpoint" class="font-semibold text-sm"
          >Client Public Key Endpoint</label
        >
        <!-- <input
          ref="clientAuthEndpointInput"
          v-model="clientAuthEndpoint"
          type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="URL to access the public key for authentication. This has to same domain as the host address"
        /> -->
        <Input
          v-model="clientAuthEndpoint"
          :errors="endpointError"
          :hasErrors="hasEndpointError"
          placeholder="URL to the public key for authentication. This must have the same domain as the host address"
        />
        <!-- <span v-if="hasEndpointError" class="text-red-600 text-sm">{{
          endpointError
        }}</span> -->
      </div>
      <div class="control">
        <label class="font-semibold text-sm" for="fhirServerEndpoint"
          >FHIR Server Endpoint</label
        >
        <Select
          :options="fhirServerList"
          v-model="fhirServerEndpoint"
          placeholder="Please choose communicating FHIR server"
          :showEmpty="true"
        />
        <!-- <input
          ref="fhirServerEndpointInput"
          v-model="fhirServerEndpoint"
          type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="FHIR server URL endpoint"
        /> -->
        <span class="text-red-600 text-sm">{{ fhirServerEndpointError }}</span>
      </div>
      <div>
        <h2 class="text-lg font-bold mt-8 mb-4">
          Select Client Privilages For FHIR Resource
        </h2>
        <div class="grid grid-cols-8 mt-2 gap-4 pb-1.5">
          <div>
            <p class="font-semibold text-sm">FHIR Resource</p>
          </div>
          <div class="col-span-7 text-sm">
            <p class="font-semibold text-center">Privilages</p>
          </div>
        </div>
        <div class="grid grid-cols-8 mt-2 gap-4 pb-1.5">
          <div class="col-span-2">
            <RichSelect
              v-model="resource"
              name="selectedResource"
              placeholder="Please select FHIR resource"
              :options="resourceOptions"
              :clearable="true"
            ></RichSelect>
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="create"
              type="checkbox"
              v-model="resourceCreate"
            /><button
              @click="resourceCreate = !resourceCreate"
              class="font-semibold"
            >
              Create
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input id="read" type="checkbox" v-model="resourceRead" /><button
              class="font-semibold"
              @click="resourceRead = !resourceRead"
            >
              Read
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="update"
              type="checkbox"
              v-model="resourceUpdate"
            /><button
              class="font-semibold"
              @click="resourceUpdate = !resourceUpdate"
            >
              Update
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="delete"
              type="checkbox"
              v-model="resourceDelete"
            /><button
              class="font-semibold"
              @click="resourceDelete = !resourceDelete"
            >
              Delete
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <input
              id="search"
              type="checkbox"
              v-model="resourceSearch"
            /><button
              @click="resourceSearch = !resourceSearch"
              class="font-semibold"
            >
              Search
            </button>
          </div>
          <div class="flex items-center">
            <div>
              <Button
                @click="addNewPrivilage()"
                variant="primary"
                label="Add Privilages"
              />
            </div>
            <!-- <button
              @click="addNewPrivilage()"
              class="rounded-md font-semibold px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white"
            >
              Add Privilages
            </button> -->
          </div>
        </div>
      </div>
      <div>
        <table class="w-full">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2">FHIR Resource</th>
              <th class="py-2">Create Privilage</th>
              <th class="py-2">Read Privilage</th>
              <th class="py-2">Update Privilage</th>
              <th class="py-2">Delete Privilage</th>
              <th class="py-2">Search Privilage</th>
              <th class="py-2">Actions</th>
            </tr>
          </thead>
          <tr
            v-for="(privilage, index) in privilages"
            :key="index"
            class="text-center"
          >
            <td class="py-2 border">
              {{ privilage.resource }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.create }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.read }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.update }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.delete }}
            </td>
            <td class="py-2 border">
              {{ privilage.privilages.search }}
            </td>
            <td class="py-2 border">
              <button
                class="bg-gray-200 rounded-md px-1.5 py-1.5 focus:bg-gray-400 hover:bg-gray-300"
                @click="removePrivilage(index)"
              >
                <svg
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-24h-24v24zm26-30h-7l-2-2h-10l-2 2h-7v4h28v-4z"
                  />
                  <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <h2 class="text-lg font-bold text-red-700">Danger Zone</h2>
      <div class="control relative h-6 max-h-6 flex items-center gap-2">
        <Toggle v-model="isActive" :checked="isActive" text="Active" />
        <!-- <input
            type="checkbox"
            v-model="isActive"
            class="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
          />
          <span class="font-semibold" v-if="isActive === true"> Active </span>
          <span class="font-semibold" v-if="isActive === false">
            Deactive
          </span> -->
        <span class="font-semibold" v-if="isActive">Active</span>
        <span class="font-semibold" v-else>Inactive</span>
        <p class="text-sm text-gray-500">
          Inactivating will disable all incoming requests
        </p>
      </div>
      <div class="control">
        <label for="enableBatchRequest" class="font-semibold"
          >Enable Batch | Transaction Requests</label
        >
        <div class="flex items-center space-x-2 mt-2">
          <Toggle
            id="enableBatchRequest"
            :checked="enableBatchRequest"
            v-model="enableBatchRequest"
          />
          <span class="font-semibold" v-if="enableBatchRequest === true">
            Enabled
          </span>
          <span class="font-semibold" v-if="enableBatchRequest === false">
            Disabled
          </span>
          <p class="text-sm text-gray-600">
            Please read documentation if you are not sure about this setting
          </p>
        </div>
      </div>
      <div class="control">
        <label for="enableGlobalSearch" class="font-semibold"
          >Enable Global Search</label
        >
        <div class="flex items-center space-x-2 mt-2">
          <Toggle
            id="enableGlobalSearch"
            :checked="enableGlobalSearch"
            v-model="enableGlobalSearch"
          />
          <span class="font-semibold" v-if="enableGlobalSearch === true">
            Enabled
          </span>
          <span class="font-semibold" v-if="enableGlobalSearch === false">
            Disabled
          </span>
          <p class="text-sm text-gray-600">
            Please read documentation if you are not sure about this setting
          </p>
        </div>
      </div>

      <div>
        <Button
          :disabled="loading"
          :loading="loading"
          variant="primary"
          label="Save Client"
          @click="createClient()"
        />
        <!-- <button
          :disabled="loading"
          class="bg-teal-600 rounded-lg text-white font-bold px-3 py-2 hover:bg-teal-700"
          @click="createClient()"
        >
          <span v-if="mode === 'patch'">Update Client</span>
          <span v-if="mode === 'post'">Create New Client</span>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Notification from "@/components/Notification.vue";
import Navbar from "@/components/Navbar.vue";
import LoadingBar from "@/components/LoadingBar.vue";

import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { KeyStore } from "@/store/keyStore";
import {
  Button,
  Input,
  Select,
  Textarea,
  Toggle,
  RichSelect,
  RichSelectOptionImage,
  RichSelectOptionIndicator,
  VanillaInputGroup,
} from "@flavorly/vanilla-components";

const router = useRouter();
const route = useRoute();
const keyStore = KeyStore();
onMounted(async () => {
  if (route.params.id && route.params.id !== "create") {
    mode.value = "patch";
    loading.value = true;
    const client = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/client/${route.params.id}`,
      {
        headers: new Headers({
          authorization: `bearer ${keyStore.key}`,
        }),
      }
    );

    if (!client.ok) {
      notificationMessage.value = "An error occured in getting client details";
      hasNotification.value = true;
      return;
    }

    if (client.status === 200) {
      const parseClient = await client.json();

      clientId.value = parseClient.data.client.id;
      clientUUID.value = parseClient.data.client.clientId;
      isActive.value = parseClient.data.client.isActive;
      fhirServerEndpoint.value = parseClient.data.client.fhirEndpoint;

      let parseClientPrivilages: Array<{
        id: number;
        create: boolean;
        delete: boolean;
        read: boolean;
        search: boolean;
        update: boolean;
        resource: {
          resourceName: string;
          id: number;
        };
        resourcesId: number;
      }> = parseClient.data.client.clientPrivilages;

      let tempParseClientPrivilages: {
        resource: string;
        resourcesId: number;
        id: number;
        privilages: {
          create: boolean;
          read: boolean;
          update: boolean;
          delete: boolean;
          search: boolean;
        };
      }[] = [];

      parseClientPrivilages.forEach((element) => {
        let tempPrivilage: {
          resource: string;
          resourcesId: number;
          id: number;
          privilages: {
            create: boolean;
            read: boolean;
            update: boolean;
            delete: boolean;
            search: boolean;
          };
        } = {
          resource: element.resource.resourceName,
          resourcesId: element.resource.id,
          id: element.id,
          privilages: {
            create: element.create,
            read: element.read,
            update: element.update,
            delete: element.delete,
            search: element.search,
          },
        };

        privilagesIdArray.push(element.resourcesId);
        tempParseClientPrivilages.push(tempPrivilage);
      });

      privilages.value = tempParseClientPrivilages;
      clientName.value = parseClient.data.client.clientName;
      clientHost.value = parseClient.data.client.clientHost;
      clientAuthEndpoint.value =
        parseClient.data.client.clientPublicKeyEndpoint;
    } else if (client.status === 401) {
      return router.push({ name: "Login" });
    } else {
      hasNotification.value = true;
      notificationMessage.value = "Error getting client details";
    }
  }
  const resources = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/resources/${
      import.meta.env.VITE_FHIR_VERSION
    }`,
    {
      headers: new Headers({
        authorization: `bearer ${keyStore.key}`,
      }),
    }
  );
  if (resources.status === 200) {
    const resourceJSON = await resources.json();
    resourceList.value = resourceJSON.data.resources;
    resourceList.value.forEach((resource) => {
      let tempResource: { value: number; text: string } = {
        value: resource.id,
        text: resource.resourceName,
      };
      resourceOptions.value.push(tempResource);
    });
  }

  const fhirServers = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/get-all-fhir-servers`,
    {
      headers: new Headers({
        authorization: `bearer ${keyStore.key}`,
      }),
    }
  );

  if (fhirServers.status === 200) {
    const fhirServersJson = await fhirServers.json();
    const tempFhirServers: Array<{
      fhirServerName: string;
      fhirServerEndpoint: string;
      id: number;
    }> = fhirServersJson.data.fhirServers;

    let tempArray: Array<{ text: string; value: number }> = [];
    tempFhirServers.forEach((server) => {
      const tempElement: { text: string; value: number } = {
        text: server.fhirServerName,
        value: server.id,
      };
      tempArray.push(tempElement);
    });

    fhirServerList.value = tempArray;
  }
  loading.value = false;
});

// fhir server list
let fhirServerList: Ref<
  {
    value: number;
    text: string;
  }[]
> = ref([]);

// privilages
let privilages: Ref<
  {
    resource: string;
    resourcesId: number;
    privilages: {
      create: boolean;
      read: boolean;
      update: boolean;
      delete: boolean;
      search: boolean;
    };
  }[]
> = ref([]);
let privilagesIdArray: Number[] = [];
// mode edit or create
let mode = ref("post");
// fhir server endpointt
let fhirServerEndpoint: Ref<number | undefined> = ref(undefined);
let fhirServerEndpointError = ref("");
let hasFhirServerEndpointError = ref(false);
let fhirServerEndpointInput = ref();
// notifications
let hasNotification = ref(false);
let notificationMessage = ref();
// client details
let clientName = ref();
let clientId = ref();
let clientNameInput = ref();
let clientHostInput = ref();
let clientAuthEndpointInput = ref();
let clientNameRequired = ref(false);
let endpointError = ref("");
let clientHostError = ref("");
let hasClientHostError = ref(false);
let clientHost = ref("");
let clientAuthEndpoint = ref("");
let hasEndpointError = ref(false);
let isActive = ref(true);
let clientUUID = ref("");
let clientDescription = ref("");
let enableGlobalSearch = ref(false);
let enableBatchRequest = ref(false);
// resources
let resource = ref();
let resourceId: Ref<null | number> = ref(null);
let resourceCreate = ref(false);
let resourceRead = ref(false);
let resourceUpdate = ref(false);
let resourceDelete = ref(false);
let resourceSearch = ref(false);
let resourceInput = ref();
let resourceOptions: Ref<
  {
    value: number;
    text: string;
  }[]
> = ref([]);

let resourceList: Ref<
  {
    id: number;
    resourceName: string;
    fhirVersion: number;
    isActive: boolean;
  }[]
> = ref([]);
// other
let toggleResourceSelection = ref(false);
let chevronUp = ref(false);
let loading = ref(false);

const addNewPrivilage = () => {
  if (!resource.value) {
    hasNotification.value = true;
    notificationMessage.value = "Please select a FHIR resource";
    return;
  }

  if (privilagesIdArray.indexOf(resource.value - 1) !== -1) {
    hasNotification.value = true;
    notificationMessage.value =
      "Resource privilages already exists, please modify it instead";

    return;
  }

  let tempResource = resourceList.value[resource.value - 1];

  const newPriviage = {
    resource: tempResource.resourceName,
    resourcesId: tempResource.id,
    privilages: {
      create: resourceCreate.value,
      read: resourceRead.value,
      update: resourceUpdate.value,
      delete: resourceDelete.value,
      search: resourceSearch.value,
    },
  };

  privilages.value.push(newPriviage);
  privilagesIdArray.push(resource.value - 1);

  resource.value = "";
  resourceId.value = null;
  resourceCreate.value = false;
  resourceRead.value = false;
  resourceUpdate.value = false;
  resourceDelete.value = false;
  resourceSearch.value = false;
};

const toggleResourceSelectionMenu = () => {
  toggleResourceSelection.value = !toggleResourceSelection.value;
  chevronUp.value = !chevronUp.value;
};

const selectResource = () => {
  console.log(resource.value);
};

const isURL = (url: string): boolean => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator

  return urlPattern.test(url);
};

const createClient = async () => {
  if (!clientName.value || (clientName.value as string).trim().length === 0) {
    hasNotification.value = true;
    notificationMessage.value = "Please enter a client name";
    (clientNameInput.value as HTMLInputElement).focus();
    clientNameRequired.value = true;
    return;
  } else {
    clientNameRequired.value = false;
  }

  if (clientHost.value.trim().length === 0 || !isURL(clientHost.value)) {
    hasNotification.value = true;
    notificationMessage.value = "Enter a valid client host address";
    clientHostError.value = "* Invalid client host";
    hasClientHostError.value = true;
    (clientHostInput.value as HTMLInputElement).focus();
    return;
  }

  if (fhirServerEndpoint.value === undefined) {
    hasNotification.value = true;
    notificationMessage.value = "Select a FHIR server";
    hasFhirServerEndpointError.value = true;
    fhirServerEndpointError.value = "* Select a valid FHIR server";
    return;
  }

  hasClientHostError.value = false;

  if (
    clientAuthEndpoint.value.trim().length === 0 ||
    !isURL(clientAuthEndpoint.value)
  ) {
    hasNotification.value = true;
    notificationMessage.value = "Enter a valid auth endpoint";
    endpointError.value = "* Invalid auth endpoint";
    hasEndpointError.value = true;
    (clientAuthEndpointInput.value as HTMLInputElement).focus();
    return;
  } else if (isURL(clientAuthEndpoint.value)) {
    try {
      const authUrl = new URL(clientAuthEndpoint.value);
      const hostUrl = new URL(clientHost.value);

      if (authUrl.host !== hostUrl.host) {
        hasNotification.value = true;
        notificationMessage.value =
          "Client URL host and Auth endpoint URL host missmatch";
        return;
      }
    } catch (error) {
      hasNotification.value = true;
      notificationMessage.value = "Invalid URLs provided";
    }
  }
  hasEndpointError.value = false;

  if (privilages.value.length === 0) {
    hasNotification.value = true;
    notificationMessage.value = "Please add at least one FHIR privilage";
    (resourceInput.value as HTMLInputElement).focus();
    return;
  }

  loading.value = true;
  // post payload to the server
  const post = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/client`, {
    method: mode.value.toUpperCase(),
    headers: new Headers({
      authorization: `bearer ${keyStore.key}`,
      "content-type": "application/json",
    }),
    body: JSON.stringify({
      clientsId: clientId.value,
      clientName: clientName.value,
      clientHost: clientHost.value,
      clientPublicKeyEndpoint: clientAuthEndpoint.value,
      privilages: privilages.value,
      fhirEndpoint: fhirServerEndpoint.value,
      isActive: isActive.value,
      enableBatchRequests: enableBatchRequest.value,
      enableGlobalSearch: enableGlobalSearch.value,
      clientDescription: clientDescription.value,
    }),
  });

  if (post.status === 200) {
    const response = await post.json();
    hasNotification.value = true;
    if (mode.value === "patch") {
      notificationMessage.value = "Client successfully updated";
    } else {
      notificationMessage.value = `Client successfully created. Client ID - ${response.data.client.clientId}`;
    }
  } else if (post.status === 401) {
    return router.push({ name: "Login" });
  } else {
    hasNotification.value = true;
    notificationMessage.value = "An error occured in creating client";
  }
  loading.value = false;
};

const clearResource = () => {
  resource.value = "";
  resourceId.value = null;
  resourceCreate.value = false;
  resourceUpdate.value = false;
  resourceRead.value = false;
  resourceDelete.value = false;
  resourceSearch.value = false;
};

const removePrivilage = (index: number) => {
  const resourcesId = privilages.value[index].resourcesId;
  privilagesIdArray.splice(privilagesIdArray.indexOf(resourcesId), 1);
  privilages.value.splice(index, 1);
};
</script>
