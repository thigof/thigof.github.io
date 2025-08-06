<template>
  <div class="row table-content" v-if="!isMobile">
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.field" :align="header.align">
            {{ header.label }}
          </th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in getDataTable()" :key="index" @click="click(row)"
          :class="{ 'editing-row': row.id === editingRowId }">
          <td v-for="header in headers" :key="header.field">
            {{ row[header.field] }}
          </td>
          <td>
            <q-btn icon="delete" color="negative" @click.stop="remove(row)" size="sm" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="row card-grid">
    <div v-for="(row, index) in getDataTable()" :key="index" class="card"
      :class="{ 'editing-row': row.id === editingRowId }" @click="click(row)">
      <div v-for="{ field, label } in headers" :key="field">
        <strong>{{ label }}:</strong> {{ row[field] }}
      </div>
      <div class="actions">
        <q-btn icon="delete" color="negative" @click.stop="remove(row)" size="sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
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
  editingRowId: { // Nova prop para o ID da linha em edição
    type: [String, null],
    default: null,
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
.table-content {
  overflow-x: auto;
  width: 100%;
}

table {
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f4f4f4;
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

/* Novo estilo para a linha em edição */
.editing-row {
  border: 2px solid red !important;
}
</style>
