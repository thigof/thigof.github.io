<template>
  <q-input
    dense
    outlined
    v-model="inputText"
    :label="label"
    :type="inputType"
    :disable="checked"
    @focus="isSelectAllText"
  />
  <q-checkbox
    dense
    color="blue-grey"
    class="text-blue-grey"
    v-model="checked"
    :label="checkboxLabel"
  />
</template>

<script setup>
import { ref, watch, toRef } from "vue";

const props = defineProps({
  inputText: { type: String, default: "" },
  inputType: {
    type: String,
    default: "text",
  },
  checked: { type: Boolean, default: false },
  label: { type: String, default: "" },
  checkboxLabel: { type: String, default: "Fixar" },
  selectAllText: { type: Boolean, default: false },
});

const emit = defineEmits(["update"]);

const inputText = ref(props.inputText);
const checked = ref(props.checked);

const isSelectAllText = (event) => {
  if (props.selectAllText) event.target.select();
};

watch(inputText, (newVal) => {
  emit("update", newVal);
});

watch(
  () => props.checked,
  (newVal) => {
    checked.value = newVal;
  }
);
</script>
