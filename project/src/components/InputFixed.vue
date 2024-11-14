<template>
  <q-input
    dense
    outlined
    v-model="data.modelValue"
    :label="label1"
    :type="tipo"
    :disable="data.checked"
    @focus="isSelectAllText"
  />
  <q-checkbox
    dense
    color="blue-grey"
    class="text-blue-grey"
    v-model="data.checked"
    :label="label2"
  />
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  tipo: { type: String, default: "text" },
  label1: { type: String, default: "" },
  label2: { type: String, default: "Fixar" },
  textSelect: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const data = ref({
  modelValue: String(props.modelValue),
  checked: false,
});

const isSelectAllText = (event) => {
  if (props.textSelect) event.target.select();
};

watch(
  () => props.modelValue,
  (newVal) => {
    if (data.value.checked) {
      emit("update:modelValue", data.value.modelValue);
    } else {
      data.value.modelValue = newVal;
    }
  },
  { immediate: true }
);

watch(
  () => data.value.modelValue,
  (newVal) => {
    if (!data.value.checked) {
      emit("update:modelValue", newVal);
    }
  },
  { immediate: true }
);
</script>
