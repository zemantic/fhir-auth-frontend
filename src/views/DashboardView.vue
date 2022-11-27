<template>
  <Navbar></Navbar>
  <div class="container mx-auto bg-white p-4">
    <Notification
      v-if="hasNotification"
      :message="notificationMessage"
      type="warning"
    ></Notification>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Notification from "@/components/Notification.vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  setup() {
    let clientList: Array<{ clientName: string; isActive: boolean }> = [];
    let isLoading = ref(false);
    let hasNotification = ref(false);
    let notificationMessage = ref("");

    onMounted(async () => {
      const clients = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/clients`
      ).catch((e) => {
        return new Error(e);
      });

      if (clients instanceof Error) {
        hasNotification.value = true;
        notificationMessage.value =
          "An unexpected error occured when fetching clients";
        return;
      }

      if (clients.status !== 200) {
        hasNotification.value = true;
        notificationMessage.value =
          "An unexpected error occured when fetching clients";
        return;
      }
    });

    return { clientList, isLoading, hasNotification, notificationMessage };
  },
  components: { Navbar, Notification },
});
</script>


