<template>
  <div>
    <table v-if="!isMobile">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.field" :align="header.align">
            {{ header.label }}
          </th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in getDataTable()" :key="index" @click="click(row)">
          <td v-for="header in headers" :key="header.field">
            {{ row[header.field] }}
          </td>
          <td>
            <q-btn icon="delete" color="negative" @click.stop="remove(row)" size="sm" />
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="card-grid">
      <div v-for="(row, index) in getDataTable()" :key="index" class="card" @click="click(row)">
        <div v-for="{ field, label } in headers" :key="field">
          <strong>{{ label }}:</strong> {{ row[field] }}
        </div>
        <div class="actions">
          <q-btn icon="delete" color="negative" @click.stop="remove(row)" size="sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QBtn } from "quasar";

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  tableData: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["remove", "clicked"]);

const isMobile = window.innerWidth < 600;

const getDataTable = () => {
  if (!Array.isArray(props.tableData)) return [];
  return [...props.tableData].reverse() || [];
};

const click = (row) => {
  emit("clicked", row);
};

const remove = (row) => {
  emit("remove", row);
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.card {
  background: #fff;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card .actions {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .table {
    display: none;
  }
}
</style>
