<template>
  <LoadingBar v-if="isLoading" />
  <Navbar />
  <Model
    message="Delete"
    @hide-model="hideModel"
    @callback-event="deleteClient"
    :modelData="modelData"
  />
  <div class="container mx-auto bg-white p-4">
    <Notification
      v-if="hasNotification"
      :message="notificationMessage"
      type="warning"
    />
    <div class="my-4">
      <form class="grid grid-cols-12 gap-4" @submit.prevent="searchClient">
        <div class="col-span-10">
          <Input
            v-model="searchQuery"
            placeholder="Search for client application"
          />
        </div>
        <div class="col-span-2">
          <Button
            :disabled="isLoading"
            :loading="isLoading"
            @click="searchClient"
            label="Search"
          />
        </div>
      </form>
    </div>
    <table class="min-w-max w-full table-auto">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Client</th>
          <th class="py-3 px-6 text-center">Client Host</th>
          <th class="py-3 px-6 text-center">FHIR Endpoit</th>
          <th class="py-3 px-6 text-center">Status</th>
          <th class="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr
          class="border-b border-gray-200 hover:bg-gray-100"
          v-for="(item, index) in clientList"
          :key="index"
        >
          <td class="py-3 px-6 text-left">
            <div class="flex items-center">
              <div class="mr-2">
                <div v-if="item.isActive">
                  <svg
                    id="Layer_1"
                    class="h-6 w-6"
                    style="enable-background: new 0 0 128 128"
                    version="1.1"
                    viewBox="0 0 128 128"
                  >
                    <g><circle class="st0" cx="64" cy="64" r="64" /></g>
                    <g>
                      <path
                        class="st1"
                        d="M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2   c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z"
                      />
                    </g>
                  </svg>
                </div>
                <div v-if="!item.isActive">
                  <svg
                    id="Layer_1"
                    style="enable-background: new 0 0 128 128"
                    version="1.1"
                    viewBox="0 0 128 128"
                    class="h-6 w-6"
                  >
                    <circle class="st2" cx="64" cy="64" r="64" />
                    <path
                      class="st3"
                      d="M100.3,90.4L73.9,64l26.3-26.4c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0L64,54.1L37.7,27.8  c-0.4-0.4-1-0.4-1.4,0l-8.5,8.5c-0.4,0.4-0.4,1,0,1.4L54,64L27.7,90.3c-0.4,0.4-0.4,1,0,1.4l8.5,8.5c0.4,0.4,1.1,0.4,1.4,0L64,73.9  l26.3,26.3c0.4,0.4,1.1,0.4,1.5,0.1l8.5-8.5C100.7,91.4,100.7,90.8,100.3,90.4z"
                    />
                  </svg>
                </div>
              </div>
              <span>{{ item.clientName }}</span>
            </div>
          </td>
          <td class="py-3 px-6 text-center">
            <span>{{ item.clientHost }}</span>
          </td>
          <td class="py-3 px-6 text-center">
            <span>{{ item.fhirServer.fhirServerEndpoint }}</span>
          </td>
          <td class="py-3 px-6 text-center">
            <span
              v-if="item.isActive"
              class="bg-green-200 text-green-600 font-bold py-1 px-3 rounded-full text-sm"
              >Active</span
            >

            <span
              class="bg-red-200 text-red-600 font-bold py-1 px-3 rounded-full text-sm"
              v-else
              >Inactive</span
            >
          </td>
          <td class="py-3 px-6 text-center">
            <div class="flex item-center justify-center">
              <div
                class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div
                class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              >
                <a :href="`/dashboard/client/${item.clientId}`">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              >
                <button class="contents" @click="triggerModel(item.clientId)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4">
      <Button label="Previous" @click="getPreviousClients()" />
      <span class="font-semibold px-2">{{ page + 1 }}</span>
      <Button label="Next" @click="getNextClients()" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// imports
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import LoadingBar from "@/components/LoadingBar.vue";
import Navbar from "@/components/Navbar.vue";
import Model from "@/components/Model.vue";
import Notification from "@/components/Notification.vue";
import { KeyStore } from "@/store/keyStore";
import { Button, Input } from "@flavorly/vanilla-components";
// variables
let clientList: Ref<
  {
    clientName: string;
    fhirEndpoint: string;
    clientHost: string;
    isActive: boolean;
    clientId: string;
    fhirServer: { fhirServerEndpoint: string };
  }[]
> = ref([]);

const searchQuery = ref("");
const hasNotification = ref(false);
const notificationMessage = ref("");
const keyStore = KeyStore();
const isLoading = ref(false);
const page = ref(0);
const modelData = ref({
  visible: false,
  clientId: "",
});

//search clients
const searchClient = async () => {
  isLoading.value = true;
  const request = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/search-client`,
    {
      method: "POST",
      headers: new Headers({
        authorization: `bearer ${keyStore.getKey}`,
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      }),
      body: new URLSearchParams({
        query: searchQuery.value,
      }),
    }
  );

  if (!request.ok || request.status !== 200) {
    hasNotification.value = true;
    notificationMessage.value =
      "An unpexted error occred in getting clients. Please try again.";
    isLoading.value = false;
    return;
  }
  const parseClients = await request.json();
  clientList.value = parseClients.data.clients;
  if (clientList.value.length === 0) {
    hasNotification.value = true;
    notificationMessage.value = "No results found for the query";
  }
  isLoading.value = false;
};

// hide confirmation model
const hideModel = () => {
  modelData.value.visible = false;
};

// gets clients of previous page
const getPreviousClients = () => {
  if (page.value === 0) return;
  page.value = page.value - 1;
  getClients();
};

//gets client list of next page
const getNextClients = () => {
  if (clientList.value.length < 10) return;
  page.value = page.value + 1;
  getClients();
};

// get the clients of the current page
const getClients = async () => {
  isLoading.value = true;
  const request = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/get-all-client?skip=${page.value}`,
    {
      headers: new Headers({
        authorization: `bearer ${keyStore.getKey}`,
      }),
    }
  );

  if (!request.ok || request.status !== 200) {
    hasNotification.value = true;
    notificationMessage.value =
      "An unxpected error occred in getting clients. Please try later.";
    isLoading.value = false;
    return;
  }

  const parseClients = await request.json();
  clientList.value = parseClients.data.clients;
  isLoading.value = false;
};

// loads the initial clinets on page load
onMounted(async () => {
  isLoading.value = true;
  const clients = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/get-all-clients?skip=${page.value}`,
    {
      headers: new Headers({
        authorization: `bearer ${keyStore.getKey}`,
      }),
    }
  );
  if (!clients.ok || clients.status !== 200) {
    hasNotification.value = true;
    notificationMessage.value =
      "An unexpected error occred in getting clients. Please try later.";
    return;
  }

  const parseClients = await clients.json();
  clientList.value = parseClients.data.clients;
  isLoading.value = false;
});

// triggers the model to delete client confirmation
const triggerModel = (clientId: string) => {
  modelData.value.clientId = clientId;
  modelData.value.visible = true;
};

// sends the delete request to delete client
const deleteClient = async () => {
  const deleteClient = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/client/${modelData.value.clientId}`,
    {
      method: "DELETE",
      headers: new Headers({
        authorization: `beaerer ${keyStore.getKey}`,
      }),
    }
  );
};
</script>
