<template>
  <LoadingBar v-if="isLoading" />
  <Navbar />
  <Model
    message="Delete"
    @hide-model="hideModel"
    @callback-event="deleteServer"
    :modelData="modelData"
  />

  <div class="container mx-auto bg-white p-4">
    <Notification
      v-if="hasNotification"
      :message="notificationMessage"
      type="warning"
    />
    <div class="my-4">
      <form class="grid grid-cols-12 gap-4" @submit.prevent="searchServers">
        <div class="col-span-10">
          <Input v-model="searchQuery" placeholder="Search for FHIR server" />
        </div>
        <div class="col-span-2">
          <Button
            :disabled="isLoading"
            :loading="isLoading"
            @click="searchServers"
            label="Search"
          />
        </div>
      </form>
    </div>
    <table class="min-w-max w-full table-auto">
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Client</th>
          <th class="py-3 px-6 text-center">Server ID</th>
          <th class="py-3 px-6 text-center">FHIR Endpoit</th>
          <th class="py-3 px-6 text-center">Status</th>
          <th class="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr
          class="border-b border-gray-200 hover:bg-gray-100"
          v-for="(item, index) in serverList"
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
              <span>{{ item.fhirServerName }}</span>
            </div>
          </td>
          <td class="py-3 px-6 text-center">
            <span>{{ item.serverId }}</span>
          </td>
          <td class="py-3 px-6 text-center">
            <span>{{ item.fhirServerEndpoint }}</span>
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
                <a :href="`/dashboard/client/${item.serverId}`">
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
                <button class="contents" @click="triggerModel(item.serverId)">
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
    <Skeleton :count="3" class="mt-4" v-if="isLoading" />
    <div class="my-4">
      <Button label="Previous" @click="getPreviousServers" />
      <span class="font-semibold mx-4">{{ page + 1 }}</span>
      <Button label="Next" @click="getNextServers" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// imports
import { handleError, onMounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import LoadingBar from "@/components/LoadingBar.vue";
import Model from "@/components/Model.vue";
import Notification from "@/components/Notification.vue";
import { Button, Input, Skeleton } from "@flavorly/vanilla-components";
import { KeyStore } from "@/store/keyStore";
import type { Ref } from "vue";
import { keys } from "lodash";
import { parse } from "libphonenumber-js";
// variables
const keyStore = KeyStore();
const isLoading = ref(false);
const hasNotification = ref(false);
const notificationMessage = ref("");
const searchQuery = ref("");
const page = ref(0);

const serverList: Ref<
  {
    fhirServerName: string;
    fhirServerEndpoint: string;
    isActive: boolean;
    fhirServerDescription: string;
    serverId: string;
  }[]
> = ref([]);

const modelData = ref({
  visible: false,
  serverId: "",
});

const hideModel = () => {
  modelData.value.visible = false;
};

const triggerModel = (serverId: string) => {
  modelData.value.serverId = serverId;
  modelData.value.visible = true;
};

const getPreviousServers = () => {
  if (page.value === 0) return;
  page.value = page.value - 1;
  getServers();
};

const getNextServers = () => {
  if (serverList.value.length < 10) return;
  page.value = page.value + 1;
  getServers();
};

const getServers = async () => {
  isLoading.value = true;
  serverList.value = [];
  const servers = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/get-all-fhir-servers?skip=${
      page.value
    }`,
    {
      headers: new Headers({
        authorization: `bearer ${keyStore.getKey}`,
      }),
    }
  );

  if (!servers.ok || servers.status !== 200) {
    hasNotification.value = true;
    notificationMessage.value =
      "An unexpected error occured in getting server list";
    isLoading.value = false;
    return;
  }

  const parseServerList = await servers.json();
  serverList.value = parseServerList.data.fhirServers;
  isLoading.value = false;
};

onMounted(async () => {
  getServers();
});

const deleteServer = async () => {
  isLoading.value = true;
  const request = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/fhir-server/${
      modelData.value.serverId
    }`,
    {
      method: "DELETE",
      headers: new Headers({
        authorization: `bearer ${keyStore.getKey}`,
      }),
    }
  );

  const parseRequest = await request.json();
  if (!request.ok || request.status !== 200) {
    hasNotification.value = true;
    notificationMessage.value =
      "An unexpected error occured in deleting server. Please try later.";
    return;
  }
  hasNotification.value = true;
  notificationMessage.value =
    "FHIR server successfully deleted from the system";
  const index = serverList.value.findIndex(
    (server) => server.serverId === parseRequest.data.fhirServer.serverId
  );
  serverList.value.splice(index, 1);
  isLoading.value = false;
};

const searchServers = async () => {
  const request = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/search-server`,
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
      "An unexpected error occred in searching FHIR servers. Please try later";
    isLoading.value = false;
    return;
  }
};
</script>
