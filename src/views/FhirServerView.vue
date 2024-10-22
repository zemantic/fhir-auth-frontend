<template>
  <Navbar />
  <LoadingBar v-if="loading" />
  <Model
    message="Delete"
    @hide-model="hideModel"
    @callback-event="deleteServer"
    :modelData="modelData"
  />
  <div class="container mx-auto">
    <div class="rounded-md bg-white p-4 space-y-4">
      <Notification
        v-if="hasNotification"
        :message="notificationMessage"
        type="warning"
      />
      <h2 class="text-lg font-bold">FHIR Server Details</h2>
      <div class="control">
        <label for="serverName" class="font-semibold text-sm"
          >FHIR Server Name</label
        >
        <Input
          id="serverName"
          v-model="fhirServerName"
          placeholder="Provide a name to quickly identify the FHIR server"
          :errors="fhirServerNameErrorMessage"
          :hasErrors="fhirServerNameHasError"
        />
      </div>
      <div class="control">
        <label for="description" class="font-semibold text-sm"
          >FHIR Server Description</label
        >
        <Textarea
          v-model="fhirServerDescription"
          placeHolder="Add a description about the FHIR server for reference"
        />
      </div>

      <div class="control">
        <label for="endpoint" class="font-semibold text-sm"
          >FHIR Server Endpoint</label
        >
        <Input
          v-model="fhirServerEndpoint"
          placeholder="A valid URL to the FHIR server endpoint"
          :errors="fhirServerEndpointErrorMessage"
          :hasErrors="fhirServerEndpointHasError"
        />
      </div>

      <div class="control flex space-x-2">
        <Toggle
          v-model="fhirServerIsActive"
          :checked="fhirServerIsActive"
          text="Active"
        />
        <span class="text-red-600 font-semibold" v-if="!fhirServerIsActive"
          >Inactive</span
        >
        <span class="font-semibold" v-if="fhirServerIsActive">Active</span>
      </div>

      <div class="space-x-2">
        <Button
          @click="triggerModel(params)"
          label="Add FHIR Server"
          variant="primary"
          :loading="loading"
          :disabled="btnDisabled"
        />

        <Button
          @click="triggerModel(params)"
          label="Delete Server"
          variant="error"
          :loading="loading"
          :disabled="btnDisabled"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import { KeyStore } from "@/store/keyStore";
import { useRoute } from "vue-router";
import { Input, Textarea, Button, Toggle } from "@flavorly/vanilla-components";
import Navbar from "@/components/Navbar.vue";
import Model from "@/components/Model.vue";
import Notification from "@/components/Notification.vue";
import LoadingBar from "@/components/LoadingBar.vue";
import { keys } from "lodash";

const route = useRoute();
const loading = ref(false);
const hasNotification = ref(false);
const notificationMessage = ref("");
const keyStore = KeyStore();

const fhirServerName = ref("");
const fhirServerNameErrorMessage = ref("");
const fhirServerNameHasError = ref(false);

const fhirServerDescription = ref("");

const fhirServerEndpoint = ref("");
const fhirServerEndpointHasError = ref(false);
const fhirServerEndpointErrorMessage = ref("");
const btnDisabled = ref(false);

const fhirServerIsActive = ref(true);
const mode = ref("post");
const params: Ref<string | string[]> = ref("");
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

const addServer = async () => {
  loading.value = true;
  if (fhirServerName.value.trim().length === 0) {
    fhirServerNameErrorMessage.value = "A name for the FHIR server is required";
    fhirServerNameHasError.value = true;
    return;
  }

  if (
    fhirServerEndpoint.value.trim().length === 0 ||
    isURL(fhirServerEndpoint.value) === false
  ) {
    fhirServerEndpointHasError.value = true;
    fhirServerEndpointErrorMessage.value =
      "A valid FHIR server endpoint is required";
    return;
  }

  const request = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/fhir-server/${params.value}`,
    {
      method: mode.value.toUpperCase(),
      headers: new Headers({
        authorization: `bearer ${keyStore.key}`,
        "content-type": "application/json",
      }),
      body: JSON.stringify({
        fhirServerName: fhirServerName.value,
        fhirServerDescription: fhirServerDescription.value,
        fhirServerIsActive: fhirServerIsActive.value,
        fhirServerEndpoint: fhirServerEndpoint.value,
      }),
    }
  );

  if (!request.ok) {
    notificationMessage.value = "An error occured in adding FHIR server";
    hasNotification.value = true;
  }

  if (request.status === 200) {
    const parseServer = await request.json();
    hasNotification.value = true;
    notificationMessage.value = "New FHIR server added successfully";
  }

  loading.value = false;
};

const deleteServer = async () => {
  loading.value = true;
  const request = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/fhir-server/${route.params.id}`,
    {
      method: "DELETE",
      headers: new Headers({
        authorization: `bearer ${keyStore.key}`,
      }),
    }
  );

  if (!request.ok || request.status !== 200) {
    notificationMessage.value =
      "An unexpected error occured in deleting server";
    hasNotification.value = true;
    loading.value = false;
    return;
  }

  hasNotification.value = true;
  notificationMessage.value = "Server successfully deleted from the system";
  loading.value = false;
  btnDisabled.value = true;
};

onMounted(async () => {
  if (route.params.id && route.params.id !== "register") {
    btnDisabled.value = true;
    params.value = route.params.id;
    mode.value = "patch";
    loading.value = true;
    const server = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/fhir-server/${route.params.id}`,
      {
        headers: new Headers({
          authorization: `bearer ${keyStore.key}`,
        }),
      }
    );

    if (!server.ok || server.status !== 200) {
      notificationMessage.value =
        "An error occured in getting FHIR server details";
      hasNotification.value = true;
      loading.value = false;
      return;
    }

    const parseFhirServer = await server.json();
    fhirServerDescription.value = parseFhirServer.data.fhirServer.description;
    fhirServerEndpoint.value =
      parseFhirServer.data.fhirServer.fhirServerEndpoint;
    fhirServerName.value = parseFhirServer.data.fhirServer.fhirServerName;
    fhirServerIsActive.value = parseFhirServer.data.fhirServer.isActive;
    fhirServerDescription.value =
      parseFhirServer.data.fhirServer.fhirServerDescription;
    loading.value = false;
    btnDisabled.value = false;
  }
});

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
</script>
