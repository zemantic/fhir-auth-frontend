<template>
  <Navbar />
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
        <input
          type="text"
          class="disabled:bg-gray-300 text-gray-600 block w-full rounded-md px-3 py-2 border-2 mt-1"
          v-model="clientUUID"
          disabled
        />
      </div>
      <div class="control">
        <label for="clientName" class="font-semibold text-sm"
          >Client Name</label
        >
        <input
          ref="clientNameInput"
          v-model="clientName"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="Provide a suitable client name"
          autofocus
          type="text"
        />
        <span v-if="clientNameRequired" class="text-red-600 text-sm"
          >* Client name is required</span
        >
      </div>

      <div class="control">
        <label for="description" class="font-semibold text-sm"
          >Client Description</label
        >
        <textarea
          v-model="clientDescription"
          name="description"
          id="description"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          cols="30"
          rows="5"
        ></textarea>
      </div>

      <div class="control">
        <label class="font-semibold text-sm" for="host">Client Host</label>
        <input
          ref="clientHostInput"
          v-model="clientHost"
          type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="Host address of your client"
        />
        <span v-if="hasClientHostError" class="text-red-600 text-sm">{{
          clientHostError
        }}</span>
      </div>

      <div class="control">
        <label for="authendpoint" class="font-semibold text-sm"
          >Client Public Key Endpoint</label
        >
        <input
          ref="clientAuthEndpointInput"
          v-model="clientAuthEndpoint"
          type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="URL to access the public key for authentication. This has to same domain as the host address"
        />
        <span v-if="hasEndpointError" class="text-red-600 text-sm">{{
          endpointError
        }}</span>
      </div>
      <div class="control">
        <label class="font-semibold text-sm" for="fhirServerEndpoint"
          >FHIR Server Endpoint</label
        >
        <input
          ref="fhirServerEndpointInput"
          v-model="fhirServerEndpoint"
          type="text"
          class="block w-full rounded-md px-3 py-2 border-2 mt-1 focus:outline-none focus:border-teal-600"
          placeholder="FHIR server URL endpoint"
        />
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
            <div class="w-full svelte-1l8159u">
              <div
                class="my-2 bg-white p-1 flex border focus-within:border-teal-600 border-gray-200 rounded svelte-1l8159u"
              >
                <div class="flex flex-auto flex-wrap"></div>
                <input
                  ref="resourceInput"
                  v-model="resource"
                  placeholder="Select FHIR resource"
                  class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
                <div>
                  <button
                    @click="clearResource()"
                    class="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none"
                  >
                    <svg
                      class="feather feather-x"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>
                  </button>
                </div>
                <div
                  class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u"
                >
                  <button
                    @click="toggleResourceSelectionMenu()"
                    class="cursor-pointer w-6 h-full text-gray-600 outline-none focus:outline-none"
                  >
                    <svg
                      v-if="!chevronUp"
                      class="feather feather-chevron-down"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <svg
                      v-if="chevronUp"
                      class="feather feather-chevron-up"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div
              v-if="toggleResourceSelection"
              class="absolute shadow top-100 z-40 w-1/4 rounded max-h-select overflow-y-auto"
            >
              <div class="flex flex-col w-full">
                <div
                  v-for="(item, index) in resourceList"
                  :key="index"
                  class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100"
                >
                  <div
                    class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100"
                  >
                    <div class="w-full items-center flex">
                      <button
                        :disabled="!item.isActive"
                        @click="selectResource(item)"
                        class="mx-2 text-left w-full leading-6 disabled:text-gray-40"
                      >
                        {{ item.resourceName }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <button
              @click="addNewPrivilage()"
              class="rounded-md font-semibold px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white"
            >
              Add Privilages
            </button>
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
      <div class="control">
        <div class="flex items-center space-x-2 mt-1">
          <input
            type="checkbox"
            v-model="isActive"
            class="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
          />
          <span class="font-semibold" v-if="isActive === true"> Active </span>
          <span class="font-semibold" v-if="isActive === false">
            Deactive
          </span>
          <p class="text-sm text-gray-600">
            Deactivating will break all incoming requests to this client
          </p>
        </div>
      </div>
      <div>
        <button
          :disabled="loading"
          class="bg-teal-600 rounded-lg text-white font-bold px-3 py-2 hover:bg-teal-700"
          @click="createClient()"
        >
          <span v-if="mode === 'patch'">Update Client</span>
          <span v-if="mode === 'post'">Create New Client</span>
        </button>
        <LoadingSpinner v-if="loading"></LoadingSpinner>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Notification from "@/components/Notification.vue";
import Navbar from "@/components/Navbar.vue";
import { defineComponent, onMounted, ref } from "vue";
import type { Ref } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();

    onMounted(async () => {
      if (route.params.id && route.params.id !== "create") {
        mode.value = "patch";
        loading.value = true;
        const client = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/client/${route.params.id}`
        );

        if (!client.ok) {
          notificationMessage.value =
            "An error occured in getting client details";
          hasNotification.value = true;
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
        } else {
          hasNotification.value = true;
          notificationMessage.value = "Error getting client details";
        }
      }
      const resources = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/resources/4.0`
      );
      if (resources.status === 200) {
        const resourceJSON = await resources.json();
        resourceList.value = resourceJSON.data.resources;
      }
      loading.value = false;
    });

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
    let fhirServerEndpoint = ref("");
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
    // resources
    let resource = ref();
    let resourceId: Ref<null | number> = ref(null);
    let resourceCreate = ref(false);
    let resourceRead = ref(false);
    let resourceUpdate = ref(false);
    let resourceDelete = ref(false);
    let resourceSearch = ref(false);
    let resourceInput = ref();
    let resourceList: Ref<
      {
        id: number;
        resourceName: string;
        fhirVersion: number;
        isActive: boolean;
      }[]
    > = ref([]);
    let clientDescription = ref("");
    let enableBatchRequest = ref(false);
    let enableGlobalSearch = ref(false);
    let step = ref(1);

    // other
    let toggleResourceSelection = ref(false);
    let chevronUp = ref(false);
    let loading = ref(false);

    const addNewPrivilage = () => {
      if (resourceId.value === null) {
        hasNotification.value = true;
        notificationMessage.value = "Please select a FHIR resource";
        return;
      }

      if (privilagesIdArray.indexOf(resourceId.value) !== -1) {
        hasNotification.value = true;
        notificationMessage.value =
          "Resource privilages already exists, please modify it instead";

        return;
      }

      const newPriviage = {
        resource: resource.value,
        resourcesId: resourceId.value,
        privilages: {
          create: resourceCreate.value,
          read: resourceRead.value,
          update: resourceUpdate.value,
          delete: resourceDelete.value,
          search: resourceSearch.value,
        },
      };

      privilages.value.push(newPriviage);
      privilagesIdArray.push(resourceId.value);

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

    const selectResource = (selectedResource: {
      id: number;
      resourceName: string;
      fhirVersion: number;
      isActive: boolean;
    }) => {
      resource.value = selectedResource.resourceName;
      resourceId.value = selectedResource.id;
      toggleResourceSelection.value = !toggleResourceSelection.value;
      chevronUp.value = !chevronUp.value;
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
      if (
        !clientName.value ||
        (clientName.value as string).trim().length === 0
      ) {
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

      if (
        fhirServerEndpoint.value.trim().length === 0 ||
        !isURL(fhirServerEndpoint.value)
      ) {
        hasNotification.value = true;
        notificationMessage.value = "Enter a valid FHIR server url";
        hasFhirServerEndpointError.value = true;
        fhirServerEndpointError.value = "* Invalid FHIR server endpoint";
        (fhirServerEndpointInput.value as HTMLInputElement).focus();
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
      const post = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/client`,
        {
          method: mode.value.toUpperCase(),
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            clientsId: clientId.value,
            clientName: clientName.value,
            clientHost: clientHost.value,
            clientPublicKeyEndpoint: clientAuthEndpoint.value,
            privilages: privilages.value,
            clientDescription: clientDescription.value,
            enablePublicSearch: false,
            enableBatchRequest: false,
            fhirEndpoint: fhirServerEndpoint.value,
            isActive: isActive.value,
          }),
        }
      );

      if (post.status === 200) {
        const response = await post.json();
        hasNotification.value = true;
        if (mode.value === "patch") {
          notificationMessage.value = "Client successfully updated";
        } else {
          notificationMessage.value = `Client successfully created. Client ID - ${response.data.client.clientId}`;
        }
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

    return {
      clientName,
      privilages,
      resource,
      resourceCreate,
      resourceRead,
      resourceUpdate,
      resourceDelete,
      resourceSearch,
      addNewPrivilage,
      toggleResourceSelection,
      toggleResourceSelectionMenu,
      chevronUp,
      resourceList,
      selectResource,
      hasNotification,
      notificationMessage,
      createClient,
      clientNameInput,
      clearResource,
      clientNameRequired,
      endpointError,
      clientHostError,
      hasClientHostError,
      hasEndpointError,
      clientHost,
      clientAuthEndpoint,
      clientHostInput,
      clientAuthEndpointInput,
      resourceInput,
      loading,
      clientDescription,
      enableGlobalSearch,
      enableBatchRequest,
      step,
      fhirServerEndpoint,
      fhirServerEndpointError,
      hasFhirServerEndpointError,
      fhirServerEndpointInput,
      mode,
      isActive,
      clientUUID,
      removePrivilage,
    };
  },
  components: { Notification, LoadingSpinner, Navbar },
});
</script>
